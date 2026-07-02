import SectionHeading from '../Common/SectionHeading'
import Reveal from '../Common/Reveal'

const experience = [
  {
    role: 'Associate Web Developer',
    org: 'Directorate of IT, Islamia University of Bahawalpur (IUB)',
    period: '24 April 2026 - 24 June 2026',
    desc: 'Redesigned the IUB Affiliation Portal over a 2-month engagement, rebuilding the multi-page site with modern, responsive layouts and an improved educational aesthetic using HTML, CSS, and Tailwind CSS. Implemented smooth animations and ensured consistency across pages while working directly under mentor guidance to meet university-specific design requirements.',
    current: true,
  },
  {
    role: 'Advanced Web Development Trainee',
    org: 'NAVTTC',
    period: 'March 2025 - June 2025',
    desc: "Completed hands-on training under the Prime Minister's Skills Development Program in frontend (HTML, CSS, Bootstrap, JavaScript) and backend (PHP, Laravel). Worked on practical web projects, strengthening full-stack development skills and professional coding practices.",
  },
  {
    role: 'React & Next.js Fellowship',
    org: 'Bytewise Limited',
    period: 'June 2024 - September 2024',
    highlight: 'Awarded Top Performer of the Month',
    desc: 'Hands-on experience and a strong foundation in modern frontend development building responsive, reusable UIs with React, and clean, accessible designs with Material UI and Tailwind CSS. Strengthened component-based architecture and frontend best practices.',
  },
  {
    role: 'Web Dev Internship',
    org: 'Code Alpha',
    period: 'April 2024',
    desc: 'Remote internship developing web applications with HTML, CSS, and JavaScript. Worked on multiple real-world projects, integrating APIs and building interactive user interfaces following best development practices.',
  },
]

const Experience = () => {
  return (
    <div id="Experience" className="px-6 md:px-14 py-20 md:py-28 bg-paper dark:bg-base transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <SectionHeading path="/experience" title="Where I've worked" />

        <div className="relative mt-16">
          {/* timeline spine — legitimate here since entries are strictly chronological */}
          <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent" />

          <div className="flex flex-col gap-12">
            {experience.map((item, i) => (
              <Reveal key={item.role + item.org} delay={i * 100}>
                <div className="relative pl-8 md:pl-10">
                  <span
                    className={`absolute left-0 top-1.5 w-[15px] h-[15px] md:w-[19px] md:h-[19px] rounded-full border-2 ${
                      item.current
                        ? 'bg-signal border-signal shadow-[0_0_0_4px_rgba(79,224,196,0.15)]'
                        : 'bg-paper dark:bg-base border-accent'
                    }`}
                  />

                  <p className="font-mono text-xs text-ink-muted dark:text-mist-muted mb-1.5">
                    {item.period}
                    {item.current && (
                      <span className="ml-2 text-signal">● current</span>
                    )}
                  </p>
                  <h3 className="font-display text-lg md:text-xl font-semibold text-ink dark:text-mist">
                    {item.role}
                  </h3>
                  <p className="text-sm text-accent dark:text-accent-soft mt-0.5">{item.org}</p>

                  {item.highlight && (
                    <p className="text-xs font-mono text-signal mt-2">★ {item.highlight}</p>
                  )}

                  <p className="text-sm leading-relaxed text-ink-muted dark:text-mist-muted mt-3">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
