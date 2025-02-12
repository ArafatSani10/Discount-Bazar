import React from 'react';
import { Outlet } from 'react-router-dom';
import SubHeader from '../components/SubHeader';
import Navbar from '../pages/Navbar/Navbar';
import Header from '../pages/Navbar/Header';


const MainLayout = () => {
    return (
        <div className='max-w-[1400px] mx-auto border-2 shadow-2xl'>
            <SubHeader></SubHeader>
            <Header></Header>
            <Navbar></Navbar>
        
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;