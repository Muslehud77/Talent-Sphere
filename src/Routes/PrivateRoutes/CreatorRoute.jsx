/* eslint-disable react/prop-types */

import { AnimatePresence } from "framer-motion";
import useUser from "../../Api/useUser";
import { Navigate } from "react-router-dom";

const CreatorRoute = ({ children }) => {
  const { userData, isFetching } = useUser();

 

  if (isFetching) {
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
  
 const role = userData.role === "creator";

  if (role) {
    return (
      <AnimatePresence mode="wait" initial={false}>
        {children}
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Navigate key={"/"} to="/"></Navigate>
    </AnimatePresence>
  );
};

export default CreatorRoute;
