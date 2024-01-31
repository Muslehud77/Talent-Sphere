
import useHappyCreators from '../../../Api/useHappyCreators';

import CreatorSlider from './CreatorSlider';
import SectionHeading from '../../../Shared/SectionHeading/SectionHeading';

const HappyCreators = () => {

    const {creators,isFetching} = useHappyCreators()

   


    return (
      <div className="">
        <SectionHeading
          margin={"5"}
          position={"end"}
          head={"our happy creators's"}
        />
        <h1 className="text-white text-right  text-base md:text-xl font-nova mt-2 mb-10">
          Inspiring innovation, fostering talent, <br /> and celebrating
          creativity across diverse domains, <br /> creating impact through
          collaborative challenges and opportunities
        </h1>
        <CreatorSlider
          isFetching={isFetching}
          creators={creators}
        ></CreatorSlider>
      </div>
    );
};

export default HappyCreators;