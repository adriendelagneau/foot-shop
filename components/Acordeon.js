import Link from 'next/link';
import React from 'react';

const Acordeon = () => {
    return (
        <div className='containerCat'>
        <h3 className='text-5xl ml-10 mb-10'>category</h3>
            <div className="imgAccordion">
                <Link href="/products?category=men" scroll={false} >
                    <div className="img img1">
                        <p> homme </p>
                    </div>
                </Link>
                <Link href="/products?category=kid" scroll={false} >
                    <div className="img img2">
                        <p> enfant </p>
                    </div>
                </Link>
                <Link href="/products?category=women" scroll={false} >
                    <div className="img img3">
                        <p> femme </p>
                    </div>
            </Link>
             
            </div>
        </div>
    );
};

export default Acordeon;