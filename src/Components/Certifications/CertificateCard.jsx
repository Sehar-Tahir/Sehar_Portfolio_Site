import { LuArrowUpRight, LuBadgeCheck } from 'react-icons/lu'
import PropTypes from 'prop-types'

const CertificateCard = ({ title, description, verifyUrl, platform }) => {
  return (
    <div className="group flex items-start gap-4 rounded-xl border border-ink/10 dark:border-base-line
      bg-paper-card dark:bg-base-elevated p-5 md:p-6 hover:border-accent/40 transition-all duration-300">

      <span className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5">
        <LuBadgeCheck size={18} />
      </span>

      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-display text-base font-semibold text-ink dark:text-mist">{title}</h3>
          <span className="font-mono text-[10px] uppercase tracking-wide text-ink-muted dark:text-mist-muted shrink-0">
            {platform}
          </span>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-ink-muted dark:text-mist-muted">
          {description}
        </p>

        {verifyUrl && (
          <a
            href={verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-3 text-xs font-medium text-accent dark:text-accent-soft
            group-hover:text-accent-strong dark:group-hover:text-white transition-colors duration-200"
          >
            Verify certificate <LuArrowUpRight size={13} />
          </a>
        )}
      </div>
    </div>
  )
}

CertificateCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  verifyUrl: PropTypes.string,
  platform: PropTypes.string.isRequired,
}

export default CertificateCard
