import React from 'react';

const ProductInfo = ( props ) => {
    return (
        <div className='lg:col-span-6 grid lg:grid-cols-2 gap-4 lg:gap-8 lg:mt-8'>
            <div>
                <h2 className='font-semibold text-lg'>Product Information</h2>
                <table className='text-sm lg:text-base w-full'>
                    { props.infoAttributes.length === 0 ? <h3>No information available right now.</h3> : '' }
                    <tbody className='border-t border-gray-300'>
                        { props.infoAttributes.map( obj => <tr key={props.infoAttributes.indexOf(obj)} className='border-b border-gray-300 flex gap-4 justify-between text'><td className='bg-gray-100 py-2 px-1 w-1/2'>{ obj.key }</td><td className='w-full flex items-center'>{ obj.value }</td></tr> ) }
                    </tbody>
                </table>
            </div>
            <div className='flex flex-col gap-2 lg:gap-4'>
                <h2 className='lg:text-xl'>Warranty & Support</h2>
                <hr className='hidden lg:block' />
                <h2><span className='font-semibold lg:hidden'>Amazon.com Return Policy:</span> <span className="lg:hidden">Amazon.com.tr Voluntary 30-Day Return Guarantee:</span> If you'd like a copy of the manufacturer's warranty for a product found on Amazon.com, you can contact the manufacturer directly or visit their website for more information. Manufacturer's warranties may not apply in all cases, depending on factors like the use of the product, where the product was purchased, or who you purchased the product from. Please review the warranty carefully, and contact the manufacturer if you have any questions.</h2>
            </div>
        </div>
    );
};

export default ProductInfo;