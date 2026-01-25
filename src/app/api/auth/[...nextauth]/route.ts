import NextAuth from "next-auth";
import CognitoPovider from "next-auth/providers/cognito";

///認証接続設定///
const handler = NextAuth({
    providers: [
        CognitoPovider({
            clientId: process.env.COGNITO_CLIENT_ID!,
              clientSecret: process.env.COGNITO_CLIENT_SECRET ?? "",
            issuer: process.env.COGNITO_ISSUER!,
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
});

export {handler as GET, handler as POST};