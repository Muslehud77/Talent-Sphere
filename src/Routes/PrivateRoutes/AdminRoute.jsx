/* eslint-disable react/prop-types */
import React from 'react';
import useUser from '../../Api/useUser';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({children}) => {

    const {userData,isFetching} = useUser()

    const role = userData.role === 'admin'

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

    if(role){
        return children
    }


    return <Navigate to='/'></Navigate>
};

export default AdminRoute;