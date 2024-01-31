import React from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useContextInfo from "../Hooks/useContextInfo";
import { useQuery } from "@tanstack/react-query";

const useWinners = (winners,id) => {
  const { user, enable } = useContextInfo();
  const axiosSecure = useAxiosSecure();

  

  const {
    data: winnersData = [],
    isFetching,
    refetch,
  } = useQuery({
    queryKey: [`winner_${id}`] ,
    enabled: enable,
    queryFn: async () => {
      const res = await axiosSecure.post(`/winners`,winners);
      return res.data;
    },
  });

 


  return { winnersData, isFetching, refetch };
};

export default useWinners;
