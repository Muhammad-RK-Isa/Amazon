import React from 'react';

const DetailsBody = ( props ) => {
    const { price, listPrice, inStock, variantAttributes } = props.product;
    console.log( variantAttributes  )

    const discountPrice = () => {
        const array = price.value.toString().split( '.' );
        return (
            <><span className='text-sm relative top-[4px]'>{ price.currency }</span>{ array[ 0 ] } <span className='text-sm relative top-[4px]'>{ array[ 1 ] ? parseInt( array[ 1 ] ) > 9 ? array[ 1 ] : parseInt( array[ 1 ] ) * 10 : '00' }</span></>
        );
    };

    const friedPrice = discountPrice();
    return (
        <div className='lg:col-start-3 lg:row-start-2 grid gap-3 lg:gap-4'>
            
            <div className='flex items-center gap-2 text-4xl'>
                <h1 className='text-red-600 font-extralight'>{ Math.round( price.value / listPrice.value * 100 ) - 100 }% </h1>
                <h1 className='flex z-0'>{ friedPrice }</h1>
            </div>
            <h4 className='text-xs'>List Price: <strike>{ listPrice.currency }{ listPrice.value }</strike></h4>
            <h3 className=''>{ variantAttributes[ 0 ].key }: <span className="font-bold">{ variantAttributes[ 0 ].value }</span></h3>

        </div>
    );
};

export default DetailsBody;