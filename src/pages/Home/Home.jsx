import React from 'react';
import Banner from '../../components/Banner';
import DoorOrder from '../../components/DoorOrder';
import SavingsBazar from '../../components/SavingsBazar';
import Customer from '../../components/Customer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <DoorOrder></DoorOrder>

            <SavingsBazar></SavingsBazar>

            <Customer></Customer>

        
        </div>
    );
};

export default Home;