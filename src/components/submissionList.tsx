 import type {TSubmission} from "../models/TSubmission.ts";
import Submission from "./submission.tsx";
import "./SubmissionList.css"


const SubmissionList = ({data}: {data: TSubmission[]}) => {
  return (<div className="submissionList">
    {data.map((submission: TSubmission) => <Submission key={submission.name} item={submission}/>)}
  </div>)
}
export default SubmissionList