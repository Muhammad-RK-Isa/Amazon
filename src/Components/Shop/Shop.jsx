import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Product from '../Product/Product';
import productsData from './../../fakeData/products.json';

const Shop = () => {
    const [ products, setProducts ] = useState( productsData );
    const defaultProducts = products.slice( 0, 10 );

    return (
        <div className='grid lg:grid-cols-5 gap-2 lg:gap-4'>
            {
                products.map( product => <Product key={ product.asin } product={ product } /> )
            }
        </div>
    );
};

export default Shop;