import { useEffect, useState } from "react";
import usePopularContest from "../../../Hooks/usePopularContest";
import Card from "./Card";
import useSelected from './../../../Hooks/useSelected';


const PopularContest = () => {
    const {popular,isFetching} = usePopularContest()
    const [pop,setPop] = useState([])
    const [selected,setSelected] = useSelected()

    const colSpan = [1,2,1,2,1,1]
  
    useEffect(() => {
      const result = popular?.map((p, i) => {
        return { ...p, span: colSpan[i] };
      });

      setPop(result);
    }, [isFetching]);

    

    return (
        <div className="md:grid grid-cols-4 gap-5 mt-5">
            {
                pop.map(p=><Card key={p._id} data={p}></Card>)
            }
        </div>
    );
};

export default PopularContest;