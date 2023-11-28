import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { useEffect, useState } from "react";
import PreLoader from "../Components/Preloader/PreLoader";
import { ModalContainer } from "reoverlay";
import { Toaster } from "react-hot-toast";
import ContestDetail from "../Shared/ContestDetail/ContestDetail";


const Main = () => {
  const [preloader, setPreloader] = useState(true);

  useEffect(() => {
    const preload = () => {
      setTimeout(() => {
        setPreloader(false);
      }, 1000);
    };
    return preload();
  }, []);

  return (
    <>
      {preloader ? (
        <PreLoader />
      ) : (
        <div className="flex  flex-col min-h-screen">
          <Navbar></Navbar>
          <div className="flex-grow">
            <Outlet></Outlet>
          </div>
          <ContestDetail />
          <Footer></Footer>
          <ModalContainer />

        
            <Toaster />

        </div>
      )}
    </>
  );
};

export default Main;
