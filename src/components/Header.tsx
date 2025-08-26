import "./header.css"
import CreditsButton from "./creditsButton.tsx";
const Header = ({openCredits} : {openCredits: () => void}) => {
  return (
    <div>
      <div style={{display: "flex", justifyContent: "space-between", marginLeft:"-10px"}}>

          <CreditsButton toggleCredits={openCredits}/>

        <div >
          <a href="https://discord.gg/EnfdYJG26B">
            <img src="discord.png" height={40} alt="discord link"/>
          </a>
          <a href="https://x.com/vivifanserver">
            <img src="twitter.png" height={40} alt="twitter link"/>
          </a>
        </div>

      </div>
      <div className={'header'}>
        <h1>Happy Birthday Vivi!</h1>
        <h1>誕生日おめでとうヴィヴィたん！</h1>
      </div>
    </div>
  )
}

export default Header