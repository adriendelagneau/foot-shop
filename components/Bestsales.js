import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import Card from './Card';

const Bestsales = ({products}) => {
   
    const [titi, setTiti] = useState(products)


    const handleResize = useCallback(() => {
        if(window.innerWidth < 1180){
            const yy = products.slice(1)
            setTiti(yy)
        }else setTiti(products)
    },[products])

   
    
    useEffect(() => {
        window.addEventListener('resize', handleResize);
    
        return () => window.removeEventListener('resize', handleResize);
      }, [handleResize]);

    return (
        <div>
      
        <h4 className='text-5xl  pb-[40px] capitalize'>best sales</h4>
        <div className='bestSales' >
        
        {titi.map((product,i) => (
            <Card key={i} product={product}/>
            ))}
            </div>
            </div>
    );
};

export default Bestsales;