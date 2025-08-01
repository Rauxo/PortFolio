import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import Achievement from "./Achievement"
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
      <Achievement/>
      <Footer/>
    </div>
  )
}

export default Home
