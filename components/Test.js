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
        <div className="containerZ dark:bg-white relative text-center mt-14 flex-1 h-auto">
            <button  onClick={() => setOpen(!open)} className="text-black dark:bg-black dark:text-white">click me</button>
            <div className="boxZ h-[220px] w-[220px] my-[150px] mx-auto ">
                <div className={!open ? "faceZ" : "faceZ open"}><Image src="/cam-ferland-YS4vln2TCAE-unsplash.jpg" alt="" width={220} height={220} /></div>
                <div className={!open ? "faceZ" : "faceZ open"}><Image src="/cam-ferland-YS4vln2TCAE-unsplash.jpg" alt="" width={220} height={220} /></div>
                <div className={!open ? "faceZ" : "faceZ open"}><Image src="/cam-ferland-YS4vln2TCAE-unsplash.jpg"  alt="" width={220} height={220} /></div>
                <div className={!open ? "faceZ" : "faceZ open"}><Image src="/cam-ferland-YS4vln2TCAE-unsplash.jpg"  alt="" width={220} height={220} /></div>
                <div className={!open ? "faceZ" : "faceZ open"}><Image src="/cam-ferland-YS4vln2TCAE-unsplash.jpg"  alt="" width={220} height={220} /></div>
                <div className={!open ? "faceZ" : "faceZ open"}><Image src="/cam-ferland-YS4vln2TCAE-unsplash.jpg"  alt="" width={220} height={220} /></div>
            </div>
        </div>
    );
};

export default Test;