import './App.css'
import Submissions from "./pages/submissions.tsx";
import Header from "./components/Header.tsx";
import Credits from "./pages/credits.tsx";
import {useState} from "react";
import Navbar from "./components/navbar.tsx";

function App() {
  const [creditsOpen, setCreditsOpen] = useState(false)
  const toggleCredits = () => { setCreditsOpen(!creditsOpen)}

  return (
    <>
      <Navbar openCredits={toggleCredits}/>
      {
        creditsOpen
        ? <Credits />
        : <>
          <Header />
          <Submissions/>
          </>
      }
    </>
  )
}

export default App
