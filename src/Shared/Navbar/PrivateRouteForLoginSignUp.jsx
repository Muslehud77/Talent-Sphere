import { useContext } from "react";
import { AuthContext } from "../ContextProvider/AuthContext";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRouteForLoginSignUp = ({children}) => {
const {user,loading} = useContext(AuthContext)
const {state,pathname} = useLocation()



    if(!user){
        return children
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



    return <Navigate to={`${state? state : '/'}`}></Navigate>;
};

export default PrivateRouteForLoginSignUp;