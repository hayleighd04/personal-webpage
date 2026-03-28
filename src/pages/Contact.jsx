import styles from './Contact.module.css'

const contactLinks = [
  {
    emoji: '✉️',
    label: 'Email',
    value: 'hayleigh.elizabeth04@gmail.com',
    href: 'mailto:hayleigh.elizabeth04@gmail.com',
    color: 'purple',
  },
  {
    emoji: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/hayleighd04',
    href: 'https://www.linkedin.com/in/hayleighd04/',
    color: 'purple',
  },
  {
    emoji: '🐙',
    label: 'GitHub',
    value: 'Contact for access',
    href: null,
    color: 'purple',
    note: 'Reach out via email or LinkedIn to request access',
  },
  {
    emoji: '📞',
    label: 'Phone',
    value: '(984) 222-5394',
    href: 'tel:9842225394',
    color: 'purple',
  },
]

const colorMap = {
  purple: 'rgba(144,0,179,0.8)',
  blue:   'rgba(100,149,237,0.8)',
  pink:   'rgba(244,114,182,0.8)',
}

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
              I'm always happy to chat about UX, human factors, product management,
              or anything at the intersection of technology and people.
            </p>
            <p>
              Whether you're interested in collaboration, have a question, or just want
              to connect — feel free to reach out through any of these channels.
            </p>
          </div>

          <div className={styles.cards}>
            {contactLinks.map(({ emoji, label, value, href, color, note }) => {
              const Wrapper = href ? 'a' : 'div'
              const wrapperProps = href
                ? {
                    href,
                    target: href.startsWith('http') ? '_blank' : undefined,
                    rel: 'noreferrer',
                  }
                : {}

              return (
                <Wrapper
                  key={label}
                  {...wrapperProps}
                  className={`${styles.contactCard} ${!href ? styles.contactCardStatic : ''} reveal`}
                  style={{ '--c': colorMap[color] }}
                >
                  <span className={styles.contactEmoji}>{emoji}</span>
                  <div className={styles.contactInfo}>
                    <div className={styles.contactLabel}>{label}</div>
                    <div className={styles.contactValue}>{value}</div>
                    {note && <div className={styles.contactNote}>{note}</div>}
                  </div>
                  {href && <span className={styles.arrow}>→</span>}
                </Wrapper>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}