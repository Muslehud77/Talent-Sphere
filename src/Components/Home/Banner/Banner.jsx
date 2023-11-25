import Marquee from "react-fast-marquee";
import { motion } from 'framer-motion';




const Banner = () => {
  return (
    <div className="w-full">
      <Marquee
        autoFill={true}
        gradient
        gradientColor="rgba(0, 0, 0, 0.548)"
        gradientWidth={500}
      >
        <div className="container mx-auto bg-gray-800">
          <div className=" flex flex-wrap ">
            <div className="flex w-1/2 flex-wrap">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="w-1/2 p-1 md:p-2"
              >
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://i.postimg.cc/tCTcBY88/1.jpg"
                />
              </motion.div>
              <motion.div
                animate={{ rotate: 90 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="w-1/2 p-1 md:p-2"
              >
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://i.postimg.cc/B60ypNGC/2.jpg"
                />
              </motion.div>
              <motion.div
                animate={{ scale: [0.5, 1] }}
                transition={{ type: "spring", stiffness: 100}}
                className="w-full p-1 md:p-2"
              >
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://i.postimg.cc/3NLcKT0L/3.png"
                />
              </motion.div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <motion.div
                animate={{ scale: [0.5, 1] }}
                transition={{ type: "spring", stiffness: 100}}
                className="w-full p-1 md:p-2"
              >
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://i.postimg.cc/sfS5xL4x/4-2.jpg"
                />
              </motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="w-1/2 p-1 md:p-2"
              >
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://i.postimg.cc/fW5F7xqx/5.jpg"
                />
              </motion.div>
              <motion.div
                animate={{ rotate: 90 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="w-1/2 p-1 md:p-2"
              >
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://i.postimg.cc/3Nrq5RN4/6.png"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Banner;
