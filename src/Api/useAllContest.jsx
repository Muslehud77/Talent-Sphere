import React from 'react';

import { useQuery } from '@tanstack/react-query';
import { generateRandomArray } from '../utils/randomNubersOfArray';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import useContextInfo from '../Hooks/useContextInfo';
import { useState } from 'react';

const useAllContest = (currentTab) => {
const {search} = useContextInfo()

  const axiosPublic = useAxiosPublic();

  const {
    data: contest = [],
    isFetching,
    refetch,
  } = useQuery({
    queryKey: [currentTab, search],
    queryFn: async () => {
      const res = await axiosPublic.get(`/contest?search=${search}&sort=${currentTab}`);
      const randomSpans = generateRandomArray(res.data.contests.length);
      const contests = res.data.contests.map((contest, i) => {
        return { ...contest, span: randomSpans[i] };
      });
   
      return {contests,count:res.data.count};
    },
  });

  const allContests = contest.contests
  const count = contest.count
  
  

  return { allContests, isFetching, refetch,count };
};

export default useAllContest;