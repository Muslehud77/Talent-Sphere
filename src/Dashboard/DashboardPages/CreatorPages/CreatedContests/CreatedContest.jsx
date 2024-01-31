import React from 'react';
import useCreatedContests from '../../../../Api/useCreatorContests';
import { Link } from 'react-router-dom';
import SectionHeading from '../../../../Shared/SectionHeading/SectionHeading';
import useContextInfo from '../../../../Hooks/useContextInfo';

const CreatedContest = () => {
    const {setSelected} = useContextInfo() 
    const {createdContests} = useCreatedContests()

   
    
    const set = (id)=>{
        setSelected({_id:id})
    }

    return (
      <div>
        <SectionHeading position={"center"} head={"Contests created by me"} />
        <div className="overflow-x-auto rounded-xl bg-black/50 backdrop-blur-sm  mt-10">
          <table data-theme="dark" className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Contest</th>
                <th>Info</th>
                <th>Attempted</th>

                <th>Status</th>
                <th>Earning so far</th>
                
              </tr>
            </thead>
            <tbody>
           

              {createdContests.map((p, i) => (
                <tr onClick={()=>set(p._id)} className="cursor-pointer" key={i}>
                  <td className="!text-white">{i + 1}</td>

                  <td className="!text-white font-nova">
                    <p>{p.contestName}</p>
                    <span>{p.contestCategory}</span>
                  </td>
                  <td className="!text-white">
                    <p>Prize: ${p.prizeMoney}</p>
                    <p>Deadline: {p.contestDeadline}</p>
                  </td>
                  <td className="!text-white">
                    <p>{p.attempt} times</p>
                  </td>

                  <td className="!text-white">On Going</td>
                  <td className="!text-white">${p.attempt * p.contestPrice}</td>
                 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default CreatedContest;