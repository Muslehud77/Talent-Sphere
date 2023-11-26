
import ReactDOM from 'react-dom/client'
import Alpine from "alpinejs";


import './index.css'
import {  RouterProvider } from "react-router-dom";
import { router } from './Routes/Routes';
import AuthProvider from './ContextProvider/AuthContext';


window.Alpine = Alpine;

Alpine.start();



ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
);
