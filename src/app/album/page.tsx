'use client';

import { useEffect } from 'react';
import { useTitle } from '../layout';

const Album = () => {
    const {setTitle} = useTitle();
    useEffect(()=>{
        setTitle("Album");
    },[]);
    return <>
    
    </>
}

export default Album;