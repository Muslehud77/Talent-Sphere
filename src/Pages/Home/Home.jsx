

import About from "../../Components/Home/About/About";
import Banner from "../../Components/Home/Banner/Banner";
import PopularContest from "../../Components/Home/PopularContest/PopularContest";

import Transition from "../../Transition/Transition";
import TalentedContestants from "../../Components/Home/TalentedContestants/TalentedContestends";
import HappyCreators from "../../Components/Home/HappyCreators/HappyCreators";



const Home = () => {

   


    return (
      <div>
        <Banner></Banner>
        <div className="max-w-7xl mx-auto">
          <About></About>
          <PopularContest/>
          <TalentedContestants/>
          <HappyCreators/>
        </div>
        
        <Transition></Transition>
      </div>
    );
};

export default Home;