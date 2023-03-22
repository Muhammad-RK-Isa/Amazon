import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import productsData from './../../fakeData/products.json';
import Product from '../Product/Product';
import Header from './../Header/Header';

const Shop = () => {
    const defaultProducts = productsData.slice( 0, 10 );
    const [ products, setProducts ] = useState( productsData );

    const addToCart = () => {
        console.log( 'Product Added' );
    };

    return (
        <div className='grid lg:grid-cols-5 gap-2 lg:gap-4'>
            {
                products.map( product => <Product key={ product.asin } product={ product } addToCart={ addToCart } /> )
            }
        </div>
    );
};

export default Shop;