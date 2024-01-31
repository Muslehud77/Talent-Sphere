import usePayment from "../../../../Api/usePayment";
import useUser from "../../../../Api/useUser";
import SectionHeading from "./../../../../Shared/SectionHeading/SectionHeading";

const ParticipationChart = () => {
  const { payments } = usePayment();

  return (
    <div>
      <div className="overflow-x-auto shadow-[0_0_40px_cyan] h-96 overflow-y-auto rounded-xl bg-black/50 backdrop-blur-sm">
        <table className="table">
          {/* head */}

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
                  <span className="bg-green-300 rounded p-1 text-xs text-black">
                    Completed
                  </span>
                </td>

                <td className="!text-white">{p.winningStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ParticipationChart;
