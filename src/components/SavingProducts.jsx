import React from 'react';

const SavingProducts = ({ savingProducst }) => {
    const { description, title, image } = savingProducst;
    return (
        <div className='max-sm:mx-5'>
            <img className='w-[450px] h-[300px]' src={image} alt="" />
            <h1 className='font-bold md:text-3xl max-sm:text-xl mt-6 my-4'>{title}</h1>
            <p className='font-bold opacity-80 md:text-xl max-sm:text-sm my-5'>{description}</p>
            <button className='underline text-black py-2 px-6 rounded-md text-xl  transition-all duration-300'>
                Shop Now
            </button>
        </div>
    );
};

export default SavingProducts;