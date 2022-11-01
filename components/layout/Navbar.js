import React, {  useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import filterSearch from '../../utils/filterSearch';
import { useTheme } from 'next-themes';
import { Store } from '../../utils/Store'; 
import Toggle from '../Toggle';

const Navbar = ({cartOpen, setCartOpen }) => {
  const { theme, setTheme } = useTheme();
  const { state } = useContext(Store);
  const { cart } = state;
  const { data : session } = useSession();
  const [isNavbarShow, setIsNavbarShow] = useState(true);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const router = useRouter();
  const [search, setSearch] = useState(router.query.search ?  router.query.search : "");
 

  let oldScrollY = 0;

  const makeSearch = (e) => {
    e.preventDefault();
    filterSearch({router, search: search ? search.toLowerCase() : 'all'});
  };

  const controlDirection = () => {
      if(window.scrollY > oldScrollY) {
        setIsNavbarShow(false);
      } else {
        setIsNavbarShow(true);
      }
      oldScrollY = window.scrollY;
  }
  
  useEffect(() => {
        window.addEventListener('scroll', controlDirection);
        return () => {
            window.removeEventListener('scroll', controlDirection);
        };
    },[]);

  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  useEffect(() => {
    cartOpen
    ?  document.body.style.overflow = 'hidden'
    : document.body.style.overflow = 'unset'
  }, [cartOpen]);


    return (
        <div className={isNavbarShow ? "w-[100%] fixed animate-navbarDown z-[999]"  : "w-[100%] fixed animate-navbarUp  z-[999]"}  >
        <div className='w-[100%] flex h-14 justify-between items-center  bg-black dark:bg-white '>
       
            <div className='flex-1 pl-2'>
                <Link href="/">
                  <div >
                      <Image className='cursor-pointer' src={theme === "dark" ? "https://res.cloudinary.com/dos8mey8r/image/upload/v1667248641/shoes/logoSblack_v2u8x0.png" :  "https://res.cloudinary.com/dos8mey8r/image/upload/v1667321595/shoes/whitelogo_lomvfv.png"} alt="logo"  width={90} height={54}  layout="fixed"/>
                    </div>
                </Link>
              </div>
         
            <form onSubmit={makeSearch} className="flex-1 text-center hidden sm:inline">
              <input 
                type="text" 
                placeholder='Search...'
                value={search.toLowerCase()} 
                onChange={e => setSearch(e.target.value)} 
                className="h-6 text-xl pl-2 w-full md:w-[300px]"
              />
            </form>
          

          <div className='flex justify-end flex-2 sm:flex-1 pr-3'>
            <Toggle  />
            <div className=" flex items-center content-center  relative cursor-pointer" onClick={() =>  setCartOpen(true)}>
                <Image src={theme === "dark" ? "https://res.cloudinary.com/dos8mey8r/image/upload/v1667248641/shoes/cartBlack_cffisf.png" : "https://res.cloudinary.com/dos8mey8r/image/upload/v1667248641/shoes/cart8_k1irit_1_ca3abf.png"} alt="cart icon" width={40} height={40} layout="fixed"/>
                {cartItemsCount > 0 && 
                  <div className="bg-red-900 absolute rounded-full w-5 h-5 text-xs text-center top-0.5 left-6 font-bold">{cartItemsCount}</div>
                }
            </div>  
            <div className='ml-3 pt-1'>
            { session?.user.isAdmin === true 
              ? ( 
                <Link href="/admin" passHref>
                  <div>
                    <Image src={theme === "dark" ? "https://res.cloudinary.com/dos8mey8r/image/upload/v1667248641/shoes/adminBlack_dv4ohu.png" : "https://res.cloudinary.com/dos8mey8r/image/upload/v1667248641/shoes/PikPng.com_request-icon-png_3339857_mgv3au_liy3nn.png"} alt="admin" width={28} height={28} />
                  </div>
                </Link>
              )
              : session?.user 
              ? (
                <Link href="/profile">
                  <div >
                    <Image src={theme === "dark" ? "https://res.cloudinary.com/dos8mey8r/image/upload/v1667317761/shoes/PngItem_1300245_rxvkjo.png" : "https://res.cloudinary.com/dos8mey8r/image/upload/v1667317761/shoes/user5_e9edin.png"} alt="user" width={26} height={28} layout="fixed"/>
                  </div>
                </Link>
              )
              : ( 
                <Link href="/login" passHref>
                  <div>
                    <Image src={theme === "dark" ? "https://res.cloudinary.com/dos8mey8r/image/upload/v1667317761/shoes/PngItem_1300245_rxvkjo.png" : "https://res.cloudinary.com/dos8mey8r/image/upload/v1667317761/shoes/user5_e9edin.png"} alt="user" width={26} height={28} layout="fixed"/>
                  </div>
                </Link>
              )
            }
            </div> 
          </div>
        </div>
        </div>
    );
};

export default Navbar;