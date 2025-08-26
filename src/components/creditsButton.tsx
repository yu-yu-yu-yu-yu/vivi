import "./creditsButton.css"

const creditsButton= ({toggleCredits}: {toggleCredits: () => void}) => {
  return (
    <div className="creditsButton" onClick={toggleCredits}>
      CREDITS
    </div>
  )

}
export default creditsButton