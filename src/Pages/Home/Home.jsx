
import { Link } from "react-router-dom";
import About from "../../Components/Home/About/About";
import Banner from "../../Components/Home/Banner/Banner";
import PopularContest from "../../Components/Home/PopularContest/PopularContest";

import Transition from "../../Transition/Transition";
import TalentedContestants from "../TalentedContestants/TalentedContestends";



const Home = () => {

   


    return (
      <div>
        <Banner></Banner>
        <div className="max-w-7xl mx-auto">
          <About></About>
          <PopularContest></PopularContest>
          <TalentedContestants/>
        </div>
        
        <Transition></Transition>
      </div>
    );
};

export default Home;