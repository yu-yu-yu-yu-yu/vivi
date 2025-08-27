import "./credits.css"
import CreditsButton from "../components/creditsButton.tsx";
const credits = ({openCredits}: {openCredits: () => void}) => {
  return <div className="creditsPage" >
    <div style={{    position: "absolute",
      top: "5px",
      left: "5px"}}>
      <CreditsButton toggleCredits={openCredits}/>
    </div>
    <div style={{}}> <h1 >CREDITS</h1></div>
    <h3>Thank you to...</h3>

    <div>
      <b>Project Director</b> - <a href="https://x.com/yumihoshio">ゆみ</a><br/>
      <b>Programmer</b> - yuyu<br/>
      <b>Translator</b> - vonPeterhof, kana_, salixor, <a href="https://x.com/NikskiChef">nikski</a>,<br/>
      <b>Project Moderator</b> - <a href="https://x.com/NikskiChef">nikski</a>, <a href="https://www.twitter.com/holowiggly">wiggly</a>, <a href="https://x.com/Minihornet">minihornet</a><br/>
    </div>

    <div>
    <h3>extra credits</h3><br/>
     <a href="https://x.com/kikiraravivi/status/1854370054529577351/photo/1">Image Background</a><br/>
    </div>
  </div>
}
export default credits