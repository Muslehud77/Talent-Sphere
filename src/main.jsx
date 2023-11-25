
import ReactDOM from 'react-dom/client'

import './index.css'
import {  RouterProvider } from "react-router-dom";
import { router } from './Routes/Routes';
import AuthProvider from './ContextProvider/AuthContext';
import { ModalContainer } from 'reoverlay';





ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
);
