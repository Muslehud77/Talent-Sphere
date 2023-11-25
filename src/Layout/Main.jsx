
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { useEffect, useState } from "react";
import PreLoader from "../Components/Preloader/PreLoader";

const Main = () => {
     const [preloader, setPreloader] = useState(true);

     useEffect(() => {
       const preload = () => {
         setTimeout(() => {
           setPreloader(false);
         }, 3000);
       };
       return preload();
     }, []);
  return (
    <>
      {preloader ? (
        <PreLoader />
      ) : (
        <div className="flex flex-col min-h-screen">
          <Navbar></Navbar>
          <div className="flex-grow">
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </div>
      )}
    </>
  );
};

export default Main;
