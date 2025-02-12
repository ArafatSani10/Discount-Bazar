import React from 'react';
import logo from '../../assets/download.jpg';

const Header = () => {
    return (
        <div>
            <div className='flex items-center justify-center'>
                <img src={logo} alt="Logo" />
            </div>

            <div className='flex items-center justify-center p-4'>

                <div className="flex items-center">
                    <input
                        type="text"
                        placeholder="Search for products"
                        className="p-2 w-[500px] italic font-bold mb-6 rounded-md border-2 shadow-2xl border-gray-300" // Set width to 80 (for example)
                    />
                    <button
                        className=" mb-6 p-2  bg-yellow-300 text-white font-bold"
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
