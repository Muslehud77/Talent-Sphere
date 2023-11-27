
import { useEffect } from 'react';
import useAllContest from '../../Hooks/useAllContest';
import Card from '../../Shared/Card/Card';
import Transition from '../../Transition/Transition';


const RunningContests = () => {

const {allContests} = useAllContest()

useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, []);



    return (
      <div className="md:mt-36 mt-10 container mx-auto">
        <div className="md:grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-5 flex flex-col justify-center items-center gap-5">
          {allContests.map((contest) => (
            <Card key={contest._id} data={contest}></Card>
          ))}
        </div>
        <Transition></Transition>
      </div>
    );
};

export default RunningContests;