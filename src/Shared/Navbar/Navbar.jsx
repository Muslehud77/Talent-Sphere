import { useEffect } from "react";
import { Collapse, Dropdown, initTE } from "tw-elements";
import logo from '../../Assets/Logo/TS-white-2-removebg-preview.png'
import { Sling as Hamburger } from "hamburger-react";
import { motion } from 'framer-motion';
import { Link, NavLink, useLocation } from "react-router-dom";
import { Reoverlay } from "reoverlay";
import Login from "../../Pages/Login/Login";
import useContextInfo from "../../Hooks/useContextInfo";
import User from "../User/User";

const Navbar = () => {
  const {pathname} = useLocation()
  const {logout,user} = useContextInfo()



     useEffect(() => {
       initTE({ Collapse, Dropdown });
     }, []);


     const openLogin = () => {
       Reoverlay.showModal(Login);
     };

     const active =
       "relative text-white  text-black uppercase text-xs  py-1 px-2 hover:tracking-[0.25em] hover:text-white hover:bg-black border-b duration-300 tracking-[0.1em]";
     const pending =
       "relative text-white rounded text-black uppercase text-xs  py-1 px-2 hover:tracking-[0.25em] hover:text-black hover:bg-white  hover:shadow-[0_0_65px_white] duration-300 tracking-[0.1em]";
     const idle =
       "relative text-white rounded text-black uppercase text-xs  py-1 px-2 hover:tracking-[0.25em] hover:text-black hover:bg-white  hover:shadow-[0_0_65px_white] duration-300 tracking-[0.1em]";


       const navBg = pathname === '/' ? 'bg-black lg:bg-transparent' : 'bg-black'
        const hiddenNav = pathname === '/register' ? 'hidden' : ''

     const links = (
       <>
         <NavLink
           className={({ isActive, isPending }) =>
             isActive ? active : isPending ? pending : idle
           }
           to={"/"}
         >
           Home
         </NavLink>
         <NavLink
           className={({ isActive, isPending }) =>
             isActive ? active : isPending ? pending : idle
           }
           to={"/menu"}
         >
           Menu
         </NavLink>
         <NavLink
           className={({ isActive, isPending }) =>
             isActive ? active : isPending ? pending : idle
           }
           to={"/contact"}
         >
           Contact
         </NavLink>
         <NavLink
           className={({ isActive, isPending }) =>
             isActive ? active : isPending ? pending : idle
           }
           to={"/blog"}
         >
           Blog
         </NavLink>
       </>
     );
  return (
    <div>
      {/* <!-- Main navigation container --> */}
      <nav
        className={`${navBg} ${hiddenNav} md:absolute lg:h-20  top-0 z-50 flex w-full flex-wrap items-center justify-between py-2 shadow-lg lg:py-4`}
        data-te-navbar-ref
      >
        <motion.div
          animate={{ y: 0 }}
          transition={{ from: -100, type: "spring", duration: 1 }}
           exit= {{y:-100}}
          className="flex w-full flex-wrap items-center justify-between px-3"
        >
          <div>
            <Link
              to="/"
              className="mx-2 my-1 flex items-center lg:mb-0 lg:mt-0"
            >
              <img
                className="mr-2 w-16"
                src={logo}
                alt="TE Logo"
                loading="lazy"
              />
            </Link>
          </div>

          {/* <!-- Hamburger button for mobile view --> */}
          <button
            className="text-white lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContent4"
            aria-controls="navbarSupportedContent4"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <!-- Hamburger icon --> */}
            <Hamburger size={30} />
          </button>

          {/* <!-- Collapsible navbar container --> */}
          <div
            className="!visible mt-2 hidden basis-[100%] lg:h-10 flex-grow items-center lg:mt-0 lg:!flex lg:basis-auto"
            id="navbarSupportedContent4"
            data-te-collapse-item
          >
            {/* <!-- Left links --> */}
            <div className="w-full mx-auto">
              <ul
                className="list-style-none mr-auto flex justify-center gap-5 pl-0  lg:flex-row"
                data-te-navbar-nav-ref
              >
                {links}
              </ul>
            </div>

            <div className="flex  justify-center items-center w-40">
              {user ? (
                <User></User>
              ) : (
                <button
                  onClick={openLogin}
                  className="flex  p-2 items-center gap-x-2 font-medium   md:border-l md:border-gray-300 md:my-6 md:pl-6 dark:border-gray-700 text-white "
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                  </svg>
                  Log in
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </nav>
    </div>
  );
};

export default Navbar;