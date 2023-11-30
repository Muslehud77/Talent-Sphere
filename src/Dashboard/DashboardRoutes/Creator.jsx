import { FaHome } from "react-icons/fa";

import { AiOutlineMenuUnfold } from "react-icons/ai";
import { NavLink, useLocation } from "react-router-dom";
import { MdAddToPhotos, MdContentPaste } from "react-icons/md";

const Creator = ({ expanded }) => {
  const { pathname } = useLocation();

  const links = [
    {
      path: "Home",
      pathname: "/dashboard/creator",
      icon: <FaHome size={25} />,
    },
    {
      path: "Add Contest",
      pathname: "/dashboard/creator/add-contest",
      icon: <MdAddToPhotos size={25} />,
    },
    {
      path: "My Submissions",
      pathname: "/dashboard/creator/submissions",
      icon: <MdContentPaste size={25} />,
    },
    {
      path: "My Contests",
      pathname: "/dashboard/creator/created",
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
            : "hover:bg-indigo-50 text-gray-300 hover:text-gray-600"
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

export default Creator;
