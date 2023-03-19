import React from 'react';

const Product = (props) => {
    const { title, key, category, seller, wholePrice, stock, star, starCount, img, url, features, thumbnailImage } = props.product;
    return (
        <div className='lg:col-start-2 lg:col-span-3 grid grid-cols-3 gap-2 lg:gap-4 '>

            <img className='object-contain h-52 lg:h-60 mx-auto py-4 px-1' src={thumbnailImage} alt="" />

            <div className="flex flex-col col-span-2 pr-2 py-2">
                <h2 className='lg:text-xl text-indigo-600 cursor-pointer line-clamp-2'>{title}</h2>
            </div>

            <hr className='border-none bg-gray-300 h-[1px] col-span-3 mx-1' />
        </div>
    );
};

export default Product;