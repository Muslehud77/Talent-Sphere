
import Banner from "../../Components/Home/Banner/Banner";
import Transition from "../../Transition/Transition";



const Home = () => {

   


    return (
      <div>
        <Banner></Banner>
        <div className="diff aspect-[16/9]">
          <div className="diff-item-1">
            <div className="bg-primary text-primary-content text-9xl font-black grid place-content-center">
              DAISY
            </div>
          </div>
          <div className="diff-resizer"></div>
          <div className="diff-item-2">
            <div className="bg-base-200 text-9xl font-black grid place-content-center">
              DAISY
            </div>
          </div>
        </div>
        <Transition></Transition>
      </div>
    );
};

export default Home;