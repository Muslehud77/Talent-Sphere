import { useEffect, useState } from "react";

import Card from "../../../Shared/Card/Card";
import CardSkeleton from "../../../Shared/Card/CardSkeleton";
import usePopularContest from "../../../Api/usePopularContest";



const PopularContest = () => {
    const {popular,isFetching} = usePopularContest()
    const [pop,setPop] = useState([])
   

    const colSpan = [1,2,1,2,1,1]
  
    useEffect(() => {
      const result = popular?.map((p, i) => {
        return { ...p, span: colSpan[i] };
      });

      setPop(result);
    }, [isFetching]);

    

    return (
      <div>
        <div className="flex flex-col text-white">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-indigo-500"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 ">
            <h1 className="sm:w-2/5  font-nova text-white font-medium title-font text-3xl mb-2 sm:mb-0">
              Our Popular Contests
            </h1>
            <p className="sm:w-3/5  leading-relaxed  font-nova sm:pl-10 pl-0">
              Join the buzz at Talent-Sphere's most popular contests! Dive into
              thrilling challenges, showcase your skills, and seize the chance
              to win big rewards while connecting with a vibrant community of
              talented creators.
            </p>
          </div>
        </div>

        {isFetching ? (
          <CardSkeleton></CardSkeleton>
        ) : (
          <div className="md:grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 flex flex-col justify-center items-center gap-5 mt-5">
            {pop.map((p) => (
              <Card key={p._id} data={p}></Card>
            ))}
          </div>
        )}
      </div>
    );
};

export default PopularContest;