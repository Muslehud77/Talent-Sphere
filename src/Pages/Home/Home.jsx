
import { Link } from "react-router-dom";
import About from "../../Components/Home/About/About";
import Banner from "../../Components/Home/Banner/Banner";
import PopularContest from "../../Components/Home/PopularContest/PopularContest";

import Transition from "../../Transition/Transition";



const Home = () => {

   


    return (
      <div>
        <Banner></Banner>
        <div className="max-w-7xl mx-auto">
          <About></About>
          <PopularContest></PopularContest>
        </div>
        
        <Transition></Transition>
      </div>
    );
};

export default Home;