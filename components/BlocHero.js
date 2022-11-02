import React from 'react';
import Hero from './Hero';
import Test from './Test';
const BlocHero = () => {
    return (
        <div className='bg-black dark:bg-white text-white dark:text-black clip-polygon w-[90%] h-auto mx-auto mt-14  pb-[120px] xl:flex xl:pb-[20px]'>
            <div className='flex-1'>
                <Hero />
            </div>
            <div className='flex-1 xl:pb-[30px]'>
                <Test />
            </div>
        </div>
    );
};

export default BlocHero;