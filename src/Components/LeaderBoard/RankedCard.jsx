/* eslint-disable react/prop-types */


const RankedCard = ({talent}) => {


    return (
      <div className="lg:w-72 bg-black/80 border rounded-xl border-[#03A9F4]">
        <div className="h-full hover:scale-105 transition-all duration-300  px-8 pt-16 pb-12 rounded-lg overflow-hidden text-center relative">
          <div className="flex max-h-28 justify-center ">
            <div className=" rounded">
              <img className="w-28 h-28 object-cover" src={talent.userImg} />
            </div>
          </div>
          <h2 className="tracking-widest mb-5 text-xs title-font font-medium text-white ">
            {talent.name}
          </h2>
          <span className="p-2 font-mono text-2xl bg-white">
            <span className='text-base'>Rank</span> #0{talent.rank}
          </span>
        </div>
      </div>
    );
};

export default RankedCard;