import React, { useState } from 'react';
import styles from '../styles/Filter.module.css';
import { useRouter } from 'next/router';
import filterSearch from '../utils/filterSearch';

const Filter = () => {
    const router = useRouter()
    const [category, setCategory] = useState(router.query.category);
    const [sort, setSort] = useState(router.query.sort);
    const [brand, setBrand] = useState(router.query.brand);

   
    const handleCategory = (e) => {
        setCategory(e.target.value);
        filterSearch({router, category: e.target.value});
    }

    const handleBrand = (e) => {
        setBrand(e.target.value);
        filterSearch({router, brand: e.target.value});
    }
    const handleSort = (e) => {
        setSort(e.target.value);
        filterSearch({router, sort: e.target.value});
    }

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <select 
                    value={category} onChange={handleCategory}>

                    <option value="all">All Category</option>
                    <option  value="women">Women</option>
                    <option  value="men">Men</option>
                    <option  value="kid">Kid</option>
                </select>

                <select 
                    value={brand} onChange={handleBrand}>

                    <option value="all">All Brands</option>
                    <option  value="nike">Nike</option>
                    <option  value="converse">converse</option>
                    <option  value="addidas">addidas</option>
                </select>
            </div>

            <div className={styles.right}>
                <select 
                    value={sort} onChange={handleSort}>

                    <option value="-createdAt">Newest</option>
                    <option value="oldest">Oldest</option>
                    <option value="-prices">Price: Hight-Low</option>
                    <option value="prices">Price: Low-Hight</option>
            </select>
        </div>

    </div>
    )
}

export default Filter;
