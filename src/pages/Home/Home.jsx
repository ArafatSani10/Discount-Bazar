import React from 'react';
import Banner from '../../components/Banner';
import DoorOrder from '../../components/DoorOrder';
import SavingsBazar from '../../components/SavingsBazar';
import Customer from '../../components/Customer';
import MonthlyBazar from '../../components/MonthlyBazar';

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <DoorOrder></DoorOrder>

            <SavingsBazar></SavingsBazar>

            <Customer></Customer>

            <MonthlyBazar></MonthlyBazar>

        
        </div>
    );
};

export default Home;