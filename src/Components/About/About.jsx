import Profile_icon from '../../assets/profile.jpg'
import SectionHeading from '../Common/SectionHeading'
import Reveal from '../Common/Reveal'

const stats = [
  { value: '35+', label: 'Projects shipped' },
  { value: '3+', label: 'Years of experience' },
  { value: '10+', label: 'Happy clients' },

]

const About = () => {
  return (
    <div id="About" className="px-6 md:px-14 py-20 md:py-28 bg-paper dark:bg-base transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <SectionHeading path="/about" title="Who I am" />

        <div className="mt-12 grid md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-16 items-start">
          <Reveal delay={100}>
            <div className="relative w-full max-w-sm mx-auto md:mx-0">
              <div className="absolute -inset-3 rounded-3xl border border-accent/20 dark:border-accent/25 -z-10" />
              <img
                className="rounded-2xl w-full aspect-[4/5] object-cover shadow-node-light dark:shadow-node"
                src={Profile_icon}
                alt="Sehar Tahir"
              />
            </div>
          </Reveal>

          <Reveal delay={180}>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink dark:text-mist">
              I build the front end you see, and the automation behind systems that
              actually runs the business.
            </h3>

            <div className="mt-6 space-y-4 text-sm md:text-base leading-relaxed text-ink-muted dark:text-mist-muted">
              <p>
                I&#39;m Sehar Tahir, a web developer working across two
                disciplines that most developers keep separate: frontend
                engineering with React and Tailwind CSS, and CRM/automation
                development inside GoHighLevel.
              </p>
              <p>
                On the frontend side, I care about the details that make an
                interface feel considered spacing, motion, responsiveness,
                load time. On the automation side, I design the workflows,
                funnels, and integrations that turn a website into a working
                system for a business.
              </p>
              <p>
                Currently expanding into full-stack development with the MERN
                stack, and building{' '}
                <span className="text-accent dark:text-accent-soft font-medium">
                  UniHirex
                </span>
                , a university recruitment platform, as my final year project.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-ink/10 dark:border-base-line">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl md:text-4xl font-semibold text-accent dark:text-accent-soft">
                    {stat.value}
                  </p>
                  <p className="text-xs md:text-sm mt-1 text-ink-muted dark:text-mist-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}

export default About
