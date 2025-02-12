import React from 'react';

const CustomerSays = ({ customer }) => {
    console.log(customer);
    const { customerImage, customerJob, customerName, description, reviewStart } = customer;
    const renderStars = (rating) => {
        let stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<span key={i} className="text-yellow-400">★</span>);
            } else {
                stars.push(<span key={i} className="text-gray-300">★</span>);
            }
        }
        return stars;
    };

    return (
        <div className='flex flex-col items-center bg-white shadow-lg p-6 rounded-lg my-6'>
            <div className='flex items-center  space-x-6'>
                <div>
                    <img className='w-20 h-20 rounded-full mb-4' src={customerImage} alt={customerName} />
                </div>
                <div className='flex flex-col'>
                    <div className='flex mt-2 text-3xl'>
                        {renderStars(reviewStart)}
                    </div>
                    <h2 className='font-bold text-2xl mb-2'>{customerName}</h2>
                    <p className='text-red-600 font-bold '>{customerJob}</p>
                </div>
            </div>
            <p className='text-gray-700 text-center italic mt-4'>{description}</p>
        </div>
    );
};

export default CustomerSays;
