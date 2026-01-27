import { handlers } from "@/auth";

///cognitoのサインイン、サインアウト等はキャッチオートルートを使用していることでauthjsが自動でレンダリングする
export const {GET, POST} = handlers;