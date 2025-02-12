import React from 'react';

const Bazar = ({ bazar }) => {
    const { image, title } = bazar;
    console.log(bazar);

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <div className="bg-base-200 shadow-lg rounded-lg overflow-hidden w-full">

                <img
                    className="w-full h-auto object-cover rounded-md"
                    src={image}
                    alt={title}
                />


                <h1 className="text-center font-bold mt-4 max-sm:text-xl md:text-2xl lg:text-3xl">
                    {title}
                </h1>
            </div>
        </div>
    );
};

export default Bazar;
