/* eslint-disable react/prop-types */

import { motion } from 'framer-motion';
import useSelected from '../../../Hooks/useSelected';

const Card = ({ data }) => {
 const [selected, setSelected] = useSelected();
 
   

  return (
    <motion.div
    onClick={()=>setSelected(data)}
    whileHover={{scale:1.025,transition:{
        duration:0.3
    }}}
    whileTap={{scale:0.95}}
      className={`card w-96 cursor-pointer md:w-full col-span-${data?.span} bg-base-100 shadow-xl image-full`}
    >
      <figure>
        <img
          src={data?.contestImg}
          className="max-w-[500px] h-[100px] object-fill"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title ">{data?.contestName}</h2>
        <p>{data?.shortDescription}</p>
        <div className="card-actions justify-end">
          {data?.tags?.map((tag, i) => (
            <span className="bg-black p-1 px-2 rounded-xl text-xs" key={i}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
