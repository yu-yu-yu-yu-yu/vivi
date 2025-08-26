import type {TSubmission} from "../models/TSubmission.ts";
import "./submission.css"

const IMG_PATH = `user/`

const Submission = ({item}: {item:TSubmission}) => {
  const {name, image, message} = item
  return (<div className={"submission"}>
    <span className={"submissionName"}>{name}</span>
    {image && <img src={IMG_PATH+image} alt={`${name} submission`}  height={400} className="submissionImage"></img>}
    {message &&<span>{message}</span>}
  </div>)
}
export default Submission