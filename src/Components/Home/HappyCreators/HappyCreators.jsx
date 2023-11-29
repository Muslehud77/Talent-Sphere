import React from 'react';
import useHappyCreators from '../../../Api/useHappyCreators';
import Creator from './Creator';
import CreatorSlider from './CreatorSlider';
import SectionHeading from '../../../Shared/SectionHeading/SectionHeading';

const HappyCreators = () => {

    const {creators,isFetching} = useHappyCreators()

    console.log(creators.length);


    return (
      <div className="space-y-10">
        <SectionHeading
          margin={"5"}
          position={"end"}
          head={"our happy creators's"}
        />
        <h1 className="text-white text-right  text-base md:text-xl font-nova">
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