import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LuArrowUpRight } from 'react-icons/lu'
import ProjectCard from './ProjectCard'
import { projects, categories } from '../../data/projects'
import SectionHeading from '../Common/SectionHeading'
import Reveal from '../Common/Reveal'

const Projects = () => {
  const [activeTab, setActiveTab] = useState('Full Stack')

  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  const filtered = activeTab === 'All'
    ? rest
    : rest.filter((p) => p.category === activeTab)

  const tabs = ['All', ...categories]

  return (
    <div id="Projects" className="px-6 md:px-14 py-20 md:py-28 bg-paper-sunk dark:bg-base-surface transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          path="/work"
          title="Selected work"
          subtitle="A mix of full-stack builds, client work, and personal projects spanning React apps, MERN apps, GHL(GoHighLevel) and no-code automation."
        />

        {featured && (
          <Reveal delay={60}>
            <Link
              to={`/project/${featured.slug}`}
              className="group grid md:grid-cols-2 gap-0 mt-10 rounded-2xl overflow-hidden border border-accent/30
              bg-paper-card dark:bg-base-elevated hover:border-accent/60 transition-all duration-300 hover:shadow-node-light dark:hover:shadow-node"
            >
              <div className="relative aspect-[16/10] md:aspect-auto bg-paper-sunk dark:bg-base-surface flex items-center justify-center overflow-hidden">
                <img
                  src={featured.imgsrc}
                  alt={featured.title}
                  className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span className="font-mono text-[10px] uppercase tracking-wide px-2.5 py-1 rounded-full bg-signal/10 text-signal border border-signal/20 w-fit mb-4">
                  Featured
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink dark:text-mist">
                  {featured.title}
                </h3>
                <p className="text-sm md:text-base text-ink-muted dark:text-mist-muted mt-3">
                  {featured.oneLiner}
                </p>
                <span className="inline-flex items-center gap-1.5 mt-6 text-sm font-medium text-accent dark:text-accent-soft
                  group-hover:text-accent-strong dark:group-hover:text-white transition-colors duration-200">
                  View Case Study <LuArrowUpRight size={15} />
                </span>
              </div>
            </Link>
          </Reveal>
        )}

        <div className="flex flex-wrap gap-2 mt-10">
          {tabs.map((tab) => {
            const count = tab === 'All' ? rest.length : rest.filter((p) => p.category === tab).length
            const isActive = activeTab === tab
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-mono text-xs px-4 py-2 rounded-full border transition-all duration-200 ${
                  isActive
                    ? 'bg-accent text-white border-accent'
                    : 'border-ink/10 dark:border-base-line text-ink-muted dark:text-mist-muted hover:border-accent/40 hover:text-accent dark:hover:text-accent-soft'
                }`}
              >
                {tab} <span className="opacity-70">({count})</span>
              </button>
            )
          })}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {filtered.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 100}>
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-sm text-ink-muted dark:text-mist-muted mt-10 font-mono">
            No projects in this category yet.
          </p>
        )}
      </div>
    </div>
  )
}

export default Projects