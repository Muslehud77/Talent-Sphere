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
      <>
        {isFetching ? (
          <CardSkeleton></CardSkeleton>
        ) : (
          <div className="md:grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 flex flex-col justify-center items-center gap-5 mt-5">
            {pop.map((p) => (
              <Card key={p._id} data={p}></Card>
            ))}
          </div>
        )}
      </>
    );
};

export default PopularContest;