
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
import AdminHome from "../Dashboard/DashboardPages/AdminPages/AdminHome/AdminHome";
import ManageContests from './../Dashboard/DashboardPages/AdminPages/ManageContests/ManageContests';
import ManageUsers from "../Dashboard/DashboardPages/AdminPages/ManageUsers/ManageUsers";
import UserHome from './../Dashboard/DashboardPages/UserPages/UserHome/UserHome';
import UserRegisteredContest from './../Dashboard/DashboardPages/UserPages/UserRegisteredContests/UserRegisteredContest';
import UserWinningContests from './../Dashboard/DashboardPages/UserPages/UserWinningContests/UserWinningContests';
import CreatorRoute from "./PrivateRoutes/CreatorRoute";
import CreatorHome from './../Dashboard/DashboardPages/CreatorPages/CreatorHome/CreatorHome';
import AddContest from './../Creator/AddContest';
import ContestSubmission from "../Shared/ContestDetail/ContestSubmission";
import CreatedContest from './../Dashboard/DashboardPages/CreatorPages/CreatedContests/CreatedContest';
import ContestSubmitted from './../Dashboard/DashboardPages/CreatorPages/ContestSubmitted/ContestSubmitted';
import UserRoute from "./PrivateRoutes/UserRoute";




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
            <AdminHome />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/admin/manage-user",
        element: (
          <AdminRoute>
            <ManageContests />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/admin/manage-contests",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/creator",
        element: (
          <CreatorRoute>
            <CreatorHome />
          </CreatorRoute>
        ),
      },
      {
        path: "/dashboard/creator/created",
        element: (
          <CreatorRoute>
            <CreatedContest />
          </CreatorRoute>
        ),
      },
      {
        path: "/dashboard/creator/add-contest",
        element: (
          <CreatorRoute>
            <AddContest />
          </CreatorRoute>
        ),
      },
      {
        path: "/dashboard/creator/submissions",
        element: (
          <CreatorRoute>
            <ContestSubmitted />
          </CreatorRoute>
        ),
      },
      {
        path: "/dashboard/user",
        element: (
          <UserRoute>
            <UserHome />
          </UserRoute>
        ),
      },
      {
        path: "/dashboard/user/registered-contests",
        element: (
          <UserRoute>
            <UserRegisteredContest />
          </UserRoute>
        ),
      },
      {
        path: "/dashboard/user/winning-contests",
        element: (
          <UserRoute>
            <UserWinningContests />
          </UserRoute>
        ),
      },
    ],
  },
]);
