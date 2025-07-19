import Navbar from "../../components/Navbar"
import Education from "./Education"
import HeroSection from "./HeroSection"
import Projects from "./Projects"
import TechStack from "./TechStack"

function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Education/>
      <TechStack/>
      <Projects/>
    </div>
  )
}

export default Home
