import React from 'react';
import { AiOutlineShareAlt } from 'react-icons/ai';

const DetailsImage = ( { thumbnailImage } ) => {
    const shareHandler = () => {
        navigator.share( {
            "title": 'Hello, can I share please!',
            "url": "https://www.google.com"
        })
    };

    return (
        <div className="lg:absolute lg:top-0 lg:w-[30vw] lg:h-full">
            <div className='relative lg:sticky lg:top-[160px]'>
                <button onClick={ shareHandler } className='absolute w-8 h-8 right-1 top-1 rounded-full border border-gray-300'>
                    <AiOutlineShareAlt className='icon w-full scale-150' />
                </button>
                <img className='mx-auto' src={ thumbnailImage } alt="" />
            </div>
        </div>
    );
};

export default DetailsImage;