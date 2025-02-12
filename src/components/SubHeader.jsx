import React from 'react';
import { FaHandsHelping, FaHeadphones } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';

const SubHeader = () => {
    return (
        <div className='p-2 bg-base-200 flex items-center justify-end border'>
            <div className='flex space-x-5 max-sm:flex max-sm:items-center  max-sm:space-x-4 '>
                <div className='flex items-center gap-3'>
                    <FaHandsHelping className='text-xl sm:text-2xl' />
                    <span className='text-lg max-sm:text-sm'>Help Center</span>
                </div>
                <div className='flex items-center gap-3'>
                    <FaHeadphones className='text-xl sm:text-2xl' />
                    <span className='text-lg max-sm:text-sm'>Contact Us</span>
                </div>
                <div className='flex items-center gap-3'>
                    <IoPerson className='text-xl sm:text-2xl' />
                    <span className='text-lg max-sm:text-sm'>Log In</span>
                </div>
            </div>
        </div>
    );
};

export default SubHeader;
