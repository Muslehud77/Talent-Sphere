/* eslint-disable react/prop-types */



import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const ManageUsersTable = ({users,refetch}) => {
const axiosSecure = useAxiosSecure()

    const setUser = (role,id)=>{
        Swal.fire({
          title: `Are you sure?`,
          
          showCancelButton: true,
          confirmButtonText: `Make ${role}`,
          
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            axiosSecure.patch(`/update-role/${id}`, { role }).then((res) => {
              if (res.data.modifiedCount) {
                Swal.fire("Saved!", "", "success");
                refetch()
              }
            });
          }
        });





       
    }






  return (
    <div>
    
      <div className="overflow-x-auto rounded-xl bg-black/50 backdrop-blur-sm  mt-10">
        <table data-theme="dark" className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>

              <th>User-Info</th>

              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((p, i) => (
              <tr className="cursor-pointer" key={i}>
                <td className="!text-white w-10">{i + 1}</td>
                <td className="!text-white w-96">
                  <div className="flex gap-5">
                    <div className="avatar">
                      <div className="w-24 rounded-full">
                        <img src={p.userImg} />
                      </div>
                    </div>
                    <div>
                      <p>{p.name}</p>
                      <p className="text-black bg-gray-200 p-1 text-xs rounded">
                        {p.email}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="!text-white capitalize">{p.role}</td>
                <td className="w-96">
                  {p.email === "fardinmohit@gmail.com" ? (
                    <></>
                  ) : (
                    <>
                      <button
                        onClick={() => setUser("user", p._id)}
                        disabled={p.role === "user"}
                        className="btn capitalize btn-outline"
                      >
                        make user
                      </button>
                      <button
                        onClick={() => setUser("creator", p._id)}
                        disabled={p.role === "creator"}
                        className="btn capitalize btn-outline"
                      >
                        make creator
                      </button>
                      <button
                        onClick={() => setUser("admin", p._id)}
                        disabled={p.role === "admin"}
                        className={`btn capitalize btn-outline`}
                      >
                        Make Admin
                      </button>
                    </>
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

export default ManageUsersTable;
