import React from 'react';

import { useQuery } from '@tanstack/react-query';
import { generateRandomArray } from '../utils/randomNubersOfArray';
import useAxiosPublic from '../Hooks/useAxiosPublic';

const useAllContest = () => {

    const axiosPublic = useAxiosPublic()


    const {data:allContests=[],isFetching,refetch} = useQuery({
        queryKey: ['allContests'],
        queryFn: async ()=>{
            const res = await axiosPublic.get('/contest')
            const randomSpans = generateRandomArray(res.data.length);
             const contests = res.data.map((contest, i) => {
               return { ...contest, span: randomSpans[i] };
             });
            return contests
        }

    })


    return {allContests, isFetching, refetch}
};

export default useAllContest;