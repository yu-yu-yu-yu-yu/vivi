import type {TSubmission} from "../models/TSubmission.ts";
import "./submission.css"

const IMG_PATH = `user/`

const customSubmission =  ({item}: {item:TSubmission}) => {
  const {name, image, message} = item

return  <div className="submission customSubmission">
    <span className={"submissionName"}>{name}</span>
    <div style={{display: "flex", justifyContent: "space-between", flexDirection: "row", alignItems: "center", gap:"1em"}}>
      {image && <img src={IMG_PATH+image} alt={`${name} submission`}  height={300} className="submissionImage"></img>}
      {message &&<span>{message}</span>}
    </div>
  </div>
}

export default customSubmission;