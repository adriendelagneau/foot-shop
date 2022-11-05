import React from 'react';
import Hero from './Hero';
import Test from './Test';
const BlocHero = () => {
    return (
        <div className='  2xl:w-full w-[90%] mx-auto h-auto  mt-14  pb-[50px] xl:flex xl:pb-[20px]'>
            <div className='flex-1'>
                <Hero />
            </div>
            <div className='flex-1 '>
                <Test />
            </div>
        </div>
    );
};

export default BlocHero;