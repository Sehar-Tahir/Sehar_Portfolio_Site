import { LuLayoutPanelLeft, LuWorkflow, LuCode2, LuZap } from 'react-icons/lu'
import SectionHeading from '../Common/SectionHeading'
import Reveal from '../Common/Reveal'
import { LuArrowUpRight } from 'react-icons/lu'

const pillars = [
  {
    tag: 'frontend',
    icon: LuLayoutPanelLeft,
    title: 'Web Development',
    desc: 'Responsive, high-performing interfaces built with React and Tailwind CSS from landing pages to full application UIs.',
    points: ['Component-based React apps', 'Responsive, mobile-first layouts', 'Performance & accessibility'],
  },
  {
    tag: 'automation',
    icon: LuWorkflow,
    title: 'GoHighLevel Automation',
    desc: 'CRM setup, funnel builds, and workflow automation inside GoHighLevel turning a static site into a system that runs itself.',
    points: ['Funnels & landing pages', 'Workflow & automation design', 'Calendar, forms & integrations'],
    link: 'https://sehar-portfolio.vibepreview.com'
  },
]

const Services = () => {
  return (
    <div id="Services" className="px-6 md:px-14 py-20 md:py-28 bg-paper-sunk dark:bg-base-surface transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          path="/what-i-do"
          title="Two disciplines, one system"
          subtitle="Most developers pick one lane. I do both the website development and the automation of systems tailored for each business."
        />

        <div className="grid md:grid-cols-2 gap-6 mt-14">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              // <Reveal key={pillar.title} delay={i * 120}>
              //   <div className="group relative h-full rounded-2xl border border-ink/10 dark:border-base-line
              //     bg-paper-card dark:bg-base-elevated p-8 md:p-10 hover:border-accent/40
              //     transition-all duration-300 hover:shadow-node-light dark:hover:shadow-node overflow-hidden">

              //     <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl
              //       group-hover:bg-accent/10 transition-colors duration-500" />

              //     <span className="eyebrow mb-6">/{pillar.tag}</span>

              //     <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6">
              //       <Icon size={22} />
              //     </div>

              //     <h3 className="font-display text-xl md:text-2xl font-semibold text-ink dark:text-mist">
              //       {pillar.title}
              //     </h3>
              //     <p className="mt-3 text-sm md:text-base leading-relaxed text-ink-muted dark:text-mist-muted">
              //       {pillar.desc}
              //     </p>

              //     <ul className="mt-6 space-y-2.5">
              //       {pillar.points.map((point) => (
              //         <li key={point} className="flex items-center gap-2.5 text-sm text-ink-muted dark:text-mist-muted">
              //           <LuZap size={13} className="text-signal shrink-0" />
              //           {point}
              //         </li>
              //       ))}

              //     </ul>



              //   </div>
              // </Reveal>
              <Reveal key={pillar.title} delay={i * 120}>
                <div className="group relative h-full rounded-2xl border border-ink/10 dark:border-base-line
    bg-paper-card dark:bg-base-elevated p-8 md:p-10 hover:border-accent/40
    transition-all duration-300 hover:shadow-node-light dark:hover:shadow-node overflow-hidden">

                  <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl
      group-hover:bg-accent/10 transition-colors duration-500" />

                  <span className="eyebrow mb-6">/{pillar.tag}</span>

                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                    <Icon size={22} />
                  </div>

                  <h3 className="font-display text-xl md:text-2xl font-semibold text-ink dark:text-mist">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm md:text-base leading-relaxed text-ink-muted dark:text-mist-muted">
                    {pillar.desc}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex items-center gap-2.5 text-sm text-ink-muted dark:text-mist-muted">
                        <LuZap size={13} className="text-signal shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {pillar.link && (
                    <a
                      href={pillar.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-6 text-sm font-medium text-accent dark:text-accent-soft
                  hover:text-accent-strong dark:hover:text-white transition-colors duration-200"
                    >
                      View GHL Portfolio <LuArrowUpRight size={15} />
                    </a>
                  )}

                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={260}>
          <div className="mt-6 rounded-2xl border border-dashed border-ink/15 dark:border-base-line
            px-6 py-5 flex items-center gap-3 text-xs md:text-sm font-mono text-ink-muted dark:text-mist-muted">
            <LuCode2 size={16} className="text-accent shrink-0" />
            Also comfortable moving between the two mid-project. Building the
            site for one business and the automation for the other.
            Managing multiple projects simultaneously and keeping them all on track is a skill I&#39;ve honed over the years.
          </div>
        </Reveal>
      </div>
    </div >
  )
}

export default Services
