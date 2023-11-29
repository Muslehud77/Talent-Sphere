/* eslint-disable react/prop-types */
import React from 'react';

// eslint-disable-next-line react/prop-types
const RankTable = ({ranked,isFetching}) => {

    console.log(ranked);
    return (
      <div className="my-10">
        <div className="overflow-x-auto backdrop-blur-sm">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Rank</th>
                <th>Contestant</th>

                <th>Participated</th>
                <th>Won</th>
                <th>Win Ratio</th>
              </tr>
            </thead>
            <tbody>
              {ranked.map((talent) => (
                <tr key={talent._id}>
                  <td className="!text-white font-bold text-xl">
                    #{talent.rank}
                  </td>
                  <td className="text-white">
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={talent.userImg}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-white">Hart Hagerty</div>
                        <div className="text-sm opacity-50 text-white">
                          United States
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="!text-white text-xl font-bold text-center">
                    {talent.contestParticipated}
                  </td>
                  <td className="!text-white text-xl font-bold text-center">
                    {talent.contestWon}
                  </td>
                  <td className="!text-white text-xl font-bold text-center">
                    {talent.ratio.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
            {/* foot */}
            <tfoot></tfoot>
          </table>
        </div>
      </div>
    );
};

export default RankTable;