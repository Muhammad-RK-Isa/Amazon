import React from 'react';
import Stars from './../Stars/Stars';

const Product = (props) => {
    const { title, stars, thumbnailImage, reviewsCount } = props.product;

    return (
        <div className='lg:col-start-2 lg:col-span-3 grid grid-cols-5 lg:grid-cols-4 gap-2 border rounded-sm mx-2'>

            <img className='col-span-2 lg:col-span-1 object-contain h-52 lg:h-60 mx-auto py-4 px-1' src={thumbnailImage} alt="" />

            <div className="flex flex-col col-span-3 gap-1 lg:gap-2 p-2">
                <h2 className='text-sm lg:text-xl cursor-pointer line-clamp-3'>{title}</h2>
                {
                    stars ?
                        <div className="flex items-center gap-1 lg:gap-2 text-xs">
                            <h3 className='text-cyan-700 font-semibold'>{stars}</h3>
                            <Stars stars={stars}></Stars>
                            <h3 className='font-extralight'>({reviewsCount.toLocaleString('en-US')})</h3>
                        </div> : ''
                }

            </div>

        </div>
    );
};

export default Product;