import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const Stars = ({ stars }) => {

    const ratingStar = Array.from({ length: 5 }, (elem, i) => {
        let number = i + 0.5;

        return (
            <span key={i}>
                {
                    stars >= i + 1
                        ? <BsStarFill className='icon fill-yellow-500 w-3' />
                        : stars >= number
                            ? <BsStarHalf className='icon fill-yellow-500 w-3' />
                            : <BsStar className='icon fill-yellow-500 w-3' />
                }
            </span>
        )
    })
    return (
        <div className='flex items-center'>
            {ratingStar}
        </div>
    );
};

export default Stars;