import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const usePopularContest = () => {
    const axiosPublic = useAxiosPublic()

    const {data:popular=[],isFetching} = useQuery({
        queryKey: ['popular'],
        queryFn: async ()=> {
            const data = await axiosPublic.get('/popular')
            return data.data
        }
    })


    return {popular,isFetching}
};

export default usePopularContest;