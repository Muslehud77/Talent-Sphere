/* eslint-disable react/prop-types */

import useContextInfo from "../../../Hooks/useContextInfo";
import { motion } from 'framer-motion';



const Creator = ({creator}) => {
 
  const {selected,setSelected,user,openLogin} = useContextInfo()



 const setContestDetails = (data) => {
  console.log(data);
   if (user) {
     setSelected({_id:data});
   } else {
     openLogin();
   }
 };
    
    return (
      <div className="p-10 bg-black/50 backdrop-blur-sm border rounded-md  w-80 md:w-full flex flex-col items-start">
        <a className="inline-flex items-center">
          <img
            alt="blog"
            src={creator.creatorImage}
            className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
          />
          <span className="flex-grow flex flex-col pl-4">
            <span className="title-font font-medium text-gray-200">
              {creator.creatorName}
            </span>
            <span className="text-gray-100 text-xs uppercase tracking-widest mt-0.5">
              Creator
            </span>
          </span>
        </a>
        <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full"></div>
        <div className="text-white w-full">
          <h4 className="text-center mb-5">
            Some of {creator.creatorName}'s Best Contests
          </h4>
          <ul>
            {creator?.contests.map((contest, i) => (
              <motion.li
                
                onClick={()=>setContestDetails(contest.id)}
                whileHover={{
                  scale: 1.025,
                  transition: {
                    duration: 0.3,
                  },
                }}
                key={i}
                className="cursor-pointer w-full"
              >
                <div className="mb-4">
                  <div>
                    <div className="flex rounded-md overflow-hidden justify-between text-xs">
                      <span className=" text-black uppercase p-1 bg-white">
                        {contest.contestCategory}
                      </span>
                      <span className="bg-[#00BDD6] text-gray-100 font-bold p-1">
                        {contest.attempt} Participation's
                      </span>
                    </div>
                    <p className="font-nova">{contest.contestName}</p>
                    <p className="text-xs">{contest.shortDescription}</p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    );
};

export default Creator;