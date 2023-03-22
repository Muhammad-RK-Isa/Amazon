import DetailsHeader from './../DetailsHeader/DetailsHeader';
import React from 'react';
import productsData from './../../fakeData/products.json';
import { useParams } from 'react-router-dom';
import DetailsImage from './../DetailsImage/DetailsImage';

const ProductDetails = () => {
    const { asinQuery } = useParams();

    const product = productsData.find( product => product.asin === asinQuery );
    const { thumbnailImage } = product;
    return (
        <div className='grid lg:grid-cols-4 gap-4 p-4'>
            <DetailsHeader product={ product } />
            <DetailsImage thumbnailImage={ thumbnailImage } />
        </div>
    );
};


export default ProductDetails;