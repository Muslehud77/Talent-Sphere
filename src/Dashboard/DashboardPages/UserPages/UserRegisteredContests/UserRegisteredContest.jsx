import usePayment from "../../../../Api/usePayment";
import SectionHeading from './../../../../Shared/SectionHeading/SectionHeading';

const UserRegisteredContest = () => {

    const {payments} = usePayment()
 
    
    return (
      <div>
        <SectionHeading position={"center"} head={"Contest attempts"} />
        <div className="overflow-x-auto rounded-xl bg-black/50 backdrop-blur-sm  mt-10">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Contest</th>
                <th>Requirements</th>
                <th>Payment id</th>
                <th>Payment Status</th>
                <th>Paid</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {payments.map((p, i) => (
                <tr key={i}>
                  <td className="!text-white">{i + 1}</td>
                  <td className="!text-white">
                    <p>{p.contest.contestName}</p>
                    <p>Deadline: {p.contest.contestDeadline}</p>
                  </td>
                  <td className="!text-white">
                    {p.contest.taskSubmissionInstructions.length} Requirements{" "}
                    <span className="bg-green-300 rounded p-1 text-xs text-black">Completed</span>
                  </td>
                  <td className="!text-white">{p.payment_id}</td>
                  <td className="!text-white">{p.payment}</td>
                  <td className="!text-white">${p.amount}.00</td>
                  <td className="!text-white">{p.winningStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default UserRegisteredContest;