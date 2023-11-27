
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";

import Register from './../Pages/Register/Register';
import PrivateRouteForLoginSignUp from './PrivateRoutes/PrivateRouteForLoginSignUp';
import { AnimatePresence } from "framer-motion";
import RunningContests from "../Pages/RunningContests/RunningContests";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
            <RunningContests key={'/contests'}></RunningContests>
          </AnimatePresence>
        ),
      },
      {
        path: "/contact",
        element: (
          <AnimatePresence mode="wait" initial={false}>
            <h1 key={'/contact'}>hello</h1>
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
]);
