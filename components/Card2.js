import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from "../styles/Card.module.css"

const Card2 = ({product}) => {
    return (
        <div>
        <Link  href={`/product/${product._id}`} >
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <Image src={product.img} alt={product.title} width={460} height={460}/>
            </div>
            <div className={styles.infos}>
                <div>{product.title}</div>
                <div>{product.prices} €</div>
            </div>
        </div>
        </Link>
        </div>
    );
};

export default Card2;