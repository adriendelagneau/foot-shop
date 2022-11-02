import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import Link from 'next/link';


const Footer = () => {

    const {theme, setTheme} = useTheme();
    const [logoUrl, setLogoUrl] = useState("https://res.cloudinary.com/dos8mey8r/image/upload/v1667244826/shoes/white-logo_wnricn_eeqs6q.png")
    const [twitter, setTwitter] = useState("https://res.cloudinary.com/dos8mey8r/image/upload/v1667244396/shoes/twiter_qvjn7o_2_daqlyw.png")
    const [insta, setInsta] = useState("https://res.cloudinary.com/dos8mey8r/image/upload/v1667244396/shoes/insta_sfsmx0_2_rznmad.png" )
    const [facebook, setFacebook] = useState("https://res.cloudinary.com/dos8mey8r/image/upload/v1667244396/shoes/facebook_zmebso_2_njspxm.png")
    const [linkin, setLinkin] = useState("https://res.cloudinary.com/dos8mey8r/image/upload/v1667244396/shoes/linkin_mqgubq_2_fagmkj.png")

    useEffect(() => {
     if(theme === "light"){
        setLogoUrl("https://res.cloudinary.com/dos8mey8r/image/upload/v1667244826/shoes/white-logo_wnricn_eeqs6q.png")
        setTwitter("https://res.cloudinary.com/dos8mey8r/image/upload/v1667244396/shoes/twiter_qvjn7o_2_daqlyw.png")
        setInsta("https://res.cloudinary.com/dos8mey8r/image/upload/v1667244396/shoes/insta_sfsmx0_2_rznmad.png" )
        setFacebook("https://res.cloudinary.com/dos8mey8r/image/upload/v1667244396/shoes/facebook_zmebso_2_njspxm.png" )
        setLinkin("https://res.cloudinary.com/dos8mey8r/image/upload/v1667244396/shoes/linkin_mqgubq_2_fagmkj.png")
     }else{
        setLogoUrl("https://res.cloudinary.com/dos8mey8r/image/upload/v1667206083/shoes/blacklogo_cowjyc.png")
        setTwitter( "https://res.cloudinary.com/dos8mey8r/image/upload/v1667244009/shoes/twiter_qvjn7o_1_v3arxn.png")
        setInsta("https://res.cloudinary.com/dos8mey8r/image/upload/v1667244008/shoes/insta_sfsmx0_1_fcczre.png")
        setFacebook("https://res.cloudinary.com/dos8mey8r/image/upload/v1667244008/shoes/facebook_zmebso_1_vlfz38.png")
        setLinkin("https://res.cloudinary.com/dos8mey8r/image/upload/v1667244008/shoes/linkin_mqgubq_1_tx1mez.png")
     }
    }, [theme]);
    
    return (
        <div className="h-[100px] bg-black text-white flex items-center   dark:bg-white ">

           <div className="px-3 hidden md:inline md:w-1/3">
                <Image onClick={() => setTheme(theme === "dark" ? "light" : "dark")} src={logoUrl} alt="logo" width={150} height={90} priority/>
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