import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const Toggle = () => {

    const {theme, setTheme} = useTheme();

    const handleClick = () => {
        if(theme === 'dark'){
            setTheme('light')
        }else{
            setTheme('dark')
        }
    }

    return (
       
        <div onClick={() => handleClick()} className={theme === "dark" ? "toggle night" : 'toggle' }>
        
        <div className="notch"></div>
        <div>
            <div className="shape sm" />
            <div className="shape sm" />
            <div className="shape md" />
            <div className="shape lg" />
        </div>
    </div>
      
    );
};

export default Toggle;