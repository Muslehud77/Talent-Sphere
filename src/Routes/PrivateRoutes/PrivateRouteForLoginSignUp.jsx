/* eslint-disable react/prop-types */


import { Navigate, useLocation } from "react-router-dom";

import useContextInfo from "../../Hooks/useContextInfo";
import { AnimatePresence } from "framer-motion";


const PrivateRouteForLoginSignUp = ({children}) => {
const { user, loading, closeModal } = useContextInfo();
const {state} = useLocation()



    if(!user){
        return (
          <AnimatePresence mode="wait" initial={false}>
           {children}
          </AnimatePresence>
        );
    }

    if(loading){
        return (
          <>
            <div className="h-screen">
              <div className="place-items-stretch h-screen w-full">
                <div className="skeleton wave bg-[#6AC7BD]" />
              </div>
            </div>
          </>
        );
    }

    closeModal()

    return (
      <AnimatePresence mode="wait" initial={false}>
        <Navigate key={'/'} to={`${state ? state : "/"}`}></Navigate>
      </AnimatePresence>
    );
};

export default PrivateRouteForLoginSignUp;