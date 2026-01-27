"use client"

import { SessionProvider } from "next-auth/react";
import { JSX, ReactNode } from "react";

interface Props {
  children: ReactNode;
};

///useSessionの使用にはproviderで全体をラッピングする必要があるため、SessionProviderのラッピング用tsx
const Provider = ({children}: Props):JSX.Element =>{
    return(
        <SessionProvider>
        {children}
        </SessionProvider>
    )
}

export default Provider;