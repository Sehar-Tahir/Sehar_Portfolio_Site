import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

// Lightweight scroll-reveal wrapper. No animation library dependency —
// just an IntersectionObserver flipping a class, respecting reduced-motion via CSS.
const Reveal = ({ children, delay = 0, className = '', as: Tag = 'div' }) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  )
}

Reveal.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
  className: PropTypes.string,
  as: PropTypes.elementType,
}

export default Reveal
