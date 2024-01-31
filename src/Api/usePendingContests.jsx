import React from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useContextInfo from "../Hooks/useContextInfo";
import { useQuery } from "@tanstack/react-query";

const usePendingContests = () => {
  const { user, enable } = useContextInfo();
  const axiosSecure = useAxiosSecure();

  const {
    data: pendingContests = [],
    isFetching,
    refetch,
  } = useQuery({
    queryKey: [`pendingContests`],
    enabled: enable,
    queryFn: async () => {
      const res = await axiosSecure.get(`/pending-contests`);
      return res.data;
    },
  });

  

  return { pendingContests, isFetching, refetch };
};

export default usePendingContests;
