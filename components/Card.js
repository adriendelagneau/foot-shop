import Image from 'next/image';
import React from 'react';

const Card = ({product}) => {
   
    return (
        <div className="container-3d">
            <div className="card">
                <div className="front bg-zinc-50 dark:bg-gray-900 dark:text-white ">
                    <div className="front-content flex-col mt">
    
                 
                    <div className='text-3xl mt-12 capitalize ' >{product.title}</div>
               
                    <div className='pt-20'>
                    <Image src={product.imgPng} alt="" width={280} height={200} className="mt-" />
                    </div>
                        
                        </div>
                </div>
                <div className="back bg-zinc-50 dark:bg-gray-900 dark:text-white">
                    <div className="back-content relative ">
                        <h5 className='mb-6 capitalize text-center text-3xl'>{product.title}</h5>
                        <div>{product.desc}</div>
                        <button className='mt-10 mx-auto'>voir</button>
                    </div>
                </div>
            </div>
    </div>
    );
};

export default Card;