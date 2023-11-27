import React from 'react';

const About = () => {
    return (
      <div>
        <div className="text-center text-white my-20">
          <div className="flex justify-center">
            <h2 className="text-xs  uppercase w-56 bg-white  text-indigo-500 tracking-widest font-semibold title-font mb-1">
              Talent Sphere
            </h2>
          </div>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-white font-nova mb-4">
            Where Ideas Compete, Talent Shines!
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            TalentSphere is a dynamic platform fostering creativity, engaging
            communities, and celebrating talent through seamless contest
            creation and efficient winner selection.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
      </div>
    );
};

export default About;