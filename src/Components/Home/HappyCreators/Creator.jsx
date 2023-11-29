/* eslint-disable react/prop-types */

import useContextInfo from "../../../Hooks/useContextInfo";


const Creator = ({creator}) => {

  const {selected,setSelected} = useContextInfo()
  console.log(selected);

    console.log(creator);
    return (
      <div className="p-10 bg-black/50 backdrop-blur-sm border rounded-md  w-80 md:w-full flex flex-col items-start">
        <a className="inline-flex items-center">
          <img
            alt="blog"
            src={creator.creatorImage}
            className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
          />
          <span className="flex-grow flex flex-col pl-4">
            <span className="title-font font-medium text-gray-200">
              {creator.creatorName}
            </span>
            <span className="text-gray-100 text-xs uppercase tracking-widest mt-0.5">
              Creator
            </span>
          </span>
        </a>
        <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full"></div>
        <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
          CATEGORY
        </span>
        <h2 className="text-xl title-font font-medium text-gray-200 mt-4 mb-4">
          Created {creator.totalContests} Contests so far
        </h2>
        <p className="leading-relaxed mb-8">
          Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal
          portland. VHS man braid palo santo hoodie brunch trust fund. Bitters
          hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's,
          slow-carb etsy tumeric. Cray pug you probably haven't heard of them
          hexagon kickstarter craft beer pork chic.
        </p>
      </div>
    );
};

export default Creator;