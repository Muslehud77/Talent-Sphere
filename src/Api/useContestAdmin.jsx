import React from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useContextInfo from "../Hooks/useContextInfo";
import { useQuery } from "@tanstack/react-query";

const useContestAdmin = () => {
  const { user, enable } = useContextInfo();
  const axiosSecure = useAxiosSecure();

  const {
    data: allContestForAdmin = [],
    isFetching,
    refetch,
  } = useQuery({
    queryKey: [`admin-contests`],
    enabled: enable,
    queryFn: async () => {
      const res = await axiosSecure.get(`/all-contests`);
      return res.data;
    },
  });

  return { allContestForAdmin, isFetching, refetch };
};

export default useContestAdmin;
