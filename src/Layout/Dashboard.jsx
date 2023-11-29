import React from 'react';
import Admin from '../Dashboard/DashboardRoutes/Admin';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {

    const isAdmin = true
    const isCreator = true

    return (
        <div className='bg-white'>
            <Admin></Admin>

            <Outlet/>
        </div>
    );
};

export default Dashboard;