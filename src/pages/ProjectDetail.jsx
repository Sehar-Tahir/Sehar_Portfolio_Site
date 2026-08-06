import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { LuArrowLeft, LuArrowUpRight, LuGithub } from 'react-icons/lu'
import { projects, getRole  } from '../data/projects'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Reveal from '../Components/Common/Reveal'

const ProjectDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = projects.find((p) => p.slug === slug)

  const index = projects.findIndex((p) => p.slug === slug)
  const nextProject = projects[(index + 1) % projects.length]
  const prevProject = projects[(index - 1 + projects.length) % projects.length]

  useEffect(() => {
    window.scrollTo(0, 0)
    if (project) document.title = `${project.title} — Sehar Tahir`
    return () => { document.title = 'Sehar Tahir — Web Developer & GHL Automation Specialist' }
  }, [project])

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-6">
        <p className="font-mono text-sm text-ink-muted dark:text-mist-muted">Project not found.</p>
        <button
          onClick={() => navigate('/#Projects')}
          className="text-accent dark:text-accent-soft text-sm font-medium"
        >
          ← Back to work
        </button>
      </div>
    )
  }

  return (
    <>
      <Navbar />

      <div className="px-6 md:px-14 pt-32 pb-20 md:pb-28 bg-paper dark:bg-base transition-colors duration-300">
        <div className="max-w-4xl mx-auto">

          <Reveal>
            <Link
              to="/#Projects"
              className="inline-flex items-center gap-2 font-mono text-xs text-ink-muted dark:text-mist-muted
              hover:text-accent dark:hover:text-accent-soft transition-colors duration-200"
            >
              <LuArrowLeft size={14} /> Back to work
            </Link>
          </Reveal>

          <Reveal delay={80}>
            <span className="eyebrow mt-8 mb-3">/{project.category.toLowerCase().replace(' ', '-')} </span>
            <h1 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-ink dark:text-mist">
              {project.title}
            </h1>
            <p className="mt-4 text-base md:text-lg text-ink-muted dark:text-mist-muted max-w-2xl">
              {project.oneLiner}
            </p>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-10 rounded-2xl overflow-hidden border border-ink/10 dark:border-base-line
              bg-paper-sunk dark:bg-base-surface">
              <img src={project.imgsrc} alt={project.title} className="w-full object-contain" />
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-accent text-white font-medium text-sm
                hover:bg-accent-strong transition-all duration-200 shadow-glowSm"
              >
                Visit Live Site <LuArrowUpRight size={15} />
              </a>
              {project.git && (
                <a
                  href={project.git}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-full border border-ink/15 dark:border-base-line
                  text-ink dark:text-mist font-medium text-sm hover:border-accent hover:text-accent transition-all duration-200"
                >
                  <LuGithub size={15} /> View Code
                </a>
              )}
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-10 mt-16">
            <Reveal className="md:col-span-2 flex flex-col gap-8">
              <div>
                <p className="eyebrow mb-3">/problem</p>
                <p className="text-sm md:text-base leading-relaxed text-ink-muted dark:text-mist-muted">{project.problem}</p>
              </div>
              <div>
                <p className="eyebrow mb-3">/approach</p>
                <p className="text-sm md:text-base leading-relaxed text-ink-muted dark:text-mist-muted">{project.approach}</p>
              </div>
              <div>
                <p className="eyebrow mb-3">/result</p>
                <p className="text-sm md:text-base leading-relaxed text-ink-muted dark:text-mist-muted">{project.result}</p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-2xl border border-ink/10 dark:border-base-line bg-paper-card dark:bg-base-elevated p-6">
  <p className="eyebrow mb-4">/details</p>
  <p className="text-xs font-mono text-ink-muted dark:text-mist-muted mb-1">Role</p>
  <p className="text-sm text-ink dark:text-mist mb-4">{getRole(project)}</p>
  <p className="text-xs font-mono text-ink-muted dark:text-mist-muted mb-1">Category</p>
  <p className="text-sm text-ink dark:text-mist mb-4">{project.category}</p>
  <p className="text-xs font-mono text-ink-muted dark:text-mist-muted mb-1">Tech Stack</p>
  <p className="text-sm text-ink dark:text-mist">{project.tec}</p>
</div>
            </Reveal>
          </div>

          {project.gallery && project.gallery.length > 0 && (
            <Reveal delay={120}>
              <p className="eyebrow mt-16 mb-5">/gallery</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.gallery.map((img, i) => (
                  <div key={i} className="rounded-xl overflow-hidden border border-ink/10 dark:border-base-line bg-paper-sunk dark:bg-base-surface">
                    <img src={img} alt={`${project.title} screenshot ${i + 1}`} className="w-full object-contain" />
                  </div>
                ))}
              </div>
            </Reveal>
          )}


          <Reveal delay={200}>
  <div className="grid grid-cols-2 gap-4 mt-12 pt-8 border-t border-ink/10 dark:border-base-line">
    <Link
      to={`/project/${prevProject.slug}`}
      className="group flex items-center gap-3"
    >
      <LuArrowLeft size={20} className="text-accent shrink-0 group-hover:-translate-x-1 transition-transform duration-200" />
      <div>
        <p className="font-mono text-xs text-ink-muted dark:text-mist-muted">Previous</p>
        <p className="font-display text-sm md:text-base font-semibold text-ink dark:text-mist mt-0.5
          group-hover:text-accent dark:group-hover:text-accent-soft transition-colors duration-200">
          {prevProject.title}
        </p>
      </div>
    </Link>

    <Link
      to={`/project/${nextProject.slug}`}
      className="group flex items-center justify-end gap-3 text-right"
    >
      <div>
        <p className="font-mono text-xs text-ink-muted dark:text-mist-muted">Next</p>
        <p className="font-display text-sm md:text-base font-semibold text-ink dark:text-mist mt-0.5
          group-hover:text-accent dark:group-hover:text-accent-soft transition-colors duration-200">
          {nextProject.title}
        </p>
      </div>
      <LuArrowUpRight size={20} className="text-accent shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
    </Link>
  </div>
</Reveal>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default ProjectDetail