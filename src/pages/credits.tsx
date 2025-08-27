import "./credits.css"
import Disclaimer from "../components/disclaimer.tsx";
const credits = () => {
  return <div className="creditsPage" >
    <div style={{}}> <h1 >CREDITS</h1></div>
    <h3>Thank you to...</h3>

    <div>
      <b>Project Director</b> - <a href="https://x.com/yumihoshio">ゆみ</a><br/>
      <b>Programmer</b> - yuyu<br/>
      <b>Translator</b> - vonPeterhof, kana_, salixor, <a href="https://x.com/NikskiChef">nikski</a>,<br/>
      <b>Project Moderator</b> - <a href="https://x.com/NikskiChef">nikski</a>, <a href="https://www.twitter.com/holowiggly">wiggly</a>, <a href="https://x.com/Minihornet">minihornet</a><br/>

      <b>Image Background - </b><a href="https://x.com/kikiraravivi/status/1854370054529577351/photo/1"> https://x.com/kikiraravivi/</a><br/>
    </div>

    <Disclaimer />
  </div>
}
export default credits