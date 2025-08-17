import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const LoginCheck = async () => {
  const cookieStore = await cookies();
  const session_id = cookieStore.get("session_id");
  if(session_id){
    redirect("/chat");
  }else{
    redirect("/login");
  }
  return<>
  <h1>PageLoad...</h1>
  </>
}

export default LoginCheck;