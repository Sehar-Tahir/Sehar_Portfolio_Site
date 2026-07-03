import ProjectCard from './ProjectCard'
import Project2 from '../../assets/Project2.png'
import Project3 from '../../assets/Project3.png'
import Project5 from '../../assets/Project5.png'
import Project6 from '../../assets/Project6.png'
import Project7 from '../../assets/Project7.png'
import Portfolio from '../../assets/Portfolio.png'
import Amazon from '../../assets/Amazon.png'
import CreamyFun from '../../assets/CreamyFun.png'
import Spotify from '../../assets/Spotify.png'
import Auth from '../../assets/Auth.png'
import Weather from '../../assets/Weather.png'
import Task from '../../assets/Task.png'
import Form from '../../assets/Form.png'
import Password from '../../assets/Password.png'
import chatbot from '../../assets/chatbot.png'
import EasyDo from '../../assets/EasyDo.png'
import KW from '../../assets/KW.png'
import BC from '../../assets/BossCredit.png'
import PS from '../../assets/portfolioSite.png'
import SectionHeading from '../Common/SectionHeading'
import Reveal from '../Common/Reveal'

const projects = [
  { title: 'Karachi Weather', imgsrc: KW, type: 'Client Project', tec: 'MERN [Mongodb, Express, React, Node]', desc: 'A real-time weather application built with the MERN stack, delivering live forecasts through a clean, responsive interface with a custom-designed hero section and dynamic weather-based theming.', git: 'https://github.com/Sehar-Tahir/KarachiWeather', demo: 'karachiweather.com' },
  { title: 'Boss Credit', imgsrc: BC, type: 'Client Project', tec: 'GHL - GoHighLevel', desc: 'A GoHighLevel website redesign for a credit services client, refreshing the layout, structure, and visual design of the existing site for a cleaner, more modern presentation.', git: 'https://sites.leadconnectorhq.com/preview/3qeXvAXJBlpgBnaB2us9', demo: 'https://sites.leadconnectorhq.com/preview/3qeXvAXJBlpgBnaB2us9' },
  { title: 'Personal Portfolio', imgsrc: PS, type: 'Portfolio Project', tec: 'React, Tailwind CSS Email.js, Chatbot', desc: 'A complete redesign of my personal portfolio with a new violet-accented, route-style section labels, and a workflow-inspired signature layout reflecting my dual identity as a web developer and GHL automation specialist.', git: 'https://github.com/Sehar-Tahir/Sehar_Portfolio_Site', demo: 'https://sehar-portfolio-site.vercel.app/' },
  { title: 'ChatBOT', imgsrc: chatbot, type: 'Client Project', tec: 'No Code Integration', desc: 'A client project where a no-code chatbot solution was integrated into a web application for automated user interaction.', git: 'https://drive.google.com/file/d/19oS3s1n63m9uC42ZnRiWRtgE_AOLlypQ/view?usp=drivesdk', demo: 'https://drive.google.com/file/d/19oS3s1n63m9uC42ZnRiWRtgE_AOLlypQ/view?usp=drivesdk' },
  { title: 'Nexcent', imgsrc: Project2, type: 'Fellowship Project', tec: 'React Js, Tailwind Css', desc: 'A professional company landing page designed with a clean structure, clear content flow, and a modern layout to represent a strong digital brand presence.', git: 'https://github.com/Sehar-Tahir/Nexcent-REACT_Landing_Page', demo: 'https://nexcent-react-landing-page.vercel.app/' },
  { title: 'Initial Portfolio', imgsrc: Portfolio, type: 'Portfolio Project', tec: 'React, Email.js, Chatbot', desc: 'A personal portfolio website created to showcase my projects, journey, and growth while reflecting my design style and professional identity.', git: 'https://github.com/Sehar-Tahir/Sehar_Portfolio', demo: 'https://sehar-portfolio.vercel.app/' },
  { title: 'Web Dev Site', imgsrc: Project5, type: 'Fellowship Project', tec: 'React Js, Material UI', desc: 'A community-focused platform concept designed to connect developers, encourage collaboration, and create a shared space for learning and growth.', git: 'https://github.com/Sehar-Tahir/Web_Dev_Site', demo: 'https://web-dev-site-ten.vercel.app/' },
  { title: 'Weather Now', imgsrc: Weather, type: 'Internship Project', tec: 'Html, CSS, Javascript', desc: 'A dynamic weather application that presents real-time weather information in a clear, structured, and user-friendly format.', git: 'https://github.com/Sehar-Tahir/WeatherNOW', demo: 'https://weather-now-steel.vercel.app/' }, { title: 'UniGradeBook', imgsrc: Project7, type: 'Task Project', tec: 'React Js, Tailwind Css', desc: 'A student-centered platform that helps users explore and select professors based on preferences, improving academic decision-making.', git: 'https://github.com/Sehar-Tahir/UniGradebook', demo: 'https://uni-gradebook.vercel.app/' },
  { title: 'Tailwind Project', imgsrc: Project3, type: 'Fellowship Project', tec: 'Html, CSS, Tailwind Css', desc: 'A responsive landing page built with well-organized sections, consistent spacing, and a minimal design approach for a smooth user experience.', git: 'https://github.com/Sehar-Tahir/Responsive_Landing_Page-TailwindCss', demo: 'https://responsive-landing-page-tailwind-css.vercel.app/' },
  { title: 'Bootstrap Project', imgsrc: Project6, type: 'Fellowship Project', tec: 'Html, CSS, Bootstrap', desc: 'A structured landing page focused on clean alignment, responsive layout, and balanced visual presentation for a professional look.', demo: 'https://responsive-landing-page-alpha.vercel.app/' },
  { title: 'Amazon Clone', imgsrc: Amazon, type: 'Personal Project', tec: 'Html, CSS', desc: 'A detailed e-commerce homepage replica designed to mirror market place layouts with organized product sections and navigation flow.', git: 'https://github.com/Sehar-Tahir/Amazon-Clone', demo: 'https://amazon-clone-five-ashy.vercel.app/' },
  { title: 'Shopify Clone', imgsrc: Spotify, type: 'Personal Project', tec: 'Html, CSS', desc: 'A music streaming platform replica designed with structured playlists, organized media sections, and a clean interface inspired by modern audio applications.', git: 'https://github.com/Sehar-Tahir/Spotify-Clone', demo: 'https://spotify-clone-bay-chi.vercel.app/' },
  { title: 'Creamy Fun', imgsrc: CreamyFun, type: 'Task Project', tec: 'Html, CSS', desc: 'A visually engaging website concept created with attractive sections, playful structure, and an easy-to-navigate layout.', git: 'https://github.com/Sehar-Tahir/Creamy_Fun', demo: 'https://creamy-fun.vercel.app/' },
  { title: 'MERN Auth Frontend', imgsrc: Auth, type: 'Personal Project', tec: 'MERN Frontend', desc: 'A user authentication interface designed to provide a smooth registration and login experience with clear interaction flow.', git: 'https://github.com/Sehar-Tahir/MERN-Auth/tree/main/frontend', demo: 'https://mern-auth-frontend-ecru.vercel.app/' },
  { title: 'MERN Auth Backend', imgsrc: Auth, type: 'Personal Project', tec: 'MERN Backend', desc: 'A secure authentication system developed to manage user access, validation processes, and protected data handling.', git: 'https://github.com/Sehar-Tahir/MERN-Auth/tree/main/backend', demo: 'https://mern-auth-backend-navy.vercel.app/' },
  { title: 'Task Tracker', imgsrc: Task, type: 'Fellowship Project', tec: 'Html, CSS, Js, React', desc: 'A productivity-driven application designed to help users organize, manage, and track daily tasks efficiently.', git: 'https://github.com/Sehar-Tahir/Task_Tracker', demo: 'https://task-tracker-ebon-eight.vercel.app/' },
  { title: 'Registration Form', imgsrc: Form, type: 'Task Project', tec: 'Html, CSS, Js', desc: 'A structured and user-friendly form designed with validation features to ensure accurate and secure data submission.', git: 'https://github.com/Sehar-Tahir/Registration-Form', demo: 'https://registration-form-two-sand.vercel.app/' },
  { title: 'Password Generator', imgsrc: Password, type: 'Personal Project', tec: 'Html, CSS, Javascript, React', desc: 'An interactive utility tool created to generate strong and customizable passwords for improved digital security.', git: 'https://github.com/Sehar-Tahir/Password-Generator', demo: 'https://password-generator-inky-eta.vercel.app/' },
  { title: 'EasyDo', imgsrc: EasyDo, type: 'Fellowship Project', tec: 'Html, CSS, Javascript, React', desc: 'A task management application built to simplify daily planning and improve productivity through organized task handling.', git: 'https://github.com/Sehar-Tahir/EasyDo', demo: 'https://easy-do.vercel.app/' },

]

const Projects = () => {
  return (
    <div id="Projects" className="px-6 md:px-14 py-20 md:py-28 bg-paper-sunk dark:bg-base-surface transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          path="/work"
          title="Selected work"
          subtitle="A mix of Client work, fellowship builds, and personal projects spanning React apps, Tailwind sites, no-code integrations and GHL automation."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {projects.map((project, i) => (
            <Reveal key={project.title + i} delay={(i % 3) * 100}>
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
