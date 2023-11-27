/* eslint-disable react/prop-types */

import { motion } from 'framer-motion';

import useContextInfo from '../../../Hooks/useContextInfo';

const Card = ({ data }) => {

 const { setSelected, user, openLogin } = useContextInfo();
   
 const setContestDetails = ()=>{
    if(user){
        setSelected(data)
    }else{
        openLogin()
    }
 }


  return (
    <motion.div
      layoutId={data._id}
      onClick={setContestDetails}
      whileHover={{
        scale: 1.025,
        transition: {
          duration: 0.3,
        },
      }}
      style={{gridColumn:`span ${data?.span}`}}
      whileTap={{ scale: 0.95 }}
      className={`card w-96 h-96  cursor-pointer md:w-full bg-base-100 shadow-xl image-full`}
    >
      <figure>
        <img
          src={data?.contestImg}
          className="max-w-[500px]  object-fill"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-nova">{data?.contestName}</h2>
        <p className='font-bitter'>{data?.shortDescription}</p>
        <div className="card-actions justify-end">
          {data?.tags?.map((tag, i) => (
            <span className="bg-black font-bitter p-1 px-2 rounded-xl text-xs" key={i}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
