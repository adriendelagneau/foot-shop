import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import Link from 'next/link';


const Footer = () => {

    const {theme, setTheme} = useTheme();

    const logo1 = "https://res.cloudinary.com/dos8mey8r/image/upload/v1667204795/shoes/white-logo_wnricn.png"



    const [logoUrl, setLogoUrl] = useState("https://res.cloudinary.com/dos8mey8r/image/upload/v1667204795/shoes/white-logo_wnricn.png")
    const [twitter, setTwitter] = useState("https://res.cloudinary.com/dos8mey8r/image/upload/v1661934728/shoes/twiter_qvjn7o.png")
    const [insta, setInsta] = useState("https://res.cloudinary.com/dos8mey8r/image/upload/v1661934715/shoes/insta_sfsmx0.png" )
    const [facebook, setFacebook] = useState("https://res.cloudinary.com/dos8mey8r/image/upload/v1661934715/shoes/facebook_zmebso.png" )
    const [linkin, setLinkin] = useState("https://res.cloudinary.com/dos8mey8r/image/upload/v1661934720/shoes/linkin_mqgubq.png")

    useEffect(() => {
     if(theme === "light"){
        setLogoUrl("https://res.cloudinary.com/dos8mey8r/image/upload/v1667204795/shoes/white-logo_wnricn.png")
        setTwitter("https://res.cloudinary.com/dos8mey8r/image/upload/v1661934728/shoes/twiter_qvjn7o.png")
        setInsta("https://res.cloudinary.com/dos8mey8r/image/upload/v1661934715/shoes/insta_sfsmx0.png" )
        setFacebook("https://res.cloudinary.com/dos8mey8r/image/upload/v1661934715/shoes/facebook_zmebso.png" )
        setLinkin("https://res.cloudinary.com/dos8mey8r/image/upload/v1661934720/shoes/linkin_mqgubq.png")
     }else{
        setLogoUrl("https://res.cloudinary.com/dos8mey8r/image/upload/v1667206083/shoes/blacklogo_cowjyc.png")
        setTwitter( "https://res.cloudinary.com/dos8mey8r/image/upload/v1667206837/shoes/twiter_black_xtoule.png")
        setInsta("https://res.cloudinary.com/dos8mey8r/image/upload/v1667206837/shoes/insta_black_bnnwkx.png")
        setFacebook("https://res.cloudinary.com/dos8mey8r/image/upload/v1667206837/shoes/facebook_black_tm6fd9.png")
        setLinkin("https://res.cloudinary.com/dos8mey8r/image/upload/v1667206837/shoes/linkin_black_kf3yqh.png")
     }
    }, [theme]);
    
    return (
        <div className="h-[100px] bg-black text-white flex items-center  dark:bg-white">

           <div className="p-3 hidden md:inline md:w-1/3">
                <Image onClick={() => setTheme(theme === "dark" ? "light" : "dark")} src={logo1} alt="logo" width={150} height={80} />
           </div>


           <div className="w-full flex justify-center content-center gap-[2vw] md:w-1/3">
                <div className="hover:animate-social cursor-pointer">
                    <Image src={facebook} alt="facebook" width={50} height={50}/>
                </div>
                <div className="hover:animate-social cursor-pointer ">
                    <Image src= {twitter} alt="twiter" width={50} height={50} />
                </div>
                <div className="hover:animate-social cursor-pointer">
                    <Image src={insta} alt="instagram" width={50} height={50}/>
                </div>
                <div className="hover:animate-social cursor-pointer">
                    <Image src={linkin} alt="logo" width={50} height={50} />
                </div>
           </div>
        
           <div className="text-xl text-right hidden md:w-1/3 items-center pl-[10vw] md:flex md:flex-col xl:pl-[20vw] dark:text-black" >
                <span>@copyright 2022</span>
                <span className=' font-Graffiti text-4xl pt-2 cursor-pointer'><Link href="mailto:delagneauadrien@yahoo.fr" target="_blank" rel="noopener noreferrer">b166er</Link></span>
           </div>

        </div>
    );
};

export default Footer;