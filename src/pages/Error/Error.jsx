import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex items-center justify-center mt-52'>
            <div >
                <h1 className='text-6xl font-bold mx-8 text-red-500'>404</h1>
                <p className='text-3xl items-center'>Error Page!!!..</p>
                <Link to='/'><p className='text-3xl '>Go to <span className='text-blue-800'>Home Back</span>...</p></Link>
            </div>
        </div>
    );
};

export default Error;