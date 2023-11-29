import React from 'react';
import useAxiosPublic from './../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useTalented = () => {
    const axiosPublic = useAxiosPublic()

    const {data:talented=[], isFetching}= useQuery({
        queryKey: ['talented'],
        queryFn:async ()=>{
            const res = await axiosPublic.get("/talented-users");
           
            return res.data
        }
    })

     const usersWithRatio = talented.map((user) => {
       const { contestWon, contestParticipated } = user;
       const ratio =
         contestParticipated !== 0 ? contestWon / contestParticipated : 0;
       return { ...user, ratio };
     });

     // Sort users based on the ratio in descending order
     const sortedUsers = usersWithRatio.sort((a, b) => b.ratio - a.ratio);

     // Assign ranks to sorted users
     const rankedUsers = sortedUsers.map((user, index) => ({
       ...user,
       rank: index + 1,
     }));
    


    return { talented, isFetching, rankedUsers };
};

export default useTalented;