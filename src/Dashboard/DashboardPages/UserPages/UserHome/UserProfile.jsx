/* eslint-disable react/prop-types */
import React from 'react';
import useContextInfo from '../../../../Hooks/useContextInfo';
import useUser from '../../../../Api/useUser';

const UserProfile = ({currentTalented}) => {
const { userData } = useUser(currentTalented?._id || "user");
    const { openProfileUpdate, isFetching } = useContextInfo();
    

    return (
      <div>
        {isFetching ? (
          <div className="skeleton h-56 w-96"></div>
        ) : (
          <div className="w-96 shadow-[0_0_30px_#03A9F4] h-56 flex p-3 justify-center bg-black/50 items-center  rounded-xl gap-2 backdrop-blur-sm">
            <img
              src={currentTalented?.userImg}
              className="h-48 w-44 object-cover"
              alt=""
            />
            <div className="bg-black/50 border border-[#4051B5] object-cover rounded-xl h-48 w-full flex flex-col justify-center items-start p-2">
              <h2 className="font-nova ">
                {currentTalented?.name}{" "}
                <span className="text-xs bg-[#00BDD6] text-black rounded px-1">{userData.role}</span>
              </h2>
              <h2 className="bg-white rounded text-black p-1 text-xs">
                {currentTalented?.email}
              </h2>
              <button
                onClick={openProfileUpdate}
                className="btn btn-xs btn-outline text-gray-300 mt-1 py-1 px-2 font-nova uppercase text-xs rounded-md"
              >
                Update
              </button>
            </div>
          </div>
        )}
      </div>
    );
};

export default UserProfile;