/* eslint-disable react/prop-types */
import React from 'react';
import { FaRankingStar } from "react-icons/fa6";
import { TbProgressBolt } from "react-icons/tb";
import { GiProgression } from "react-icons/gi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import useUser from '../../../../Api/useUser';
const Stats = ({ currentTalented, payments }) => {
const { userData } = useUser(currentTalented?._id || "user");
  


  return (
    <div className="md:flex flex-col md:flex-row gap-2">
      <div
        data-theme="dark"
        className="stats bg-transparent w-44 border border-gray-600 backdrop-blur-sm cursor-pointer hover:shadow-[0_0_65px_cyan]  shadow-[0_0_30px_#00BDD6] transition-all duration-300"
      >
        <div className="stat">
          <div className=" text-white">
            <FaRankingStar size={40} />
          </div>
          <div className="stat-title font-nova text-white">Rank</div>
          <div className="stat-value text-gray-200 font-bitter">
            #0{currentTalented?.rank ? currentTalented?.rank : 0}
          </div>
          <div className="stat-desc"></div>
        </div>
      </div>
      <div
        data-theme="dark"
        className="stats bg-transparent w-44 border border-gray-600 backdrop-blur-sm cursor-pointer hover:shadow-[0_0_65px_cyan]  shadow-[0_0_30px_#00BDD6] transition-all duration-300"
      >
        <div className="stat">
          <div className=" text-white">
            <TbProgressBolt size={40} />
          </div>
          <div className="stat-title font-nova text-white">Participated</div>
          <div className="stat-value text-gray-200 font-bitter">
            {userData?.contestParticipated || 0}{" "}
            <span className="text-xs font-bitter">Contests</span>
          </div>
          <div className="stat-desc"></div>
        </div>
      </div>
      <div
        data-theme="dark"
        className="stats bg-transparent w-44 border border-gray-600 backdrop-blur-sm cursor-pointer hover:shadow-[0_0_65px_cyan]  shadow-[0_0_30px_#00BDD6] transition-all duration-300"
      >
        <div className="stat">
          <div className=" text-white">
            <GiProgression size={40} />
          </div>
          <div className="stat-title font-nova text-white">Won</div>
          <div className="stat-value text-gray-200 font-bitter">
            {userData?.contestWon || 0}{" "}
            <span className="text-xs font-bitter">Contests</span>
          </div>
          <div className="stat-desc"></div>
        </div>
      </div>
      <div
        data-theme="dark"
        className="stats bg-transparent w-44 border border-gray-600 backdrop-blur-sm cursor-pointer hover:shadow-[0_0_65px_cyan]  shadow-[0_0_30px_#00BDD6] transition-all duration-300"
      >
        <div className="stat">
          <div className=" text-white">
            <RiMoneyDollarCircleFill size={40} />
          </div>
          <div className="stat-title font-nova text-white">Earning</div>
          <div className="stat-value text-gray-200 font-bitter">
            ${userData?.prizeMoney || 0}{" "}
          </div>
          <div className="stat-desc"></div>
        </div>
      </div>
    </div>
  );
};

export default Stats;