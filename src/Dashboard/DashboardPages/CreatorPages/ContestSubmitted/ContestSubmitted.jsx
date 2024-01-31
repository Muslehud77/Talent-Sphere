
import usePendingContests from '../../../../Api/usePendingContests';
import SectionHeading from '../../../../Shared/SectionHeading/SectionHeading';
import { Link } from 'react-router-dom';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const ContestSubmitted = () => {
    const axiosSecure = useAxiosSecure()
    const {pendingContests,refetch} = usePendingContests()
    

    const deleteItem =  (id)=>{
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            axiosSecure.delete(`/delete/${id}`).then((res) => {
              if (res.data.deletedCount) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
                refetch()
              }
            });


            
          }
        });
        
        

    }

    return (
      <div>
        <SectionHeading
          position={"center"}
          head={"Pending Contests yet to approve"}
        />
        <div className="overflow-x-auto rounded-xl bg-black/50 backdrop-blur-sm  mt-10">
          <table data-theme="dark" className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Contest</th>
                <th>Info</th>
                <th>Requirements</th>

                <th>Status</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {pendingContests.map((p, i) => (
                <tr className="" key={i}>
                  <td className="!text-white">{i + 1}</td>

                  <td className="!text-white font-nova">
                    <p>{p.contestName}</p>
                    <span>{p.contestCategory}</span>
                  </td>
                  <td className="!text-white">
                    <p>Prize: ${p.prizeMoney}</p>
                    <p>Deadline: {p.contestDeadline}</p>
                  </td>
                  <td className="!text-white flex flex-col">
                    {p.taskSubmissionInstructions.map((instructions, i) => (
                      <span key={i}>- {instructions}</span>
                    ))}
                  </td>

                  <td className="!text-white">
                    {p.isPending && "Pending for Admin approval"}
                  </td>
                  <td className="!text-white">
                    <Link
                      to={`/dashboard/edit/${p._id}`}
                      className="btn-sm btn btn-ghost"
                    >
                      Edit
                    </Link>
                  </td>
                  <td className="!text-white">
                    <button
                      onClick={() => deleteItem(p._id)}
                      className="btn-sm btn btn-error text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ContestSubmitted;