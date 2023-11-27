
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useContextInfo from '../../Hooks/useContextInfo';
import useSelected from '../../Hooks/useSelected';
import { motion } from 'framer-motion';

const ContestDetail = () => {

    const { selected, setSelected,  } = useContextInfo();
    const axiosSecure = useAxiosSecure()
  
   const { data: contest = {} } = useQuery({
     queryKey: [`contest_${selected?._id}`],
     queryFn: async () => {
       const data = await axiosSecure.get(`/contest/${selected._id}`);
       return data.data;
     },
   });
 

    
   

    if(!selected) return <></>

   
    
    return (
      <>
        <div
          onClick={() => setSelected(null)}
          className="fixed flex  justify-center items-center inset-0 bg-black/50 h-screen z-50 cursor-pointer overflow-y-auto"
        >
          <div className="cursor-default" onClick={(e) => e.stopPropagation()}>
            {!contest._id ? (
              <motion.div layoutId={selected._id}>
                <div
                  data-theme="dark"
                  className="flex flex-col justify-center gap-4 w-[500px] md:w-[900px] h-[600px]"
                >
                  <div className="skeleton h-full w-full"></div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                layoutId={selected._id}
                className="card h-[600px] md:h-9/12 w-full bg-base-100 shadow-2xl image-full"
              >
                <figure>
                  <img
                    src={contest?.contestImg}
                    className=" h-[600px]  object-fill"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-nova">
                    {contest?.contestName}
                  </h2>
                  <p>{contest?.shortDescription}</p>
                  <div className="card-actions justify-end">
                    {contest?.tags?.map((tag, i) => (
                      <span
                        className="bg-black font-bitter p-1 px-2 rounded-xl text-xs"
                        key={i}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </>
    );
};

export default ContestDetail;