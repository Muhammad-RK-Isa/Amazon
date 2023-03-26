import React, { useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import productsData from '../../fakeData/products.json';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
    const cartItems = getDatabaseCart();
    const [ cart, setCart ] = useState( cartItems );
    const cartItemsAsins = Object.keys( cartItems );
    const savedProducts = productsData.filter( pd => cartItemsAsins.includes( pd.asin ) );

    return (
        <div className='grid lg:grid-cols-6 mt-8'>
            <div className="lg:col-start-2 lg:col-span-4">
                { savedProducts.map( product => <CartItem product={ product } cart={ cart } /> ) }
            </div>
        </div>
    );
};

export default Cart;