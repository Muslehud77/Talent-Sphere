import Marquee from "react-fast-marquee";
import { motion } from 'framer-motion';
import logo2 from '../../../Assets/Logo/TS-white-2-removebg-preview.png'
import ParticleImage, { forces } from "react-particle-image";
import "react-tooltip/dist/react-tooltip.css";
import Search from './../../../Shared/Search/Search';

const particleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50;
  },
  color: ({ x, y, image }) => "#fff",
};
const motionForce = (x, y) => {
  return forces.disturbance(x, y, 5);
};

const Banner = () => {
  return (
    <div className="w-full min-h-screen relative flex justify-center items-center">
      <Marquee
        autoFill={true}
        gradient
        gradientColor="rgba(0, 0, 0, 0.548)"
        gradientWidth={500}
      >
        <div className="container mx-auto ">
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
                transition={{ type: "spring", stiffness: 100 }}
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
                transition={{ type: "spring", stiffness: 100 }}
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
      <div className="absolute h-full w-full flex flex-col justify-center items-center z-20 bg-black/70 pb-40 md:pb-0 pt-52  lg:pb-40">
        <ParticleImage
          src={logo2}
          scale={0.75}
          entropy={10}
          maxParticles={8000}
          particleOptions={particleOptions}
          mouseMoveForce={motionForce}
          touchMoveForce={motionForce}
          backgroundColor="transparent"
        />
        <div className="h-full">
          <Search></Search>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
