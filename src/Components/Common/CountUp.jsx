import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'


// Animates a number from 0 to target when it scrolls into view.
// Splits things like "25+" into number part (25) and suffix ("+")
// so the suffix stays static while the number counts up.
const CountUp = ({ value, duration = 1400, className = '' }) => {
  const match = value.match(/^(\d+)(.*)$/)
  const target = match ? parseInt(match[1], 10) : 0
  const suffix = match ? match[2] : ''

  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()

          const step = (now) => {
            const progress = Math.min((now - startTime) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
            setCount(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
          observer.unobserve(node)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  )
}

CountUp.propTypes = {
  value: PropTypes.string.isRequired,
  duration: PropTypes.number,
  className: PropTypes.string,
}

export default CountUp