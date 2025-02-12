import React from 'react';
import { Outlet } from 'react-router-dom';
import SubHeader from '../components/SubHeader';
import Navbar from '../pages/Navbar/Navbar';
import Header from '../pages/Navbar/Header';
import Footer from '../pages/Footer/Footer';


const MainLayout = () => {
    return (
        <div className='max-w-[1400px] mx-auto border-2 shadow-2xl'>
            <SubHeader></SubHeader>
            <Header></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;