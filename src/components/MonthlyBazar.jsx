import React, { useEffect, useState } from 'react';
import Bazar from './Bazar';

const MonthlyBazar = () => {
    const [monthly, setMonthly] = useState([]);  

    useEffect(() => {
        fetch('/MonthlyBazar.json')
            .then(res => res.json())
            .then(data => {
                setMonthly(data.images);
                console.log(data); 
            })
    }, []);

    return (
        <div className='mt-12 my-5 bg-base-200'>
            <div>
                <h1 className='md:text-5xl font-bold max-sm:text-2xl text-center mt-5 '>
                    Join Discount Bazar +- Save 10% monthly!
                </h1>

                <div className='grid grid-cols-1 mx-5 md:grid-cols-2 lg:grid-cols-3 mt-12'>
                    {
                        monthly.map(bazar => <Bazar bazar={bazar}></Bazar>)

                    }
                </div>
               
            </div>
        </div>
    );
};

export default MonthlyBazar;
