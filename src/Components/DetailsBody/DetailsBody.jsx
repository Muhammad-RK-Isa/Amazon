import React, { useState } from 'react';

const DetailsBody = ( props ) => {
    const { price, listPrice, inStock, variantAttributes, delivery, brand, description, features, asin } = props.product;
    const addToCart = props.addToCart;

    const discountPrice = () => {
        const array = price.value.toString().split( '.' );
        return (
            <><span className='text-sm relative top-[4px]'>{ price.currency }</span>{ array[ 0 ] } <span className='text-sm relative top-[4px]'>{ array[ 1 ] ? parseInt( array[ 1 ] ) > 9 ? array[ 1 ] : parseInt( array[ 1 ] ) * 10 : '00' }</span></>
        );
    };

    const friedPrice = discountPrice();

    const colorAttribute = variantAttributes.find( obj => {
        return obj.key === 'Color';
    } );

    return (
        <div className='lg:col-start-3 lg:row-start-2 lg:col-span-3 grid gap-3 lg:gap-4'>

            <div className='flex items-center gap-2 text-4xl'>
                <h1 className='text-red-600 font-extralight'>{ listPrice ? <>{ Math.round( price.value / listPrice.value * 100 ) - 100 }%</> : '' }  </h1>
                <h1 className='flex z-0'>{ friedPrice }</h1>
            </div>
            { listPrice ? <h4 className='text-xs'>List Price: <strike>{ listPrice.currency }{ listPrice.value }</strike></h4> : '' }
            { variantAttributes[ 0 ] ? <h3>{ variantAttributes[ 0 ].key }<span className="font-bold"> { variantAttributes[ 0 ].value }</span></h3> : '' }
            <div className='grid gap-3 lg:hidden'>
                <h3>Delivery <span className="font-bold">{ delivery }</span></h3>
                <h2 className='text-lg'>{ inStock ? <span className='text-green-700'>In Stock</span> : <span className='text-red-700'>Out Of Stock</span> }</h2>
                <button className='bg-[#ffd814] py-3 rounded-full hover:bg-[#c4a60e]' onClick={ () => addToCart(asin) }>Add to Cart</button>
                <button className='bg-[#ffa51c] py-3 rounded-full hover:bg-[#d28817]' title='This button is not functional yet'>Buy Now</button>
                {/* Product Details and Specifications */ }
            </div>
            <h2 className='text-lg font-semibold'>Details</h2>
            <table className='w-1/3'>
                <tbody>
                    <tr>
                        <td>Brand</td>
                        <td>{ brand }</td>
                    </tr>
                    <tr>
                        <td>{ colorAttribute ? colorAttribute.key : '' }</td>
                        <td>{ colorAttribute ? colorAttribute.value : '' }</td>
                    </tr>
                </tbody>
            </table>
            <h2 className='text-lg font-semibold'>Description</h2>
            <h3 className='line-clamp-3'>{ description ? description : 'Nothing to show here.' } </h3>
            <h2 className='text-lg font-semibold'><span className="block lg:hidden">Features</span> <span className='hidden lg:block'>About this item</span> </h2>
            <ul className='list list-disc '>
                { features ? features.map( feature => <li className='ml-4' key={ features.indexOf( feature ) }>{ feature }</li> ) : '' }
            </ul>
        </div>
    );
};

export default DetailsBody;