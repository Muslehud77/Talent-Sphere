
import { NavLink, useLocation } from 'react-router-dom';
import { FaHome, FaUsersCog } from "react-icons/fa";

import { AiOutlineMenuUnfold } from "react-icons/ai";
const DrawerLink = ({link,expanded}) => {

    const {pathname} = useLocation()
    return (
      <NavLink to={link.pathname} key={i}>
        <div
          className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          pathname === link.pathname
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}
        >
          {link.icon}
          <span
            className={`overflow-hidden transition-all ${
              expanded ? "w-52 ml-3" : "w-0"
            }`}
          >
            {link.path}
          </span>
          {alert && (
            <div
              className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
                expanded ? "" : "top-2"
              }`}
            />
          )}
          {!expanded && (
            <div
              className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
            >
              {link.path}
            </div>
          )}
        </div>
      </NavLink>
    );
};

export default DrawerLink;