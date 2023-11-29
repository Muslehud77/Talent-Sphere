import RankTable from "../../Components/LeaderBoard/RankTable";
import RankedContestants from "../../Components/LeaderBoard/RankedContestants";
import SectionHeading from "../../Shared/SectionHeading/SectionHeading";
import Transition from "../../Transition/Transition";
import useTalented from './../../Api/useTalented';


const LeaderBoard = () => {

    const { talented, isFetching, rankedUsers } = useTalented();


   

   


    return (
      <div>
        <SectionHeading
          hasLogo
          margin={"10"}
          head={"leader board"}
        ></SectionHeading>
        <RankedContestants
          isFetching={isFetching}
          ranked={rankedUsers}
        ></RankedContestants>
        <RankTable isFetching={isFetching} ranked={rankedUsers}></RankTable>
        <Transition />
      </div>
    );
};

export default LeaderBoard;