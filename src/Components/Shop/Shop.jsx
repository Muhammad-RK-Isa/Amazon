import React, { useState } from 'react';
import fakeData from './../../fakeData/index';
import androids from './../../fakeData/android';
import productsData from './../../fakeData/products.json'
import Product from '../Product/Product';


const Shop = () => {
    const defaultProducts = productsData.slice(0, 10);
    const [products, setProducts] = useState(productsData);

    return (
        <div className='grid lg:grid-cols-5 gap-2 lg:gap-4'>
            {
                products.map(product => <Product key = {product.asin} product = {product} />)
            }
        </div>
    );
};

export default Shop;