import CertificateCard from './CertificateCard'
import SectionHeading from '../Common/SectionHeading'
import Reveal from '../Common/Reveal'

const certificates = [
  {
    title: 'Introduction to Frontend Development',
    description: 'Fundamentals of frontend development how websites work, and the role of HTML, CSS, and JavaScript in building user interfaces.',
    platform: 'Coursera',
    url: 'https://coursera.org/share/fe2304603f2afb466c842ef9507312a3',
  },
  {
    title: 'Introduction to Backend Development',
    description: 'Fundamentals of backend development, backend architectures, and how backend systems support the frontend.',
    platform: 'Coursera',
    url: 'https://coursera.org/share/551dc4f9b12601c60d528ceb07099482',
  },
  {
    title: 'Programming with JavaScript',
    description: 'A strong foundation in JavaScript variables, functions, loops, DOM manipulation, and problem-solving.',
    platform: 'Coursera',
    url: 'https://coursera.org/share/386ed6838b7f848dccf56f1d38f1c90f',
  },
  {
    title: 'HTML & CSS in Depth',
    description: 'Hands-on experience building responsive layouts, modern UI designs, and well-structured web pages.',
    platform: 'Coursera',
    url: 'https://coursera.org/share/461550edee84913994b8a0f00f17c8f8',
  },
  {
    title: 'React Basics',
    description: 'Core React concepts components, props, state, JSX, and building dynamic, reusable interfaces.',
    platform: 'Coursera',
    url: 'https://coursera.org/share/398e5d08cf71e51957a287e3bb829bad',
  },
  {
    title: 'Version Control',
    description: 'Git and GitHub workflows repositories, commits, branches, and collaboration with version control.',
    platform: 'Coursera',
    url: 'https://coursera.org/share/2243ff530467314c05e05b708b740e64',
  },
]

const Certificates = () => {
  return (
    <div id="Certifications" className="px-6 md:px-14 py-20 md:py-28 bg-paper dark:bg-base transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <SectionHeading path="/certifications" title="Continued learning" />

        <div className="grid md:grid-cols-2 gap-4 mt-12">
          {certificates.map((cert, i) => (
            <Reveal key={cert.title} delay={(i % 2) * 100}>
              <CertificateCard
                title={cert.title}
                platform={cert.platform}
                description={cert.description}
                verifyUrl={cert.url}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Certificates
