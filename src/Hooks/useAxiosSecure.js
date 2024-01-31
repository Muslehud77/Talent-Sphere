import axios from "axios";
import { useNavigate } from "react-router-dom";
import useContextInfo from './useContextInfo';

const axiosSecure = axios.create({
  baseURL: "https://talent-sphere-pi.vercel.app",
});

const useAxiosSecure = () => {

  const navigate = useNavigate();
  const { logout,openLogin } = useContextInfo();

  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const response = error.response.status;
      if (response === 401 || response === 403) {
      
        logout().then(()=>{
          navigate('/',{state:null})
          openLogin()
        })
       
      }
      console.log("status err in the interceptor", response);
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
