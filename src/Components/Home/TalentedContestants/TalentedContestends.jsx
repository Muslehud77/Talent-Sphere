import useTalented from "../../../Api/useTalented";
import  Marquee  from 'react-fast-marquee';
import Talents from "./Talents";
import SectionHeading from '../../../Shared/SectionHeading/SectionHeading';


const TalentedContestants = () => {

    const {talented,isFetching} = useTalented()



   


    return (
      <div>
        <section className="">
          <SectionHeading
            position={"start"}
            head={"our talented contestants"}
          ></SectionHeading>
          <h1 className="text-white text-left  text-base md:text-xl font-nova mt-2">
            The path to greatness begins with a single step. <br /> Take that
            step today! Participate in our diverse contests at Talent-Sphere,{" "}
            <br /> where your innovation is recognized and celebrated.
          </h1>
          <div className=" text-white">
            <Marquee autoFill={true}>
              <div className="flex gap-5 mr-5 overflow-hidden">
                {isFetching ? (
                  <>
                    {[1].map((t, i) => (
                      <div
                        key={i}
                        className="flex justify-center items-center h-96"
                      >
                        <div className="skeleton w-32 h-32"></div>
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    {talented.map((talent) => (
                      <Talents key={talent._id} talent={talent}></Talents>
                    ))}{" "}
                  </>
                )}
              </div>
            </Marquee>
          </div>
          <div></div>
        </section>
      </div>
    );
};

export default TalentedContestants;