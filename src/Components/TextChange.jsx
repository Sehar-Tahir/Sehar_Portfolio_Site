import { useState, useEffect } from 'react'

const roles = ['Web Developer', 'GoHighLevel Specialist', 'React Engineer', 'Automation Builder']

const TextChange = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [charCount, setCharCount] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    const speed = deleting ? 35 : 65
    const pauseAtFull = 1600
    const pauseAtEmpty = 300

    const timeout = setTimeout(() => {
      if (!deleting && charCount === current.length) {
        setTimeout(() => setDeleting(true), pauseAtFull)
        return
      }
      if (deleting && charCount === 0) {
        setDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
        return
      }
      setCharCount((prev) => prev + (deleting ? -1 : 1))
    }, deleting && charCount === 0 ? pauseAtEmpty : speed)

    return () => clearTimeout(timeout)
  }, [charCount, deleting, roleIndex])

  return (
    <span className="text-accent dark:text-accent-soft">
      {roles[roleIndex].substring(0, charCount)}
      <span className="inline-block w-[3px] h-[0.9em] bg-accent ml-1 align-middle animate-pulse" />
    </span>
  )
}

export default TextChange
