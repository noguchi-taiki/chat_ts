import NextAuth from "next-auth";
import cognitoPovider from "next-auth/providers/cognito";

///認証接続設定
export const {
  auth,
  handlers,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    cognitoPovider({
      clientId: process.env.COGNITO_CLIENT_ID!,
      clientSecret: process.env.COGNITO_CLIENT_SECRET!,
      issuer: process.env.COGNITO_ISSUER!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});