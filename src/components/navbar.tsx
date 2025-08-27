import CreditsButton from "./creditsButton.tsx";

const navbar = ({openCredits}: { openCredits: () => void }) => {
  return <div
    style={{display: "flex", justifyContent: "space-between", position: "relative", top: "10px", left: "-10px"}}>

    <CreditsButton toggleCredits={openCredits}/>

    <div>
      <a href="https://discord.gg/EnfdYJG26B">
        <img src="discord.png" height={40} alt="discord link"/>
      </a>
      <a href="https://x.com/vivifanserver">
        <img src="twitter.png" height={40} alt="twitter link"/>
      </a>
    </div>

  </div>
}
export default navbar