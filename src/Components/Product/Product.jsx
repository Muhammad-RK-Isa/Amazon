import React from 'react';
import { Link } from 'react-router-dom';
import Stars from './../Stars/Stars';

const Product = (props) => {

    const { title, stars, thumbnailImage, reviewsCount, price, listPrice, delivery, asin } = props.product;

    const discountPrice = () => {
        const array = price.value.toString().split('.');
        return (
            <><span className='text-sm relative top-[3px]'>{price.currency}</span>{array[0]} <span className='text-sm relative top-[2px]'>{array[1] ? parseInt(array[1]) > 9 ? array[1] : parseInt(array[1]) * 10 : '00' }</span></>
        )
    }

    const friedPrice = discountPrice();


    return (
        <div className='lg:col-start-2 lg:col-span-3 grid grid-cols-5 lg:grid-cols-4 gap-2 border rounded-sm mx-2'>

            <img className='col-span-2 lg:col-span-1 object-contain h-52 lg:h-60 mx-auto py-4 px-1' src={thumbnailImage} alt="" />

            <div className="flex flex-col col-span-3 gap-1 lg:gap-2 p-2">
                <Link to={`${asin}`}>
                    <h2 className='text-sm lg:text-xl cursor-pointer line-clamp-3'>{title}</h2>
                </Link>
                {/* Stars and Ratings */}
                {
                    stars ?
                        <div className="flex items-center gap-1 lg:gap-2 text-xs">
                            <h3 className='text-cyan-700 '>{stars}</h3>
                            <Stars stars={stars}></Stars>
                            <h3 className='font-extralight'>({reviewsCount.toLocaleString('en-US')})</h3>
                        </div> : ''
                }

                {/* Price */}
                <div className="flex items-end gap-2">
                    <p className='flex justify-center text-2xl  z-0'>{ (friedPrice) }</p>
                    <p className='text-sm flex items-center gap-1 text-gray-700'>{listPrice ?<><span className='hidden lg:block'>List:</span> <strike>{listPrice.currency + listPrice.value}</strike></> : ''}</p>
                </div>

                <h2 className='text-sm lg:text-xl'>Delivery <span className="font-semibold">{delivery}</span></h2>


            </div>

        </div>
    );
};

export default Product;