import Navbar from "../../components/Navbar"
import Education from "./Education"
import HeroSection from "./HeroSection"
import TechStack from "./TechStack"

function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Education/>
      <TechStack/>
    </div>
  )
}

export default Home
