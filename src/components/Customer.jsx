import React, { useEffect, useState } from 'react';
import CustomerSays from './CustomerSays';

const Customer = () => {
    const [customer, setCustomer] = useState([]);

    useEffect(() => {
        fetch('/Customer.json')
            .then(res => res.json())
            .then(data => setCustomer(data.reviews)) 
    }, []);

    return (
        <div className='mt-12 my-5'>
            <div>
                <h1 className='md:text-5xl font-bold max-sm:text-2xl text-center'>
                    What Our Customer's Say: {customer.length}
                </h1>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-5'>
                    {
                        customer.map(customer => <CustomerSays customer={customer}></CustomerSays>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Customer;
