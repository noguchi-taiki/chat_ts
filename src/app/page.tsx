import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";

// const JWT_SECRET = process.env.JWT_SECRET;
const JWT_SECRET = "hoge";

const HomePage = async () => {

  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value

  if(token!=undefined){
    try {
      jwt.verify(token,JWT_SECRET);
      redirect("/chat");
    } catch (error) {
      redirect("/login");
    }
  } else {
    redirect("/login");
  }
  
  return<>
  <h1>PageLoad...</h1>
  </>
}

export default HomePage;