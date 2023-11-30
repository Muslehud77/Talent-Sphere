
import { Outlet } from 'react-router-dom';
import Drawer from '../Dashboard/Drawer.jsx/Drawer';

const Dashboard = () => {

  
   

    return (
        <div className='backdrop-blur-sm text-white flex'>
          <Drawer/>

            <Outlet/>
        </div>
    );
};

export default Dashboard;