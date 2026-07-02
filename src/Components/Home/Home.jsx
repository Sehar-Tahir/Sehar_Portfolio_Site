import TextChange from '../TextChange'
import { BiDownload } from 'react-icons/bi'
import { LuArrowUpRight } from 'react-icons/lu'
import Reveal from '../Common/Reveal'

const stages = ['Design', 'Build', 'Automate', 'Ship']

const Home = () => {
  return (
    <div
      id="Home"
      className="relative w-full overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-14
      bg-paper dark:bg-base transition-colors duration-300"
    >
      {/* Blueprint dot/grid backdrop */}
      <div className="absolute inset-0 bg-blueprint-light dark:bg-blueprint [background-size:44px_44px] pointer-events-none
        [mask-image:radial-gradient(ellipse_60%_55%_at_50%_20%,black,transparent)]" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-[1.2fr_1fr] gap-16 items-center">
        {/* Left — headline */}
        <div>
          <Reveal>
            <span className="eyebrow mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
              Available for Freelance &amp; Remote work.
            </span>
          </Reveal>

          <Reveal delay={80}>
            {/* <h1 className="font-display text-4xl md:text-5xl font-semibold leading-[1.08] tracking-tight text-ink dark:text-mist">
              Sehar Tahir builds interfaces 
              <br className="hidden md:block" /> and the systems behind them.
            </h1> */}
            <h1 className="font-display text-4xl md:text-5xl font-semibold leading-[1.08] tracking-tight text-ink dark:text-mist">
              Sehar Tahir builds interfaces and the systems behind them.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-6 font-mono text-lg md:text-xl h-8">
              <span className="text-ink-muted dark:text-mist-muted">&gt; </span>
              <TextChange />
            </div>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-6 text-sm md:text-base leading-relaxed text-ink-muted dark:text-mist-muted max-w-lg">
              I design and ship clean React interfaces, and the CRM
              automations, funnels, and workflows that run systems. Based
              in Bahawalpur, Pakistan working remotely with teams everywhere.
            </p>
          </Reveal>

          <Reveal delay={280}>
            <div className="flex flex-wrap gap-4 mt-9">
              <a href="Sehar_Tahir_Resume.pdf" download="Sehar_Tahir_Resume.pdf">
                <button className="flex items-center gap-2 px-5 py-3 rounded-full bg-accent text-white font-medium text-sm
                  hover:bg-accent-strong hover:scale-[1.03] transition-all duration-200 shadow-glowSm">
                  Download Resume <BiDownload />
                </button>
              </a>
              <a href="#Contact">
                <button className="flex items-center gap-2 px-5 py-3 rounded-full border border-ink/15 dark:border-base-line
                  text-ink dark:text-mist font-medium text-sm hover:border-accent hover:text-accent transition-all duration-200">
                  Hire Me <LuArrowUpRight />
                </button>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right — signature workflow graphic */}
        <Reveal delay={200} className="hidden md:block">
          <div className="relative rounded-3xl border border-ink/10 dark:border-base-line
            bg-paper-card/60 dark:bg-base-elevated/50 backdrop-blur-sm p-8 shadow-node-light dark:shadow-node">
            <p className="eyebrow mb-8">/workflow</p>
            <div className="flex flex-col gap-0">
              {stages.map((stage, i) => (
                <div key={stage} className="flex items-center gap-4">
                  <div className="flex flex-col items-center">
                    <span
                      className={`w-3 h-3 rounded-full border-2 ${
                        i === stages.length - 1
                          ? 'bg-signal border-signal'
                          : 'bg-transparent border-accent'
                      }`}
                    />
                    {i < stages.length - 1 && (
                      <span className="w-px h-12 bg-gradient-to-b from-accent/60 to-accent/10" />
                    )}
                  </div>
                  <span
                    className={`font-mono text-sm pb-12 ${
                      i === stages.length - 1
                        ? 'text-signal font-medium'
                        : 'text-ink-muted dark:text-mist-muted'
                    }`}
                    style={{ paddingBottom: i < stages.length - 1 ? '3rem' : 0 }}
                  >
                    {stage}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs text-ink-muted dark:text-mist-muted leading-relaxed border-t border-ink/10 dark:border-base-line pt-5">
              Every project moves through the same pipeline whether it&#39;s a
              React frontend or a GHL automation.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default Home
