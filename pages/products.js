import React, { useEffect, useState } from 'react';
import Filter from '../components/Filter';

import {getData} from '../utils/fetchData'
import styles from '../styles/Products.module.css'
import Card from '../components/Card';

import useScroll from '../utils/useScroll'
import Card2 from '../components/Card2';

const Products = (props) => {
  const [products, setProducts] = useState(props.products)

const [titi, setTiti] = useState([])
const [index,setIndex] = useState(6)
const scrollPosition = useScroll()



useEffect(() => {
  if(titi.length != products.length){

    if(scrollPosition >= document.body.offsetHeight - (1.2*window.innerHeight)){
     setIndex(index +6)
       }
      }else{console.log('full')}
}, [scrollPosition])


  useEffect(() => {
      setProducts(props.products)
    },[props.products])

    useEffect(() => {
      setTiti(products.slice(0,index))
    }, [products, index])




  return (
      <div>
          <Filter />
          <div className={styles.container}>
        

          
          {titi.map((p,i) => (
            <div key={i}>
            
              <Card2 product={p} />
              </div>
              ))}
       
          </div>
      </div>
  );
};

export async function getServerSideProps({query}) {
 
  const category = query.category || 'all'
  const brand = query.brand || 'all'
  const sort = query.sort || ''
  const search = query.search || 'all'



  const res = await getData(
    `products?category=${category}&brand=${brand}&sort=${sort}&title=${search}`
  )
  // server side rendering
  return {
    props: {
      products: res.products,
      result: res.result
    }, // will be passed to the page component as props
  }
}


export default Products;