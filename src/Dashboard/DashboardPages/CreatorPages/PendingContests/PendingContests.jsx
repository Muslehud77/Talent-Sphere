import React, { useRef } from 'react';
import usePaidRequested from '../../../../Api/usePaidRequested';
import SectionHeading from './../../../../Shared/SectionHeading/SectionHeading';
import useAxiosSecure from './../../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const PendingContests = () => {
    
    const {pendings,isFetching,refetch} = usePaidRequested()

    const axiosSecure = useAxiosSecure()
    console.log(pendings);
    const decide = (id,money,contestId,email,name)=>{
      Swal.fire({
        title: "is this the winner?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Yes",
        denyButtonText: `No`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {

          axiosSecure
            .patch(`/decide/${id}`, {
              winningStatus: "Winner",
              money,
              email,
              contestId,
            })
            .then((res) => {
              if (res.data.success) {
                Swal.fire("Saved!", "", "success");
              }
              refetch();
            });






         
        } else if (result.isDenied) {
          Swal.fire({
            title: `are you sure ${name} is losing this?`,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              axiosSecure
                .patch(`/decide/${id}`, {
                  winningStatus: "Looser",
                  money,
                  email,
                })
                .then((res) => {
                  if (res.data.success) {
                    Swal.fire("Saved!", "", "success");
                  }
                  refetch();
                });
            } else if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "info");
            }
          });
        }
      });
    }



   

    return (
      <div>
        <SectionHeading
          position={"center"}
          head={"completed tasks by the contestants"}
        />
        <div className="overflow-x-auto rounded-xl bg-black/50 backdrop-blur-sm  mt-10">
          <table data-theme='dark' className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Contestant</th>
                <th>Contest</th>
                <th>Requirement Status</th>

                <th>Payment Status</th>
                <th>Paid</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {pendings.map((p, i) => (
                <tr className="" key={i}>
                  <td className="!text-white">{i + 1}</td>

                  <td className="!text-white">
                    <p>{p.name}</p>
                    <span className="bg-gray-500 p-1 text-xs rounded-lg">
                      {p.email}
                    </span>
                  </td>
                  <td className="!text-white">
                    <p>{p.contest.contestName}</p>
                    <p>Deadline: {p.contest.contestDeadline}</p>
                  </td>
                  <td className="!text-white">
                    {p.contest.taskSubmissionInstructions.length} Requirements{" "}
                    <span className="bg-green-300 rounded p-1 text-xs text-black">
                      Completed
                    </span>
                  </td>

                  <td className="!text-white">{p.payment}</td>
                  <td className="!text-white">${p.amount}.00</td>

                  <td className="!text-white">
                    {p.winningStatus === "Pending" ? (
                      <button onClick={()=>decide(p._id,p.contest.prizeMoney,p.contest._id,p.email,p.name)} className="btn btn-sm">Decide</button>
                    ) : (
                      p.winningStatus
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default PendingContests;