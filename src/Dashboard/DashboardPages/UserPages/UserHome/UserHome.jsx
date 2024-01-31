
import usePayment from '../../../../Api/usePayment';
import useUser from '../../../../Api/useUser';
import useTalented from './../../../../Api/useTalented';
import Chart from './Chart';
import ParticipationChart from './ParticipationChart';
import Stats from './Stats';
import UserProfile from './UserProfile';
const UserHome = () => {
  const {currentTalented,isFetching} = useTalented()
  const {payments} = usePayment()
 const {userData} = useUser(currentTalented?._id||'user')

 const chartData = [
   { name: "Participated", value: userData.contestParticipated },
   { name: "Won", value: userData.contestWon },
 ];


  return (
    <div className="flex flex-col gap-5 mt-10 justify-center items-center container mx-auto">
      <div className="flex w-full justify-center gap-5 flex-col md:flex-row ">
        <UserProfile
          currentTalented={userData}
          isFetching={isFetching}
        ></UserProfile>
        <Stats
          payments={payments}
          currentTalented={currentTalented}
          isFetching={isFetching}
        ></Stats>
      </div>
      <div className="flex w-full justify-center gap-5 flex-col md:flex-row">
        <Chart chartData={chartData} />
        <ParticipationChart />
      </div>
    </div>
  );
};

export default UserHome;
