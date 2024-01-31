import React from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useContextInfo from "../Hooks/useContextInfo";
import { useQuery } from "@tanstack/react-query";

const useAllUsers = () => {
  const { user, enable } = useContextInfo();
  const axiosSecure = useAxiosSecure();

  const {
    data: allUsers = [],
    isFetching,
    refetch,
  } = useQuery({
    queryKey: [`allUsers`],
    enabled: enable,
    queryFn: async () => {
      const res = await axiosSecure.get(`/all-users`);
      return res.data;
    },
  });

  return {  allUsers, isFetching, refetch };
};

export default useAllUsers;
