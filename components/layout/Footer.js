import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';


const Footer = () => {

    const {theme, setTheme} = useTheme();
    
    return (
        <div className="h-[100px] bg-black text-white flex items-center mt-20 dark:bg-white">

           <div className="p-3 hidden md:inline md:w-1/3">
                <Image onClick={() => setTheme(theme === "dark" ? "light" : "dark")} src={theme === 'light' ? "https://res.cloudinary.com/dos8mey8r/image/upload/v1667204795/shoes/white-logo_wnricn.png" : "https://res.cloudinary.com/dos8mey8r/image/upload/v1667206083/shoes/blacklogo_cowjyc.png"} alt="logo" width={150} height={70} layout="fixed"/>
           </div>

           <div className="w-full flex justify-center content-center gap-[2vw] md:w-1/3">
                <div className="hover:animate-slurp cursor-pointer">
                    <Image src={theme === "light" ? "https://res.cloudinary.com/dos8mey8r/image/upload/v1661934715/shoes/facebook_zmebso.png" : "https://res.cloudinary.com/dos8mey8r/image/upload/v1667206837/shoes/facebook_black_tm6fd9.png"}alt="facebook" width={50} height={50} layout="fixed"/>
                </div>
                <div className="hover:animate-slurp cursor-pointer ">
                    <Image src= { theme === "light" ? "https://res.cloudinary.com/dos8mey8r/image/upload/v1661934728/shoes/twiter_qvjn7o.png"  : "https://res.cloudinary.com/dos8mey8r/image/upload/v1667206837/shoes/twiter_black_xtoule.png"}alt="twiter" width={50} height={50} layout="fixed"/>
                </div>
                <div className="hover:animate-slurp cursor-pointer">
                    <Image src={theme === "light" ? "https://res.cloudinary.com/dos8mey8r/image/upload/v1661934715/shoes/insta_sfsmx0.png" : "https://res.cloudinary.com/dos8mey8r/image/upload/v1667206837/shoes/linkin_black_kf3yqh.png"} alt="instagram" width={50} height={50} layout="fixed"/>
                </div>
                <div className="hover:animate-slurp cursor-pointer">
                    <Image src={theme === "light" ? "https://res.cloudinary.com/dos8mey8r/image/upload/v1661934720/shoes/linkin_mqgubq.png" : "https://res.cloudinary.com/dos8mey8r/image/upload/v1667206837/shoes/linkin_black_kf3yqh.png"} alt="logo" width={50} height={50} layout="fixed"/>
                </div>
           </div>
           
           <div className="text-xl text-right hidden md:w-1/3 items-center pl-[10vw] md:flex md:flex-col xl:pl-[20vw] dark:text-black" >
                <span>@copyright 2022</span>
                <span className='w-auto'>b166er</span>
           </div>

        </div>
    );
};

export default Footer;