// import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import {  useState } from "react";
import Hamburger from "hamburger-react";
import logo from '../../Assets/Logo/TS-white-2-removebg-preview.png'
import Admin from './../DashboardRoutes/Admin';
import useContextInfo from './../../Hooks/useContextInfo';
import useUser from "../../Api/useUser";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
import Creator from "../DashboardRoutes/Creator";
import UserRoutes from './../DashboardRoutes/UserRoutes';
import { useNavigate } from "react-router-dom";

export default function Drawer() {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate()

const {user,logout} = useContextInfo()
const {userData,isFetching} = useUser()

const isUser = userData.role === 'user'
const isAdmin = userData.role === 'admin'
const isCreator = userData.role === 'creator'
// const isUser = 0
// const isAdmin = 1
// const isCreator = 0


const signOut = () =>{
  logout().then(()=>{
    navigate('/',{state:null})
  })
}





  return (
    <aside
      className={`h-screen relative z-[50] left-0`}
    >
      <nav className="h-full flex flex-col text-white bg-black border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <Link to={"/"}>
            <img
              src={logo}
              className={`overflow-hidden transition-all ${
                expanded ? "w-20" : "w-0"
              }`}
              alt=""
            />
          </Link>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className=" rounded-lg  "
          >
            <Hamburger size={25} />
          </button>
        </div>

        {isFetching ? (
          <div className={`skeleton ${expanded ? "w-72" : "w-20"}   `}></div>
        ) : (
          <>
            {isAdmin ? (
              <Admin expanded={expanded} />
            ) : isCreator ? (
              <Creator expanded={expanded} />
            ) : isUser ? (
              <UserRoutes expanded={expanded} />
            ) : (
              ""
            )}
          </>
        )}

        <div className="border-t flex p-3">
          <img src={userData.userImg} alt="" className="w-10 h-10 rounded-md object-cover" />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">
                {user.displayName}{" "}
                <span className="bg-white rounded text-xs font-thin text-black p-1 uppercase">
                  {userData.role}
                </span>
              </h4>
              <span className="text-xs text-gray-400">{user.email}</span>
            </div>
            <button onClick={signOut}>
              <CiLogout size={20} />
            </button>
          </div>
        </div>
      </nav>
    </aside>
  );
}
