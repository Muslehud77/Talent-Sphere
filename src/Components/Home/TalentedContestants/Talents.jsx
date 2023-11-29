/* eslint-disable react/prop-types */
import React from 'react';

const Talents = ({talent}) => {
    return (
      <div  className="lg:w-72">
        <div className="h-full hover:scale-105 transition-all duration-300  px-8 pt-16 pb-12 rounded-lg overflow-hidden text-center relative">
          <div className="flex max-h-28 justify-center ">
            <div className=" rounded">
              <img className="w-28 h-28 object-cover" src={talent.userImg} />
            </div>
          </div>
          <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1">
            {talent.name}
          </h2>
          <h1 className="font-mono mt-2  bg-[#00DBFF] sm:text-2xl text-xl font-medium text-black rounded mb-3">
            Won{" "}
            <span className="bg-black text-white p-1">
              ${talent.prizeMoney}
            </span>
          </h1>
          <h1 className="font-nova sm:text-2xl text-xl font-medium text-white mb-3">
            {talent.contestWon} victories
          </h1>
        </div>
      </div>
    );
};

export default Talents;