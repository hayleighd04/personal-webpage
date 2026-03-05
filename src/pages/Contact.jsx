import styles from './Contact.module.css'

const contactLinks = [
  { emoji: '✉️', label: 'Email',    value: 'hayleigh.elizabeth04@gmail.com', href: 'mailto:hayleigh.elizabeth04@gmail.com', color: 'pink' },
  { emoji: '💼', label: 'LinkedIn', value: 'linkedin.com/in/hayleighd04',    href: 'https://linkedin.com/in/hayleighd04',    color: 'blue' },
  { emoji: '🐙', label: 'GitHub',   value: 'github.com/hayleighd04',         href: 'https://github.com/hayleighd04',         color: 'purple' },
  { emoji: '📞', label: 'Phone',    value: '984-222-5394',                   href: 'tel:9842225394',                         color: 'pink' },
]

const colorMap = { purple: 'var(--purple)', blue: 'var(--blue)', pink: 'var(--pink)' }

export default function Contact() {
  return (
    <div className="page">
      <div className="page-content">
        <div className="reveal">
          <p className="page-eyebrow">Let's Connect</p>
          <h1 className="page-title">Get In Touch</h1>
          <hr className="page-divider" />
        </div>

        <div className={styles.layout}>
          <div className={`${styles.intro} reveal`}>
            <p>
              I'm always happy to chat about research, design, engineering, or anything
              at the intersection of all three.
            </p>
            <p>
              Whether you're interested in collaboration, have a question, or just want
              to connect — feel free to reach out through any of these channels.
            </p>
          </div>

          <div className={styles.cards}>
            {contactLinks.map(({ emoji, label, value, href, color }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className={`${styles.contactCard} reveal`}
                style={{ '--c': colorMap[color] }}
              >
                <span className={styles.contactEmoji}>{emoji}</span>
                <div>
                  <div className={styles.contactLabel}>{label}</div>
                  <div className={styles.contactValue}>{value}</div>
                </div>
                <span className={styles.arrow}>→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
