import React from 'react';
import useAxiosPublic from './../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useTalented = () => {
    const axiosPublic = useAxiosPublic()

    const {data:talented=[],isFeching}= useQuery({
        queryKey: ['talented'],
        
    })



    return (
        <div>
            
        </div>
    );
};

export default useTalented;