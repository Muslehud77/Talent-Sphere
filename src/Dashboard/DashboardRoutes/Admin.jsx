
import { FaHome,FaUsersCog } from "react-icons/fa";

import { AiOutlineMenuUnfold } from "react-icons/ai";
import { NavLink, useLocation } from 'react-router-dom';


const Admin = ({ isTrue, expanded }) => {

    const { pathname} = useLocation()


    const links = [
      { path: "Admin Home", pathname: "/dashboard/admin", icon: <FaHome size={25} /> },
      { path: "Manage Users", pathname: "/dashboard/admin/manage-user", icon: <FaUsersCog size={25} /> },
      {
        path: "Manage Contests",
        pathname: "/dashboard/admin/manage-contests",
        icon: <AiOutlineMenuUnfold size={25} />,
      },
    ];


  return (
    <>
      <ul className="flex-1 px-3">
        {links.map((link, i) => (
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
        ))}
      </ul>
    </>
  );
};

export default Admin;