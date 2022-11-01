import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';

const Test = () => {
    const [open, setOpen] = useState(false)

  

    const handleResize = useCallback(() => {
        setOpen(false)
    },[])
    
    useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    return (
        <div className="containerZ">
            <button onClick={() => setOpen(!open)} >click me</button>
            <div className="boxZ">
                <div className={!open ? "faceZ" : "faceZ open"}><Image src="/cam-ferland-YS4vln2TCAE-unsplash.jpg" alt="" width={280} height={280} layout='responsive'/></div>
                <div className={!open ? "faceZ" : "faceZ open"}><Image src="/WallpaperDog-10799677.jpg" alt="" width={280} height={280} layout='responsive'/></div>
                <div className={!open ? "faceZ" : "faceZ open"}><Image src="/istockphoto-1264627301-612x612.jpg" alt="" width={280} height={280} layout='responsive'/></div>
                <div className={!open ? "faceZ" : "faceZ open"}><Image src="/erik-mclean-9c-MHu9fp6M-unsplash.jpg" alt="" width={280} height={280} layout='responsive'/></div>
                <div className={!open ? "faceZ" : "faceZ open"}><Image src="/lindsay-henwood-7_kRuX1hSXM-unsplash.jpg" alt="" width={280} height={280} layout='responsive'/></div>
                <div className={!open ? "faceZ" : "faceZ open"}><Image src="/erik-mclean-9c-MHu9fp6M-unsplash.jpg" alt="" width={280} height={280} layout='responsive'/></div>
            </div>
        </div>
    );
};

export default Test;