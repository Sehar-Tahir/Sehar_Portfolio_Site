import PropTypes from 'prop-types'
import Reveal from './Reveal'

// Route-style eyebrow ("/about", "/work") ties section labels to Sehar's
// identity as a developer — file-path style tags rather than generic numbering.
const SectionHeading = ({ path, title, subtitle, align = 'left' }) => {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <Reveal className={`flex flex-col ${alignment} max-w-2xl`}>
      <span className="eyebrow mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
        {path}
      </span>
      <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-ink dark:text-mist">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-ink-muted dark:text-mist-muted text-sm md:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}

SectionHeading.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center']),
}

export default SectionHeading
