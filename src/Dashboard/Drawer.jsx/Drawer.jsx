// import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import { useContext, createContext, useState } from "react";
import Hamburger from "hamburger-react";
import logo from '../../Assets/Logo/TS-black-removebg-preview.png'
import Admin from './../DashboardRoutes/Admin';
import useContextInfo from './../../Hooks/useContextInfo';
import useUser from "../../Api/useUser";
export default function Drawer({ children }) {
  const [expanded, setExpanded] = useState(false);
  const isTrue = true;

const {user} = useContextInfo()
const {userData} = useUser()


console.log(userData);




  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src={logo}
            className={`overflow-hidden transition-all ${
              expanded ? "w-20" : "w-0"
            }`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className=" rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            <Hamburger size={25} />
          </button>
        </div>

        <Admin isTrue={isTrue} expanded={expanded} />

        <div className="border-t flex p-3">
          <img
            src={user.photoURL}
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">{user.displayName} <span className="bg-black text-xs font-thin text-white p-1 uppercase">{userData.role}</span></h4>
              <span className="text-xs text-gray-600">{user.email}</span>
            </div>
           
          </div>
        </div>
      </nav>
    </aside>
  );
}
