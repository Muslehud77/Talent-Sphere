import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useContextInfo from "../../Hooks/useContextInfo";
import Counter from "../Counter/Counter";
import { motion } from "framer-motion";
import prize from '../../Assets/Lotties/prize.json'
import Lottie from "react-lottie-player";

import { MdOutlineCancel } from "react-icons/md";
const ContestDetail = () => {
  const { selected, setSelected } = useContextInfo();
  const axiosSecure = useAxiosSecure();

  const { data: contest = {} } = useQuery({
    queryKey: [`contest_${selected?._id}`],
    queryFn: async () => {
      const data = await axiosSecure.get(`/contest/${selected._id}`);
      return data.data;
    },
  });
  if(selected) {
    document.querySelector('body').classList.add('overflow-y-hidden');
  }else{
    document.querySelector("body").classList.remove('overflow-y-hidden');
  }
  if (!selected) return <></>;

  return (
    <>
      <div
        onClick={() => setSelected(null)}
        className="fixed flex overflow-x-hidden justify-center items-center inset-0 bg-black/70 h-screen z-50 cursor-pointer overflow-y-auto"
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
              className="card h-[500px] md:h-96 lg:h-[700px] overflow-y-auto md:h-9/12 w-full detail md:w-[900px] bg-black shadow-2xl  image-full"
            >
              <figure>
                <img
                  src={contest?.contestImg}
                  className=" h-[600px] w-full blur-sm object-fill"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <div className="flex justify-end">
                  <button onClick={() => setSelected(null)}>
                    <MdOutlineCancel size={30} />
                  </button>
                </div>
                <h2 className="card-title font-nova">{contest?.contestName}</h2>
                <div className="flex-grow">
                  <motion.div
                    animate={{ y: 0 }}
                    transition={{ from: -100, type: "spring", duration: 1 }}
                    exit={{ y: -100 }}
                  >
                    <p className="font-bitter uppercase bg-black p-2 shadow-xl rounded-t-lg">
                      {contest?.shortDescription}
                    </p>
                    <p className="bg-gray-700 p-2 shadow-xl rounded-b-lg">
                      {contest?.detailedDescription}
                    </p>
                  </motion.div>

                  <div className="flex flex-wrap items-center justify-center md:justify-between">
                    <motion.div
                      animate={{ scale: 1 }}
                      transition={{ from: 0, duration: 0.8 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col justify-center items-center"
                    >
                      <Lottie
                        loop={false}
                        animationData={prize}
                        play
                        style={{ width: 150, height: 150 }}
                      />
                      <div className="w-full">
                        <p className="bg-red-600 px-2  text-center rounded-xl  font-bitter font-bold tracking-[0.15em] py-3 text-white shadow-xl p-1">
                          ${contest?.prizeMoney}/Prize Money
                        </p>
                      </div>
                    </motion.div>
                    <motion.div
                      animate={{ opacity: 1 }}
                      transition={{ from: 0, duration: 1 }}
                      exit={{ opacity: 0 }}
                      className="accordion-group  p-2 w-72 mt-2 rounded"
                    >
                      <p className="text-gray-800 uppercase text-sm mb-1 rounded bg-white/80 text-center">
                        what to submit?
                      </p>
                      <motion.div
                        whileHover={{
                          scale: 1.1,
                          transition: {
                            duration: 0.3,
                          },
                        }}
                        className=" bg-black/50 cursor-pointer backdrop-blur-lg rounded-lg"
                      >
                        <ul className="  text-gray-300 py-2 text-sm">
                          {contest?.taskSubmissionInstructions.map(
                            (task, i) => (
                              <li className="px-2 " key={i}>
                                - {task}
                              </li>
                            )
                          )}
                          {contest?.contestPrice > 0 && (
                            <li className="px-2 text-sm">- Payment ID.</li>
                          )}
                        </ul>
                        <div className="bg-white font-bold text-gray-500 text-xs mt-2 p-1">
                          <p className="mb-1">
                            {" "}
                            Submit the required attachments to this email below
                          </p>

                          <a className="bg-black hover:underline cursor-pointer  text-gray-200 p-1 rounded-md">
                            {contest?.creatorInfo.email}
                          </a>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
                <div className="flex flex-col gap-5  md:flex-row-reverse justify-between">
                  <motion.div
                    animate={{ y: 0 }}
                    transition={{ from: 100, type: "spring", duration: 1 }}
                    exit={{ y: -100 }}
                    className="flex flex-col gap-5 "
                  >
                    <Counter date={contest?.contestDeadline} />
                    <div className="flex justify-end">
                      <button className="btn">Pay ${contest?.contestPrice} to Participate</button>
                    </div>
                  </motion.div>
                  <div className="card-actions flex-col">
                    {contest?.tags?.map((tag, i) => (
                      <span
                        className="bg-white text-gray-700 font-bitter p-1 px-2 rounded-xl font-bold text-xs"
                        key={i}
                      >
                        {tag}
                      </span>
                    ))}
                    <p className="bg-cyan-400/50 rounded-xl font-nova py-3 text-white shadow-xl p-1">
                      Participated so far{" "}
                      <span className="bg-black text-white p-2">
                        {contest?.attempt}
                      </span>
                    </p>
                  </div>
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
