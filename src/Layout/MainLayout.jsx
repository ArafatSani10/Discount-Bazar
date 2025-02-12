import React from 'react';
import { Outlet } from 'react-router-dom';
import SubHeader from '../components/SubHeader';
import Navbar from '../pages/Navbar/Header';

const MainLayout = () => {
    return (
        <div>
            <SubHeader></SubHeader>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;