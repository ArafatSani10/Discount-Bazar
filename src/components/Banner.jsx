import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import pic from '../assets/Screenshot 2025-02-12 152935.png';

const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
};

const Banner = () => {
    return (
        <div className="relative">
            <Slider {...settings}>
                <div className="w-full">
                    <div className="relative">
                        <img
                            src={pic}
                            alt="Image 1"
                            className="w-full max-h-[600px] object-cover rounded-lg" 
                        />
                      
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Banner;
