import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://talent-sphere-pi.vercel.app",
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
