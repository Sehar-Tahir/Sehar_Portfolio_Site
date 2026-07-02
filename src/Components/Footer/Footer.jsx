import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { LuLinkedin, LuGithub, LuMail, LuSend } from 'react-icons/lu'
import { TbBrandFiverr } from 'react-icons/tb'
import { FaSquareUpwork } from 'react-icons/fa6'
import SectionHeading from '../Common/SectionHeading'
import Reveal from '../Common/Reveal'

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sehartahir', Icon: LuLinkedin },
  { label: 'GitHub', href: 'https://github.com/Sehar-Tahir', Icon: LuGithub },
  { label: 'Fiverr', href: 'http://fiverr.com/sehartahir_', Icon: TbBrandFiverr },
  { label: 'Upwork', href: 'https://www.upwork.com/freelancers/~01b04a5637e0dac34a', Icon: FaSquareUpwork },
]

const Footer = () => {
  const form = useRef()
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const sendEmail = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(
        () => {
          setStatus('sent')
          form.current.reset()
        },
        () => setStatus('error')
      )
  }

  return (
    <>
      <div id="Contact" className="px-6 md:px-14 py-20 md:py-28 bg-paper-sunk dark:bg-base-surface transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            path="/contact"
            title="Let's build something"
            subtitle="Have a project that needs a frontend, or an automation? Send a message, I usually reply within a day."
          />

          <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-16 mt-14">
            <Reveal>
              <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your name"
                  autoComplete="off"
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-paper-card dark:bg-base-elevated text-ink dark:text-mist text-sm
                  border border-ink/10 dark:border-base-line focus:outline-none focus:border-accent transition placeholder:text-ink-muted/60 dark:placeholder:text-mist-muted/60"
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your email"
                  autoComplete="off"
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-paper-card dark:bg-base-elevated text-ink dark:text-mist text-sm
                  border border-ink/10 dark:border-base-line focus:outline-none focus:border-accent transition placeholder:text-ink-muted/60 dark:placeholder:text-mist-muted/60"
                />
                <textarea
                  name="message"
                  rows={5}
                  placeholder="What are you building?"
                  autoComplete="off"
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-paper-card dark:bg-base-elevated text-ink dark:text-mist text-sm
                  border border-ink/10 dark:border-base-line focus:outline-none focus:border-accent transition resize-none placeholder:text-ink-muted/60 dark:placeholder:text-mist-muted/60"
                />

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="flex items-center justify-center gap-2 mt-2 w-full sm:w-fit px-6 py-3.5 rounded-full
                  bg-accent text-white font-medium text-sm hover:bg-accent-strong transition-all duration-200
                  shadow-glowSm disabled:opacity-60"
                >
                  {status === 'sending' ? 'Sending…' : 'Send message'} <LuSend size={15} />
                </button>

                {status === 'sent' && (
                  <p className="text-sm text-signal font-mono">Message sent. Thank you! I&#39;ll get back to you soon.</p>
                )}
                {status === 'error' && (
                  <p className="text-sm text-red-400 font-mono">Something went wrong. Try emailing me directly instead.</p>
                )}
              </form>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-2xl border border-ink/10 dark:border-base-line bg-paper-card dark:bg-base-elevated p-8 h-full">
                <p className="eyebrow mb-6">/reach-me</p>

                <a
                  href="mailto:sehartahirofficial@gmail.com"
                  className="flex items-center gap-3 text-sm font-medium text-ink dark:text-mist hover:text-accent dark:hover:text-accent-soft transition-colors"
                >
                  <LuMail size={17} className="text-accent" />
                  sehartahirofficial@gmail.com
                </a>

                <div className="mt-8 pt-8 border-t border-ink/10 dark:border-base-line flex flex-col gap-3">
                  {socials.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm font-medium text-ink-muted dark:text-mist-muted
                      hover:text-accent dark:hover:text-accent-soft transition-colors duration-200"
                    >
                      <Icon size={17} />
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-14 py-6 text-center bg-paper dark:bg-base border-t border-ink/10 dark:border-base-line">
        <p className="font-mono text-xs text-ink-muted dark:text-mist-muted">
          ©{new Date().getFullYear()} Sehar Tahir. All rights reserved. Built with &hearts; by ST.
        </p>
      </div>
    </>
  )
}

export default Footer
