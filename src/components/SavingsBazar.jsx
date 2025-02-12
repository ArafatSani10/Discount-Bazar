import React, { useEffect, useState } from 'react';
import SavingProducts from './SavingProducts';

const SavingsBazar = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/SavingBazar.json')
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, []);

    return (
        <div className='mt-12 my-6'>
            <div className='bg-base-200'>
                <h1 className='font-bold md:text-4xl text-xl text-center max-sm:text-lg'>
                    Shop Savings from Discount Bazar: {products.length}
                </h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 px-2'>
                    {
                        products.map(savingProducst => (
                            <SavingProducts key={savingProducst.id} savingProducst={savingProducst} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default SavingsBazar;
