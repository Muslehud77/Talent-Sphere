
import { Outlet } from 'react-router-dom';
import Drawer from '../Dashboard/Drawer.jsx/Drawer';
import User from '../Shared/User/User'
import { ModalContainer } from 'reoverlay';
import { Toaster } from 'react-hot-toast';
const Dashboard = () => {

  
   

    return (
      <div className=" text-white flex gap-5 w-full">
        <Drawer />

        <div className="p-5 w-full">
          <div className="flex justify-end">
            <User />
          </div>
          <Outlet />
        </div>
        <Toaster />
        <ModalContainer />
      </div>
    );
};

export default Dashboard;