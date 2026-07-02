import { LuArrowUpRight, LuGithub } from 'react-icons/lu'
import PropTypes from 'prop-types'

const ProjectCard = ({ title, tec, imgsrc, demo, git, type, desc }) => {
  return (
    <div className="group relative flex flex-col w-full rounded-2xl overflow-hidden
      border border-ink/10 dark:border-base-line bg-paper-card dark:bg-base-elevated
      hover:border-accent/40 hover:shadow-node-light dark:hover:shadow-node
      transition-all duration-300">

      <div className="relative overflow-hidden aspect-[16/10]">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={imgsrc}
          alt={`${title} preview`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base/70 via-transparent to-transparent opacity-0
          group-hover:opacity-100 transition-opacity duration-300" />
        <span className="absolute top-3 left-3 font-mono text-[10px] tracking-wide uppercase px-2.5 py-1 rounded-full
          bg-base/70 text-mist backdrop-blur-sm border border-white/10">
          {type}
        </span>
      </div>

      <div className="p-5 md:p-6 flex flex-col flex-1">
        <h3 className="font-display text-lg md:text-xl font-semibold text-ink dark:text-mist">
          {title}
        </h3>

        <p className="font-mono text-[11px] text-accent dark:text-accent-soft mt-2">
          {tec}
        </p>

        <p className="text-sm leading-relaxed text-ink-muted dark:text-mist-muted mt-3 flex-1">
          {desc}
        </p>

        <div className="flex items-center gap-3 mt-5 pt-4 border-t border-ink/10 dark:border-base-line">
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-accent dark:text-accent-soft
            hover:text-accent-strong dark:hover:text-white transition-colors duration-200"
          >
            Live demo <LuArrowUpRight size={15} />
          </a>

          {git && (
            <a
              href={git}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-ink-muted dark:text-mist-muted
              hover:text-ink dark:hover:text-mist transition-colors duration-200 ml-auto"
            >
              <LuGithub size={15} /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  tec: PropTypes.string.isRequired,
  imgsrc: PropTypes.string.isRequired,
  demo: PropTypes.string.isRequired,
  git: PropTypes.string,
  type: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
}

export default ProjectCard
