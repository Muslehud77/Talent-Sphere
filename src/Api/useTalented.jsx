import React from 'react';
import useAxiosPublic from './../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useTalented = () => {
    const axiosPublic = useAxiosPublic()

    const {data:talented=[], isFetching}= useQuery({
        queryKey: ['talented'],
        queryFn:async ()=>{
            const res = await axiosPublic.get("/talented-users");
           
            return res.data
        }
    })

    


    return {talented,isFetching}
};

export default useTalented;