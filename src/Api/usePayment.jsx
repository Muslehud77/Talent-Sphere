import React from 'react';
import useAxiosSecure from './../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useContextInfo from '../Hooks/useContextInfo';

const usePayment = () => {
    const {enable} = useContextInfo()
    const axiosSecure = useAxiosSecure()

    const {data:payments=[],isFetching} = useQuery({
        queryKey: ['payments'],
        enabled: enable,
        queryFn: async()=>{
            const res = await axiosSecure.get('/paymentHistory')
            return res.data
        } 
        
    })

    return {payments,isFetching}
};

export default usePayment;