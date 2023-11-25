import React, { useContext } from 'react';
import { AuthContext } from '../ContextProvider/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouteForOthers = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const {pathname} = useLocation();


     if (loading) {
       return (
         <>
           <div className="absolute top-0 place-items-stretch h-screen w-full">
             <div className="skeleton wave info" />
           </div>
         </>
       );
     }

     if (!user) {
       return <Navigate state={pathname} to={'/login'}></Navigate>;
     }



    return children
};

export default PrivateRouteForOthers;