import { FaCss3, FaHtml5, FaReact, FaJs, FaGitAlt } from 'react-icons/fa'
import { DiBootstrap } from 'react-icons/di'
import { SiMui, SiVite, SiNodedotjs, SiMongodb, SiExpress, SiFigma } from 'react-icons/si'
import { LuWorkflow, LuCalendarClock, LuMail, LuPlug, LuFilter } from 'react-icons/lu'
import SectionHeading from '../Common/SectionHeading'
import Reveal from '../Common/Reveal'
import { LuArrowUpRight } from 'react-icons/lu'

const stack = [
  {
    tag: 'frontend',
    title: 'Frontend Development',
    note: 'Primary discipline',
    skills: [
      { name: 'React.js', Icon: FaReact },
      { name: 'JavaScript', Icon: FaJs },
      { name: 'Tailwind CSS', Icon: FaCss3 },
      { name: 'HTML5', Icon: FaHtml5 },
      { name: 'Bootstrap', Icon: DiBootstrap },
      { name: 'Material UI', Icon: SiMui },
    ],
  },
  {
    tag: 'automation',
    title: 'GoHighLevel & CRM',
    note: 'Automation discipline',
    skills: [
      { name: 'Workflow Design', Icon: LuWorkflow },
      { name: 'Funnel Building', Icon: LuFilter },
      { name: 'Calendars', Icon: LuCalendarClock },
      { name: 'Email/SMS Automation', Icon: LuMail },
      { name: 'Integrations', Icon: LuPlug },
    ],
    link: 'https://sehar-portfolio.vibepreview.com',
  },
  {
    tag: 'tools',
    title: 'Tools & Growing Stack',
    note: 'Full-stack in progress',
    skills: [
      { name: 'Git & GitHub', Icon: FaGitAlt },
      { name: 'Vite', Icon: SiVite },
      { name: 'Node.js', Icon: SiNodedotjs },
      { name: 'Express', Icon: SiExpress },
      { name: 'MongoDB', Icon: SiMongodb },
      { name: 'Figma', Icon: SiFigma },
    ],
  },
]

const Skills = () => {
  return (
    <div id="Skills" className="px-6 md:px-14 py-20 md:py-28 bg-paper dark:bg-base transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          path="/skills"
          title="The stack, grouped like a workflow"
          subtitle="Organized the way I actually use them one channel for what's on screen, one for what runs behind it."
        />

        <div className="mt-16 relative">
          {/* connecting spine across channels on desktop */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {stack.map((channel, i) => (
              <Reveal key={channel.title} delay={i * 120}>
                <div className="relative">
                  {/* node dot on the spine */}
                  <div className="hidden md:flex justify-center mb-6">
                    <span className="w-3 h-3 rounded-full bg-base dark:bg-base border-2 border-accent relative z-10" />
                  </div>

                  <div className="rounded-2xl border border-ink/10 dark:border-base-line bg-paper-card dark:bg-base-elevated
                    p-6 md:p-7 h-full hover:border-accent/40 transition-all duration-300">
                    <span className="eyebrow">/{channel.tag}</span>
                    <h3 className="font-display text-lg font-semibold mt-3 text-ink dark:text-mist">
                      {channel.title}
                    </h3>
                    <p className="text-xs font-mono text-signal mt-1 mb-6">{channel.note}</p>

                    <div className="flex flex-col gap-1">
                      {channel.skills.map(({ name, Icon }) => (
                        <div
                          key={name}
                          className="flex items-center gap-3 py-2.5 border-t border-ink/5 dark:border-white/5 first:border-t-0
                          text-sm text-ink-muted dark:text-mist-muted hover:text-accent dark:hover:text-accent-soft transition-colors duration-200"
                        >
                          <Icon size={16} className="shrink-0 text-accent/70" />
                          {name}
                        </div>
                      ))}
                    </div>
                    {channel.link && (
                      <a
                        href={channel.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-4 pt-2 border-t border-ink/5 dark:border-white/5
                        text-sm font-medium text-accent dark:text-accent-soft
                        hover:text-accent-strong dark:hover:text-white transition-colors duration-200"
                      >
                        View GHL Portfolio <LuArrowUpRight size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
