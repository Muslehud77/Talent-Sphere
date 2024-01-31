
import useCreatedContests from "../../../../Api/useCreatorContests";

import SectionHeading from "../../../../Shared/SectionHeading/SectionHeading";
import useContextInfo from "../../../../Hooks/useContextInfo";
import useContestAdmin from "../../../../Api/useContestAdmin";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";


const ManageContest = () => {
  const { setSelected } = useContextInfo();
  const axiosSecure = useAxiosSecure()
  
const { allContestForAdmin, refetch } = useContestAdmin();
 

  const set = (id) => {
    setSelected({ _id: id });
  };

  const update = (status,id)=>{
      axiosSecure.patch(`/update/${id}`,{status}).then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            title: "Updated!",
            text: `You made this ${status? 'Pending' : 'Confirmed'}`,
            icon: "success",
          });
          refetch();
        }
      });
  }

   const deleteItem = (id) => {
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
             refetch();
           }
         });
       }
     });
   };



  return (
    <div>
      <SectionHeading position={"center"} head={"Contests created creators"} />
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
            {allContestForAdmin.map((p, i) => (
              <tr className="cursor-pointer" key={i}>
                <td className="!text-white">{i + 1}</td>

                <td
                  onClick={() => set(p._id)}
                  className="!text-white font-nova"
                >
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

                <td className="!text-white">
                  {" "}
                  {p.isPending ? "Pending" : "On Live"}
                </td>
                <td className="!text-white w-36">
                  {p.isPending ? (
                    <>
                      <button
                        onClick={() => update(false, p._id)}
                        className="btn btn-outline w-1/2"
                      >
                        Confirm
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => update(true, p._id)}
                      className="btn btn-outline w-1/2"
                    >
                      Make Pending
                    </button>
                  )}
                  <button
                    onClick={() => deleteItem(p._id)}
                    className="btn w-1/2 btn-error text-white"
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

export default ManageContest;
