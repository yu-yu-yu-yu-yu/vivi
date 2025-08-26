import type {TSubmission} from "../models/TSubmission.ts";
import Submission from "./submission.tsx";
import "./submissionList.css"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";


const SubmissionList = ({data}: {data: TSubmission[]}) => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 800: 2, 1200: 3}} >
      <Masonry>
  {data.slice(1).map((submission: TSubmission) => <Submission key={submission.name} item={submission}/>)}
      </Masonry>
  </ResponsiveMasonry>)
}
export default SubmissionList