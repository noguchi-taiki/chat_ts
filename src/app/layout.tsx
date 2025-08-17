'use client';

import React, { createContext,useContext,useState,ReactNode} from 'react';
import Header from './components/Header/header';
import Styles from './styles/layout.module.css';
import './styles/globals.css';



interface LayoutProps {
  children: ReactNode;
}

interface tittiltContextType{
  setTitle:(title: "Chat" | "Event" | "Album" | "Location") => void,
}

const titleContext = createContext<tittiltContextType>({
  setTitle: ()=>{}
})

export const useTitle = () => useContext(titleContext);
const Layout = ({children}:LayoutProps) => {
  const [title , setTitle] = useState<"Chat" | "Event" | "Album" | "Location">("Chat");
  return (
    <html lang="jp">
      <head>
        <title>chat app</title>
      </head>
      <body>
        <titleContext.Provider value={{ setTitle }}>
          <div className="app-container">
            <Header headerTitle={title} />
            {children}
          </div>
        </titleContext.Provider>
      </body>
    </html>
  );
}
export default Layout;