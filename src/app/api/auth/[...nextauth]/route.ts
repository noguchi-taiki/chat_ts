import nextAuth from "next-auth";
import cognitoPovider from "next-auth/providers/cognito";

///認証接続設定
///cognitoのサインイン、サインアウト等はキャッチオートルートを使用していることでauthjsが自動でレンダリングする
const handler = nextAuth({
    providers: [
        cognitoPovider({
            clientId: process.env.COGNITO_CLIENT_ID!,
            clientSecret: process.env.COGNITO_CLIENT_SECRET!,
            issuer: process.env.COGNITO_ISSUER!,
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
});

export {handler as GET, handler as POST};