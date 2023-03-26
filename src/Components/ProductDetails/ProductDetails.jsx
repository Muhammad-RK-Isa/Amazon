import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import productsData from './../../fakeData/products.json';
import DetailsBody from './../DetailsBody/DetailsBody';
import DetailsHeader from './../DetailsHeader/DetailsHeader';
import DetailsImage from './../DetailsImage/DetailsImage';
import ProductInfo from './../ProductInfo/ProductInfo';
import ProductPricingDetails from './../ProductPricingDetails/ProductPricingDetails';

const ProductDetails = () => {
    const { asinQuery } = useParams();

    const product = productsData.find( product => product.asin === asinQuery );
    const { thumbnailImage, attributes } = product;

    const [ cart, setCart ] = useState( [] );

    const addToCart = ( product ) => {
        const newCart = [ ...cart, product ];
        const sameProduct = newCart.filter( ( pdAsin ) => pdAsin === asinQuery );
        let productCount = sameProduct.length;
        const dataBase = getDatabaseCart();
        for (const pd in dataBase) {
            if (pd === product) {
                productCount += dataBase[ product ];
            };
        };
        addToDatabaseCart( asinQuery, productCount );
    };

    return (
        <div>
            <div className='grid lg:grid-cols-6 gap-4 p-4 h-max'>
                <DetailsHeader product={ product } />
                <DetailsImage thumbnailImage={ thumbnailImage } />
                <DetailsBody product={ product } addToCart ={addToCart} />
                <ProductInfo infoAttributes={ attributes } />
                <ProductPricingDetails product={ product } addToCart={ addToCart } /> {/* For large devices only */}
            </div>
        </div>
    );
};


export default ProductDetails;