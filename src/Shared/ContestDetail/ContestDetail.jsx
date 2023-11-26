
import useContextInfo from '../../Hooks/useContextInfo';
import useSelected from '../../Hooks/useSelected';
import { motion } from 'framer-motion';

const ContestDetail = () => {

    const { selected, setSelected,  } = useContextInfo();
    
  

    if(!selected) return <></>

    
    return (
      <div
        onClick={() => setSelected(null)}
        className="fixed flex  justify-center items-center inset-0 bg-black/50 h-screen z-50 cursor-pointer overflow-y-auto"
      >
        <div className="cursor-default" onClick={(e) => e.stopPropagation()}>
          <motion.div
            layoutId={selected._id}
            className="card w-full bg-base-100 shadow-2xl image-full"
          >
            <figure>
              <img
                src={selected?.contestImg}
                className="max-h-[600px]  object-fill"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title ">{selected?.contestName}</h2>
              <p>{selected?.shortDescription}</p>
              <div className="card-actions justify-end">
                {selected?.tags?.map((tag, i) => (
                  <span
                    className="bg-black p-1 px-2 rounded-xl text-xs"
                    key={i}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
};

export default ContestDetail;