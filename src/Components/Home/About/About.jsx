import bg from '../../../Assets/Background/usingComputer.png'


const About = () => {
    return (
      <section className="mb-10">
        <div className="container mx-auto flex justify-between px-5 md:flex-row flex-col items-center">
          <div className="text-center text-white my-20">
            <div className="flex  justify-start">
              <h2 className="text-xs  uppercase w-56 bg-white  text-indigo-500 tracking-widest font-semibold title-font mb-1">
                Talent Sphere
              </h2>
            </div>
            <h1 className="sm:text-3xl text-left text-2xl font-medium title-font text-white font-nova mb-4">
              Where Ideas Compete, Talent Shines!
            </h1>

            <div className="flex mt-6 justify-start">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
            <h1 className="text-left font-medium title-font text-white font-nova mb-4 mt-2">
              At Talent-Sphere, our vision is to empower creators worldwide,
              fostering innovation, diversity, and community. We aim to
              celebrate talents, inspire collaborations, and provide
              recognition, creating a dynamic platform for limitless creativity.
            </h1>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover  object-center rounded"
              alt="hero"
              src={bg}
            />
          </div>
        </div>
      </section>
    );
};

export default About;