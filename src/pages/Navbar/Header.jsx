import React from 'react';
import logo from '../../assets/download.jpg';

const Header = () => {
    return (
        <div>
            {/* Logo section */}
            <div className='flex items-center justify-center -mb-5'>
                <img src={logo} alt="Logo" />
            </div>

            {/* Search section */}
            <div className='flex items-center justify-center p-4'>
                <div className="flex items-center flex-wrap justify-center">
                    {/* Search input */}
                    <input
                        type="text"
                        placeholder="Search for products"
                        className="p-2 w-full sm:w-[500px] md:w-[400px] lg:w-[500px] xl:w-[600px] italic font-bold mb-6 rounded-md border-2 shadow-2xl border-gray-300"
                    />
                    
                    {/* Search button */}
                    <button
                        className="mb-6 p-2 bg-yellow-300 text-white font-bold rounded-md"
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
