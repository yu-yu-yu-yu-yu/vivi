import './App.css'
import Submissions from "./pages/submissions.tsx";
import Header from "./components/Header.tsx";
import Credits from "./pages/credits.tsx";
import {useState} from "react";

function App() {
  const [creditsOpen, setCreditsOpen] = useState(false)
  const toggleCredits = () => { setCreditsOpen(!creditsOpen)}

  return (
    <>
    creditsOpen
      ? <Credits openCredits={toggleCredits}/>
      : <>
        <Header openCredits={toggleCredits}/>
        <Submissions/>
        </>
    </>
  )
}

export default App
