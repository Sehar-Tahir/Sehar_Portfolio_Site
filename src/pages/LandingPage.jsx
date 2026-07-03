import About from "../components/About/About"
import Home from "../components/Home/Home"
import Navbar from "../components/Navbar/Navbar"
import Services from "../components/Services/Services"
import Skills from "../components/Skills/Skills"
import Projects from "../components/Projects/Projects"
import Footer from "../components/Footer/Footer"
import Experience from "../components/Experience/Experience"
import Education from "../components/Education/Education"
import Certificates from "../components/Certifications/Certificates"

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