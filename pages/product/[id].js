import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useEffect, useState, useContext } from "react";
import { Store } from "../../utils/Store";
import { toast } from "react-toastify";
import { getData } from '../../utils/fetchData'
import Rate from "../../components/Rating";
import Tourniquet from "../../components/Tourniquet";
import { useSession } from 'next-auth/react';
import RatingStars from "../../components/RatingStars";
import dbConnect from "../../utils/mongo";


const Product = (props) => {

  const {state, dispatch} = useContext(Store)
 const [product] = useState(props.product)

  const [selectedSize, setSelectedSize] = useState(0);
  const [size,setSize] = useState("")

const stars = Math.ceil(product.rating.reduce((a, c) => a + c.rate, 0) / product.rating.length )




  const [index, setIndex] = useState(product.img)
  const price = product.prices
  const productId = product._id
  const title = product.title
  const productImg = product.img

  
  useEffect(() => {
    setSize(selectedSize[0])
  }, [selectedSize]);
  
  
const addToCartHandler = () => {
  if(size !== (undefined)){ 
    const existItem = state.cart.cartItems.find(
      (item) =>  item._id === product._id 
    );
    const isSameSize = existItem = state.cart.cartItems.find(
      (item) =>  item.size == size 
    );
  
    const quantity = isSameSize ? isSameSize.quantity + 1 : 1;


    const titi =  product.sizes.filter((x) =>  Object.keys(x) == size )
  

    if(Object.values(titi[0]) == quantity -1){
      toast.error("no stock enough")
      return;
    }
    
    dispatch({ type: 'CART_ADD_ITEM', payload: {productId:productId, title, quantity, sizes: product.sizes, size,img:productImg, price } });
    toast.success("sucess")
   

  }else{
    toast.info("Choose a size")
  }
}


  return (
    <div>
   
    <div className={styles.container}>

      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={index} width={700} height={700} alt="" />
          <div className={styles.icons}>
        <div className={styles.slide}  onClick={() => setIndex(product.img)} >
            <Image src={product.img} alt='' width={130} height={150} />
        </div>
        <div className={styles.slide} onClick={() => setIndex(product.img2)}>
            <Image src={product.img2} alt='' width={130} height={150} />
        </div>
        <div className={styles.slide}  onClick={() => setIndex(product.img3)}>
            <Image src={product.img3} alt='' width={130} height={150} />
        </div>
        <div className={styles.slide}  onClick={() => setIndex(product.img4)}>
            <Image src={product.img4} alt='' width={130} height={150} />
        </div>
        <div className={styles.slide}  onClick={() => setIndex(product.img5)}>
            <Image src={product.img5} alt='' width={130} height={150} />
        </div>
    </div>
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{product.title}</h1>
<div className={styles.rating}>

      <RatingStars num={stars} size={"large"}/>
        </div>  
        <span className={styles.price}>{product.prices} €</span>
        <span className={styles.brand}>{product.brand}</span>
        <p className={styles.desc}>{product.desc}</p>
        <div className={styles.sizeLabel}>Sizes:</div>
        <div className={styles.titi}>
          <div className={styles.sizes}>
          {product.sizes.map((size, i) => (
            <div key={i}>
              <button className={Object.keys(size) == selectedSize[0] ? styles.selected : styles.size} disabled={Object.values(size) == 0 && true}  onClick={() => setSelectedSize( Object.keys(size))} >{Object.keys(size)} </button>
            </div>
            ))}
          </div>
        </div>
        <div className={styles.add}>
            <button className={styles.btn} onClick={() => addToCartHandler()}>Add to Cart</button>
        </div>
      </div>
      
   
      
      </div>

      <div className="flex w-full">

        <div className="flex-1">
          <div>
            <div>
              <h3>Give your opinion: </h3>
              <Rate product={props.product}/></div>
            </div>
            <div><Tourniquet /></div>
          </div>
          <div className="flex-1">
          <h3>Last reviews:</h3>
            {
              product.rating.map((p,i) => (
                <div key={i}>
                  <p>{p.userName}</p>
                  <div><RatingStars num={p.rate} size={"small"}/></div>
                  <p>{p.comment}</p>

                </div>
              ))
            }
          </div>
        </div>
    </div>
  );
};



export async function getServerSideProps({params: {id}}) {

  
  const res = await  getData(`products/${id}`)
  return {
    props: { product: res.product }, 
  }
}



export default Product;