import About from "../Components/About/About"
import Home from "../Components/Home/Home"
import Navbar from "../Components/Navbar/Navbar"
import Services from "../Components/Services/Services"
import Skills from "../Components/Skills/Skills"
import Projects from "../Components/Projects/Projects"
import Footer from "../Components/Footer/Footer"
import Experience from "../Components/Experience/Experience"
import Education from "../Components/Education/Education"
import Certificates from "../Components/Certifications/Certificates"

const LandingPage = () => {
  return (
    <div className="bg-paper dark:bg-base text-ink dark:text-mist transition-colors duration-300">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certificates />
      <Footer />
    </div>
  )
}

export default LandingPage