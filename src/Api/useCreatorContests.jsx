import React from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useContextInfo from "../Hooks/useContextInfo";
import { useQuery } from "@tanstack/react-query";

const useCreatedContests = () => {
  const { user, enable } = useContextInfo();
  const axiosSecure = useAxiosSecure();

  const {
    data: createdContests = [],
    isFetching,
    refetch,
  } = useQuery({
    queryKey: [`creator-contests`],
    enabled: enable,
    queryFn: async () => {
      const res = await axiosSecure.get(`/creator-contests`);
      return res.data;
    },
  });

  return {  createdContests, isFetching, refetch };
};

export default useCreatedContests;
