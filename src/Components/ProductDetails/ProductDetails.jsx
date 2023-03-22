import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from './../../fakeData/products.json';
import DetailsHeader from './../DetailsHeader/DetailsHeader';
import DetailsImage from './../DetailsImage/DetailsImage';
import DetailsBody from './../DetailsBody/DetailsBody';

const ProductDetails = () => {
    const { asinQuery } = useParams();

    const product = productsData.find( product => product.asin === asinQuery );
    const { thumbnailImage } = product;
    return (
        <div>
            <div className='grid lg:grid-cols-6 gap-4 p-4 h-max'>
                <DetailsHeader product={ product } />
                <DetailsImage thumbnailImage={ thumbnailImage } />
                <DetailsBody product={ product } />
            </div>
        </div>
    );
};


export default ProductDetails;