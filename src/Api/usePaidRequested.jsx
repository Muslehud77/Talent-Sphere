import React from "react";
import useAxiosSecure from "./../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useContextInfo from "../Hooks/useContextInfo";

const usePaidRequested = () => {
  const { enable } = useContextInfo();
  const axiosSecure = useAxiosSecure();

  const { data: pendings = [], isFetching } = useQuery({
    queryKey: ["pendings"],
    enabled: enable,
    queryFn: async () => {
      const res = await axiosSecure.get("/paid-requested");
      return res.data;
    },
  });

  return { pendings, isFetching };
};

export default usePaidRequested;
