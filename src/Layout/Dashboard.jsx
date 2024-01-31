
import { Outlet } from 'react-router-dom';
import Drawer from '../Dashboard/Drawer.jsx/Drawer';
import User from '../Shared/User/User'
import { ModalContainer } from 'reoverlay';
import { Toaster } from 'react-hot-toast';
import ContestDetail from './../Shared/ContestDetail/ContestDetail';
const Dashboard = () => {

  
   

    return (
      <div className=" text-white min-h-screen flex gap-5 w-full">
        <Drawer />

        <div className="pt-5 md:p-5 w-full max-h-screen overflow-y-auto">
          <div className="flex justify-end relative z-[50]">
            <User />
          </div>
          <Outlet />
        </div>
        <Toaster />
        <ContestDetail />
        <ModalContainer />
      </div>
    );
};

export default Dashboard;