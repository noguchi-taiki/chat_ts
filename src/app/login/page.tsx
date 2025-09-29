"use client";

import { useState } from "react";
import { useRouter } from "next/router";

interface LoginResponce {
    ok? : boolean;
    error? : string;
    username? : string;
}

const LoginPage = () => {
    const router = useRouter();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e:React.FormEvent) =>{
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            const res = await fetch("/api/login",{
                method:"POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ username, password }),
            });
            const data = (await res.json()) as LoginResponce;

            if(res.ok){
                router.push("/chat");
            } else {
                setError(data.error ?? "Login failed");
            }
        } catch (error) {
            console.error(error);
            setError("Network error");
        } finally {
            setLoading(false);
        }
    };

    return(
        <main style={{ padding: 24 }}>
            <h1>ログイン</h1>
            <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 8 }}>
            <label>
                ユーザー名
                <br />
                <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                />
            </label>
        </div>

        <div style={{ marginBottom: 8 }}>
          <label>
            パスワード
            <br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
        </main>
    )
}

export default LoginPage();