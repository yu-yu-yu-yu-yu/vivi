import type {TSubmission} from "../models/TSubmission.ts";
import Submission from "./submission.tsx";
import "./SubmissionList.css"
import Masonry from "react-responsive-masonry";


const SubmissionList = ({data}: {data: TSubmission[]}) => {
  return (
    <Masonry sequential={true} columnsCount={3} gutter={".5rem"}>
  {data.slice(1).map((submission: TSubmission) => <Submission key={submission.name} item={submission}/>)}
  </Masonry>)
}
export default SubmissionList