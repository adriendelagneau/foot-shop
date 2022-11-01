import React from 'react';
import Hero from './Hero';
import Test from './Test';
const BlocHero = () => {
    return (
        <div className='heroContainer'>
            <div className='left'>
                <Hero />
            </div>
            <div className='right'>
                <Test />
            </div>
        </div>
    );
};

export default BlocHero;