
import { useEffect } from 'react';

import Card from '../../Shared/Card/Card';
import Transition from '../../Transition/Transition';
import CardSkeleton from '../../Shared/Card/CardSkeleton';
import { useState } from 'react';
import SectionHeading from '../../Shared/SectionHeading/SectionHeading';
import useAllContest from '../../Api/useAllContest';
import Search from '../../Shared/Search/Search';


const RunningContests = () => {
const [currentTab,setCurrentTab] = useState('All')
const { allContests, isFetching } = useAllContest(currentTab);



useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, []);

const tabs = ['All','Business','Medical','Article','Gaming']


    return (
      <div className="container mx-auto">
        <SectionHeading head='all contests'/>
        <div className='flex flex-col justify-center lg:flex-row lg:justify-between items-center my-5 gap-5'> 
          <div data-theme="dark" role="tablist" className="tabs tabs-boxed">
            {tabs.map((tab, i) => (
              <a
                key={i}
                role="tab"
                onClick={() => setCurrentTab(tab)}
                className={`tab !text-white ${
                  currentTab === tab && "bg-[#00BDD6]"
                }`}
              >
                {tab}
              </a>
            ))}
          </div>
         <Search></Search>
        </div>

        {isFetching ? (
          <CardSkeleton />
        ) : (
          <div className="md:grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-5 flex flex-col justify-center items-center gap-5">
            {allContests.map((contest) => (
              <Card key={contest._id} data={contest}></Card>
            ))}
          </div>
        )}

        <Transition></Transition>
      </div>
    );
};

export default RunningContests;