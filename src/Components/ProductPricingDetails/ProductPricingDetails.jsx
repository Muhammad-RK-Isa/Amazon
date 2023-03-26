import React from 'react';

const ProductPricingDetails = ( props ) => {
    const { price, delivery, inStock, asin } = props.product;
    const  addToCart  = props.addToCart;

    const discountPrice = () => {
        const array = price.value.toString().split( '.' );
        return (
            <><span className='text-sm relative top-[4px]'>{ price.currency }</span>{ array[ 0 ] } <span className='text-sm relative top-[4px]'>{ array[ 1 ] ? parseInt( array[ 1 ] ) > 9 ? array[ 1 ] : parseInt( array[ 1 ] ) * 10 : '00' }</span></>
        );
    };

    const friedPrice = discountPrice();

    return (
        <div className='hidden lg:grid col-start-6 row-start-1 row-span-2 col-span-1'>
            <div className="flex flex-col gap-3 border rounded-lg p-4 h-min">
                <h2 className='text-3xl flex z-0'>{ friedPrice }</h2>
                <h3 className='text-sm'>Delivery <span className="font-semibold">{ delivery }</span></h3>
                <h2 className='text-lg'>{ inStock ? <span className='text-green-700'>In Stock</span> : <span className='text-red-700'>Out Of Stock</span> }</h2>
                <button className='bg-[#ffd814] py-1 rounded-full hover:bg-[#c4a60e] text-sm' onClick={ () => addToCart( asin ) }>Add to Cart</button>
                <button className='bg-[#ffa51c] py-1 rounded-full hover:bg-[#d28817] text-sm' title='This button is not functional yet'>Buy Now</button>
            </div>
        </div>
    );
};

export default ProductPricingDetails;