import nextAuth from "next-auth";
import {authConfig} from "@/auth";

///cognitoのサインイン、サインアウト等はキャッチオートルートを使用していることでauthjsが自動でレンダリングする
const handler = nextAuth(authConfig);

export {handler as GET, handler as POST};