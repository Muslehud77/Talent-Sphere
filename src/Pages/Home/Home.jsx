

import About from "../../Components/Home/About/About";
import Banner from "../../Components/Home/Banner/Banner";
import PopularContest from "../../Components/Home/PopularContest/PopularContest";

import Transition from "../../Transition/Transition";
import TalentedContestants from "../../Components/Home/TalentedContestants/TalentedContestends";
import HappyCreators from "../../Components/Home/HappyCreators/HappyCreators";
import Testimonial from "../../Components/Home/Testimonial/Testimonial";
import useContextInfo from "../../Hooks/useContextInfo";
import { useLocation } from "react-router-dom";
import { useEffect } from 'react';



const Home = () => {
 const { openLogin } = useContextInfo();
 const {pathname, state } = useLocation();
   


useEffect(() => {
if(pathname==='/'){
 if (state) {
   openLogin();
 }
}
 
}, [state]);

    return (
      <div>
        <Banner></Banner>
        <div className="max-w-7xl mx-auto">
          <About></About>
          <PopularContest/>
          <TalentedContestants/>
          <HappyCreators/>
          <Testimonial/>
        </div>
        
        <Transition></Transition>
      </div>
    );
};

export default Home;