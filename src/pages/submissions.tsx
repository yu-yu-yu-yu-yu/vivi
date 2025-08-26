import SubmissionList from "../components/submissionList.tsx";
import submissions from "../assets/csvjson.json"

const Submissions = () => {
  //TODO filters and stuff?
  return (<>
    <SubmissionList data={submissions} />
  </>)
}

export default Submissions