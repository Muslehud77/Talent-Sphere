
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";

import Register from './../Pages/Register/Register';
import PrivateRouteForLoginSignUp from './PrivateRoutes/PrivateRouteForLoginSignUp';
import { AnimatePresence } from "framer-motion";
import RunningContests from "../Pages/RunningContests/RunningContests";
import LeaderBoard from "../Pages/LeaderBoard/LeaderBoard";
import ErrorPage from './../Pages/404/ErrorPage';
import Dashboard from "../Layout/Dashboard";
import PrivateRouteForOthers from './PrivateRoutes/PrivateRouteForOthers';
import AdminRoute from "./PrivateRoutes/AdminRoute";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <AnimatePresence mode="wait" initial={false}>
            <Home key={"/"}></Home>
          </AnimatePresence>
        ),
      },
      {
        path: "/contests",
        element: (
          <AnimatePresence mode="wait" initial={false}>
            <RunningContests key={"/contests"}></RunningContests>
          </AnimatePresence>
        ),
      },
      {
        path: "/leader-board",
        element: (
          <AnimatePresence mode="wait" initial={false}>
            <LeaderBoard key={"/leader-board"}></LeaderBoard>
          </AnimatePresence>
        ),
      },
      {
        path: "/contact",
        element: (
          <AnimatePresence mode="wait" initial={false}>
            <h1 key={"/contact"}>hello</h1>
          </AnimatePresence>
        ),
      },
      {
        path: "/register",
        element: (
          <PrivateRouteForLoginSignUp>
            <AnimatePresence mode="wait" initial={false}>
              <Register key={"/register"}></Register>
            </AnimatePresence>
          </PrivateRouteForLoginSignUp>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouteForOthers>
        <Dashboard />
      </PrivateRouteForOthers>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard/admin",
        element: (
          <AdminRoute>
            
            <h1>hello</h1>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/admin/manage-user",
        element: <h1>hello</h1>,
      },
      {
        path: "/dashboard/admin/manage-contests",
        element: <h1>hello</h1>,
      },
    ],
  },
]);
