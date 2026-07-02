import { LuGraduationCap } from 'react-icons/lu'
import SectionHeading from '../Common/SectionHeading'
import Reveal from '../Common/Reveal'

const education = [
  {
    degree: 'BS Information Technology',
    org: 'Islamia University of Bahawalpur (IUB)',
    semester: '8th Semester (Final Year)',
    desc: "Currently pursuing a Bachelor's degree in Information Technology, focusing on web development, software engineering, and database management. Gained practical experience through coursework and projects, enhancing problem-solving skills and technical proficiency. Currently building UniHirex, a recruitment platform for students to get jobs and internships as my final year project.",
    current: true,
  },
]

const Education = () => {
  return (
    <div id="Education" className="px-6 md:px-14 py-20 md:py-28 bg-paper-sunk dark:bg-base-surface transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <SectionHeading path="/education" title="Academic background" />
      

        <div className="mt-12 flex flex-col gap-5">
          {education.map((item) => (
            <Reveal key={item.degree}>
              <div className="flex flex-col md:flex-row gap-5 md:gap-8 rounded-2xl border border-ink/10 dark:border-base-line
                bg-paper-card dark:bg-base-elevated p-7 md:p-8 hover:border-accent/40 transition-all duration-300">

                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <LuGraduationCap size={22} />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-lg md:text-xl font-semibold text-ink dark:text-mist">
                      {item.degree}
                    </h3>
                    {item.current && (
                      <>
                      
                      <span className="font-mono text-[12px] uppercase tracking-wide px-2.5 py-1 rounded-full
                        bg-signal/10 text-signal border border-signal/20" >
                       3.87/4.0 GPA
                      </span>
                      </>
                    )}
                  </div>
                  <p className="text-sm text-accent dark:text-accent-soft mt-1">{item.org}</p>
                  <p className="font-mono text-xs text-ink-muted dark:text-mist-muted mt-1">{item.semester}</p>
                  <span className="font-mono text-[10px] uppercase tracking-wide px-2.5 py-1 rounded-full
                        bg-signal/10 text-signal border border-signal/20">
                        in progress
                      </span>
                  <p className="text-sm leading-relaxed text-ink-muted dark:text-mist-muted mt-3">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Education
