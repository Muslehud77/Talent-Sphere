import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useContextInfo from '../Hooks/useContextInfo';
import { useQuery } from '@tanstack/react-query';

const useUser = () => {
    const {user,enable} = useContextInfo()
    const axiosSecure = useAxiosSecure()

    const {data:userData={},isFetching,refetch} = useQuery({
        queryKey: ['userData'],
        enabled: enable,
        queryFn: async ()=> {
            const res = await axiosSecure.get(`/user?email=${user.email}`);
            return res.data
        }
    })
    return {userData,isFetching,refetch}
};

export default useUser;