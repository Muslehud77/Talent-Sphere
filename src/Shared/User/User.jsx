import useContextInfo from "../../Hooks/useContextInfo";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
import {
  Dropdown,
  Ripple,
  initTE,
} from "tw-elements";

initTE({ Dropdown, Ripple });

const User = () => {

    const {user,logout} = useContextInfo()



    return (
      <div className="relative" data-te-dropdown-position="dropstart">
        <a
          type="button"
          data-te-ripple-init
          data-te-ripple-color="light"
          id="dropdownMenuButton1s"
          data-te-dropdown-toggle-ref
          className="flex justify-between items-center pr-2 w-36 bg-gray-600/50 rounded-full cursor-pointer"
        >
          <div className=" avatar lg">
            <img alt="avatar" src={user?.photoURL} />
          </div>
          <span className="text-xs rounded-full bg-black text-white p-1">
            {user.displayName}
          </span>
        </a>

        <ul
          className="absolute z-[1000]  mt-2 mr-2 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
          aria-labelledby="dropdownMenuButton1s"
          data-te-dropdown-menu-ref
        >
          <li>
            <div className="px-2 py-2 text-white lg:text-black ">
              <p>{user.displayName}</p>
              <p className="text-xs bg-black rounded text-white p-1">
                {user.email}
              </p>
              <hr className="mt-2 h-[0.5px] border-t-0 bg-black/50 dark:opacity-50" />
            </div>
          </li>

          <li>
            <Link
              className="block uppercase transition-all tracking-[0.1em] duration-500 w-full whitespace-nowrap bg-transparent px-4 py-2 hover:tracking-[0.20em] text-xs font-semibold text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
              to={"/dashboard/home"}
              data-te-dropdown-item-ref
            >
              Dashboard
            </Link>
          </li>
          <li>
            <button
              onClick={logout}
              className="text-left flex justify-between items-center transition-all tracking-[0.1em] duration-500   hover:tracking-[0.20em] uppercase  w-full whitespace-nowrap bg-transparent px-4 py-2 text-xs font-semibold text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
              data-te-dropdown-item-ref
            >
              Logout <CiLogout size={20} />
            </button>
          </li>
        </ul>
      </div>
    );
};

export default User;



