'use client';

import { useEffect } from 'react';
import { useTitle } from '../layout';

const Chat = () => {
  const {setTitle} = useTitle();
  useEffect(() => {
    setTitle("Chat");
  }, []);
  return<>
  
  </>
}

export default Chat;