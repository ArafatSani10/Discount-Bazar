import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer footer-center bg-gray-700 text-base-content rounded p-10">

            <nav>
                <div className='flex items-center gap-5 my-3'>
                    <FaFacebook className='text-white   text-2xl'></FaFacebook>
                    <FaTwitter className='text-white text-2xl '></FaTwitter>
                    <FaYoutube className='text-white text-2xl'></FaYoutube>
                    <FaInstagram className='text-white text-2xl'></FaInstagram>
                </div>

                <nav className="grid grid-flow-col gap-4 text-white font-bold md:text-3xl max-sm:text-sm">
                    <a className="link link-hover">Contact us</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms & Conditions</a>

                </nav>
            </nav>
            <aside className='text-white md:text-lg max-sm:text-[11px] -mt-6'>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Discount-Bazar Ltd</p>
            </aside>
        </footer>
    );
};

export default Footer;