import React from 'react';

import { useQuery } from '@tanstack/react-query';
import { generateRandomArray } from '../utils/randomNubersOfArray';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import useContextInfo from '../Hooks/useContextInfo';

const useAllContest = (currentTab) => {
const {search} = useContextInfo()

  const axiosPublic = useAxiosPublic();

  const {
    data: allContests = [],
    isFetching,
    refetch,
  } = useQuery({
    queryKey: [currentTab, search],
    queryFn: async () => {
      const res = await axiosPublic.get(`/contest?search=${search}&sort=${currentTab}`);
      const randomSpans = generateRandomArray(res.data.length);
      const contests = res.data.map((contest, i) => {
        return { ...contest, span: randomSpans[i] };
      });
      return contests;
    },
  });

  
  

  return { allContests, isFetching, refetch };
};

export default useAllContest;