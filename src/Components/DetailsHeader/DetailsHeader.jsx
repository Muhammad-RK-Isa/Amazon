import React from 'react';
import Stars from './../Stars/Stars';

const DetailsHeader = ( props ) => {
    const { title, brand, stars, reviewsCount, answeredQuestions } = props.product;
    return (
        <div className='lg:col-start-3 lg:col-span-3 flex flex-col lg:flex-col-reverse text-sm text-black'>
            <hr className='border-gray-400 hidden lg:block'/>
            <div className="flex lg:flex-col lg:items-start  justify-between">
                <p title='No data available for now' className='text-cyan-600 cursor-pointer hover:text-red-700 hover:underline-offset-1 hover:underline'>Vist the { brand } store</p>
                <div className="flex items-center justify-center gap-1 lg:gap-2">
                    <Stars stars={ stars } />
                    <div className='flex items-center gap-2 text-xs lg:text-sm text-cyan-600'>
                        <span className='lg:flex items-center gap-1 cursor-pointer hover:text-red-700 hover:underline-offset-1 hover:underline'>{ reviewsCount.toLocaleString( 'en-US' ) }
                            <span className='hidden lg:block'> ratings </span>
                        </span>
                        <span className='hidden lg:block text-gray-500'> | </span>
                        <span className='hidden lg:block cursor-pointer hover:text-red-700 hover:underline-offset-1 hover:underline'> { answeredQuestions } answered questions </span>
                    </div>
                </div>
            </div>
            <h3 className='text-gray-700 lg:text-2xl'>{ title }</h3>
        </div>
    );
};

export default DetailsHeader;