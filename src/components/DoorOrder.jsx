import React from 'react';

const DoorOrder = () => {
    return (

        <div>
            <div className='text-center mt-12  '>
                <h1 className='md:text-5xl max-sm:text-2xl font-bold'>Fresh & Authentic South Asian Groceries</h1>
                <h2 className='font-bold md:text-3xl mt-3 max-sm:text-xl'>Deliver Your Door Order Now</h2>
                <p className='mt-2 font-bold md:text-xl max-sm:text-sm'>Shop 1,000+ authentic products at unbeatable pries. Same-day delivery available!</p>
            </div>

            <div className='flex items-center justify-between mt-12 mx-12 my-6 '>
                <h1 className='p-3 border-2 w-[635px] rounded-full bg-yellow-300 text-white font-bold text-center  shadow-xl'>Start Shopping</h1>
                <h1 className='p-3 border-2 w-[635px] rounded-full   bg-yellow-400 text-white font-bold text-center shadow-xl'>Shop Best Sellers</h1>
            </div>
        </div>
    );
};
export default DoorOrder;