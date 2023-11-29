import React from 'react';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useHappyCreators = () => {

    const axiosPublic = useAxiosPublic()


    const {data:creators=[],isFetching} = useQuery({
        queryKey: ['creator'],
        queryFn:async ()=> {
            const res = await axiosPublic.get('/happy-creators')
            return  res.data
        }
    }) 

    return { creators , isFetching};
};

export default useHappyCreators;