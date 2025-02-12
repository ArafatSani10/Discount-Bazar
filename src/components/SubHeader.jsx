import React from 'react';
import { FaHandsHelping, FaHeadphones } from 'react-icons/fa';
import { IoPerson, IoPersonOutline } from 'react-icons/io5';

const SubHeader = () => {
    return (
        <div className='p-2 bg-base-200 flex items-center justify-end border'>
            <div className='flex space-x-5'>
                <div className='flex items-center gap-3'>
                    <FaHandsHelping className='text-xl' />
                    <span className='text-lg'>Help Center</span>
                </div>
                <div className='flex items-center gap-3'>
                    <FaHeadphones className='text-xl'></FaHeadphones>
                    <span className='text-lg '>Contact Us</span>
                </div>
                <div className='flex items-center gap-3'>
                    <IoPerson className='text-xl'></IoPerson >
                    <span className='text-lg '>Log In</span>
                </div>
            </div>
        </div>
    );
};

export default SubHeader;
