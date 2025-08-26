import SubmissionList from "../components/submissionList.tsx";
import submissions from "../assets/csvjson.json"
import CustomSubmission from "../components/customSubmission.tsx";

const Submissions = () => {
  //TODO filters and stuff?
  return (<>
    <CustomSubmission item={submissions[0]}></CustomSubmission>
    <SubmissionList data={submissions} />
  </>)
}

export default Submissions