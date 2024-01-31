import Marquee from "react-fast-marquee";
import { motion } from 'framer-motion';
import logo2 from '../../../Assets/Logo/TS-white-2-removebg-preview.png'
import ParticleImage, { forces } from "react-particle-image";
import "react-tooltip/dist/react-tooltip.css";
import Search from './../../../Shared/Search/Search';
import GridOfImages from "./GridOfImages";
import { BrowserView, MobileOnlyView } from "react-device-detect";

const particleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50;
  },
  color: () => "#fff",
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
        <GridOfImages />
      </Marquee>
      <div className="absolute h-full w-full flex flex-col justify-center items-center z-20 bg-black/70 pb-40 md:pb-0 pt-52  lg:pb-40">
        <MobileOnlyView>
          <img className="w-56 mb-2" src={logo2} />
        </MobileOnlyView>
       
        <BrowserView>
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
        </BrowserView>
        <div className="h-full">
          <Search></Search>
        </div>
      </div>
    </div>
  );
};

export default Banner;
