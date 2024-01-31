import axios from "axios";


const axiosPublic = axios.create({
  baseURL: "https://talent-sphere-pi.vercel.app",
});

const useAxiosPublic = ()=>{
    return axiosPublic
}

export default useAxiosPublic