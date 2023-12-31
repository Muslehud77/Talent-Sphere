
import { useEffect } from 'react';

import Card from '../../Shared/Card/Card';
import Transition from '../../Transition/Transition';
import CardSkeleton from '../../Shared/Card/CardSkeleton';
import { useState } from 'react';
import SectionHeading from '../../Shared/SectionHeading/SectionHeading';
import useAllContest from '../../Api/useAllContest';
import Search from '../../Shared/Search/Search';
import useContextInfo from '../../Hooks/useContextInfo';
import { useLocation, useNavigate } from 'react-router-dom';
import Pagination from './Pagination';


const RunningContests = () => {
const [currentTab,setCurrentTab] = useState('All')
const navigate = useNavigate()
const {setSearch} = useContextInfo()
const {state} = useLocation()
const [currentPage, setCurrentPage] = useState(1);
 const [itemsPerPage, setItemsPerPage] = useState(10);
 const { allContests, isFetching, count } = useAllContest(
   currentTab,
   currentPage,
   itemsPerPage
 );
const c = count || 40


useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  if(state){
    setCurrentTab(state)
    navigate('/contests', { replace: true });
  }
}, [state,isFetching]);

const tabs = ['All','Business','Medical','Article','Gaming']


    return (
      <div className="container mx-auto">
        <SectionHeading margin={'10'} hasLogo head="all contests" />
        <div className="flex flex-col justify-center lg:flex-row lg:justify-between items-center my-5 gap-5">
          <div data-theme="dark" role="tablist" className="tabs tabs-boxed">
            {tabs.map((tab, i) => (
              <a
                key={i}
                role="tab"
                onClick={() => {
                  setCurrentTab(tab);
                  setSearch("");
                  setCurrentPage(1)
                }}
                className={`tab uppercase hover:tracking-[0.25em] !text-xs !transition-all  !duration-500 !text-white ${
                  currentTab === tab && "bg-[#00BDD6] shadow-[0_0_65px_white]"
                }`}
              >
                {tab}
              </a>
            ))}
          </div>
          <Search
            setCurrentTab={setCurrentTab}
            currentTab={currentTab}
          ></Search>
        </div>

        {isFetching ? (
          <CardSkeleton />
        ) : (
          <div className="md:grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-6 flex flex-col justify-center items-center gap-5">
            {allContests.map((contest) => (
              <Card key={contest._id} data={contest}></Card>
            ))}
          </div>
        )}
        <Pagination itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} count={c}></Pagination>
        <Transition></Transition>
      </div>
    );
};

export default RunningContests;