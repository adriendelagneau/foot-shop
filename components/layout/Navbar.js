import React, {  useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import filterSearch from '../../utils/filterSearch';
import { useTheme } from 'next-themes';
import { Store } from '../../utils/Store'; 

const Navbar = ({cartOpen, setCartOpen }) => {


    const {theme, setTheme} = useTheme();
    const [logoUrl, setLogoUrl] = useState("https://res.cloudinary.com/dos8mey8r/image/upload/v1667248641/shoes/logo3_yuc669_z0rlcg_eqjhvo.png")
    const [cartUrl, setCartUrl] = useState("https://res.cloudinary.com/dos8mey8r/image/upload/v1667248641/shoes/cart8_k1irit_1_ca3abf.png")
    const [userUrl, setUserUrl] = useState("https://res.cloudinary.com/dos8mey8r/image/upload/v1667248641/shoes/user_nf6lwe_yz7id7.png")
    const [adminUrl, setAdminUrl] = useState("https://res.cloudinary.com/dos8mey8r/image/upload/v1667248641/shoes/PikPng.com_request-icon-png_3339857_mgv3au_liy3nn.png" )
   

    useEffect(() => {
     if(theme === "light"){
        setLogoUrl("https://res.cloudinary.com/dos8mey8r/image/upload/v1667248641/shoes/logo3_yuc669_z0rlcg_eqjhvo.png")
        setCartUrl("https://res.cloudinary.com/dos8mey8r/image/upload/v1667248641/shoes/cart8_k1irit_1_ca3abf.png")
        setUserUrl("https://res.cloudinary.com/dos8mey8r/image/upload/v1667248641/shoes/user_nf6lwe_yz7id7.png" )
        setAdminUrl("https://res.cloudinary.com/dos8mey8r/image/upload/v1667248641/shoes/PikPng.com_request-icon-png_3339857_mgv3au_liy3nn.png")
     }else{
        setLogoUrl("https://res.cloudinary.com/dos8mey8r/image/upload/v1667248641/shoes/logoSblack_v2u8x0.png")
        setCartUrl("https://res.cloudinary.com/dos8mey8r/image/upload/v1667248641/shoes/cartBlack_cffisf.png")
        setUserUrl("https://res.cloudinary.com/dos8mey8r/image/upload/v1667248641/shoes/userBlack_escewg.png")
        setAdminUrl("https://res.cloudinary.com/dos8mey8r/image/upload/v1667248641/shoes/adminBlack_dv4ohu.png")
     }
    }, [theme]);

    const {state } = useContext(Store);
  const { cart } = state;
  const { data : session } = useSession();
  const [ isNavbarShow, setIsNavbarShow] = useState(true);
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
        <div className={isNavbarShow ? "w-[100%] fixed animate-navbarDown"  : "w-[100%] fixed animate-navbarUp"}  >
      
        <div className='w-[100%] flex h-14 justify-between items-center z-10 bg-black dark:bg-white '>
       
         <div className='w-1/3 pl-2'>
            <Link href="/">
              <div >
                  <Image className='cursor-pointer' src={logoUrl} alt="logo"  width={90} height={40}  layout="fixed"/>
                </div>
            </Link>
          </div>
         
            <form onSubmit={makeSearch} className="w-1/3 text-center">
              <input 
                type="text" 
                placeholder='Search...'
                value={search.toLowerCase()} 
                onChange={e => setSearch(e.target.value)} 
                className="h-6 text-xl pl-2 w-full md:w-[300px]"
              />
            </form>
          

          <div className='flex justify-end w-1/3 pr-3'>

            <div className=" flex items-center content-center  relative cursor-pointer" onClick={() =>  setCartOpen(true)}>
                <Image src={cartUrl} alt="cart icon" width={40} height={40} layout="fixed"/>
                {cartItemsCount > 0 && 
                  <div className="bg-red-900 absolute rounded-full w-5 h-5 text-xs text-center top-0.5 left-6 font-bold">{cartItemsCount}</div>
                }
            </div>  

            <div className='ml-2 pt-2'>
            { session?.user.isAdmin === true 
              ? ( 
                <Link href="/admin" passHref>
                  <div>
                    <Image src={adminUrl} alt="admin" width={28} height={28} />
                  </div>
                </Link>
              )
              : session?.user 
              ? (
                <Link href="/profile">
                  <div >
                    <Image src={userUrl} alt="user" width={28} height={28} layout="fixed"/>
                  </div>
                </Link>
              )
              : ( 
                <Link href="/login" passHref>
                  <div>
                    <Image src={userUrl} alt="user" width={28} height={28} layout="fixed"/>
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