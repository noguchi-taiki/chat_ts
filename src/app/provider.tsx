"use client"

import { SessionProvider } from "next-auth/react";
import { JSX, ReactNode } from "react";

interface Props {
  children: ReactNode;
};

const Provider = ({children}: Props):JSX.Element =>{
    return(
        <SessionProvider>
        {children}
        </SessionProvider>
    )
}

export default Provider;