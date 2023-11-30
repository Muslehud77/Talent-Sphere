
import { Outlet } from 'react-router-dom';
import Drawer from '../Dashboard/Drawer.jsx/Drawer';

const Dashboard = () => {

    const isAdmin = true
    const isCreator = false
   

    return (
        <div className='backdrop-blur-sm flex'>
          <Drawer/>

            <Outlet/>
        </div>
    );
};

export default Dashboard;