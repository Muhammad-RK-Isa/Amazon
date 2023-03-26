import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const CartItem = ( props ) => {
    const { title, thumbnailImage, asin, price, inStock, variantAttributes } = props.product;
    const cart = props.cart;

    const discountPrice = () => {
        const array = price.value.toString().split( '.' );
        return (
            <><span className='text-xs relative top-[4px]'>{ price.currency }</span>{ array[ 0 ] } <span className='text-xs relative top-[4px]'>{ array[ 1 ] ? parseInt( array[ 1 ] ) > 9 ? array[ 1 ] : parseInt( array[ 1 ] ) * 10 : '00' }</span></>
        );
    };

    const friedPrice = discountPrice();


    return (
        <div>
            <div className='grid grid-cols-3 border-y'>
                <div className='p-4 flex flex-col items-center justify-center gap-4'>
                    <img src={ thumbnailImage } alt="" />
                    <div className='grid grid-cols-3 items-center justify-between border rounded-md mx-2 overflow-hidden'>
                        <AiOutlineMinus className='bg-gray-200 h-full w-full px-1' />
                        <span className='h-full w-full px-1 flex justify-center items-center shadow-gray-200 shadow-inner'>{ cart[ asin ] }</span>
                        <AiOutlinePlus className='bg-gray-200 h-full w-full px-1 py-1' />
                    </div>
                </div>

                <div className='col-span-2 p-2 grid gap-1'>
                    <h3 className='text-sm line-clamp-2'>{ title }</h3>
                    <h2 className='text-2xl flex font-semibold'>{ friedPrice }</h2>
                    <h2 className='text-sm'>{ inStock ? <span className='text-green-700'>In Stock</span> : <span className='text-red-700'>Out Of Stock</span> }</h2>
                    { variantAttributes[ 0 ] ? <h3 className='text-sm'>{ variantAttributes[ 0 ].key }<span className="font-bold"> { variantAttributes[ 0 ].value }</span></h3> : '' }
                </div>
            </div>
        </div>
    );
};

export default CartItem;