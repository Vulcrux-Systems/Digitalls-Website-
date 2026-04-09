type Service = {
  title: string
  description: string
  iconClass: string
}

const services: Service[] = [
  {
    title: 'ERP Solutions',
    description:
      'Comprehensive enterprise resource planning systems for seamless organizational management.',
    iconClass: 'bi bi-database'
  },
  {
    title: 'RTI eFiling Systems',
    description: 'Digital Right to Information filing platforms with secure document management.',
    iconClass: 'bi bi-file-earmark-text'
  },
  {
    title: 'eNotary Solutions',
    description: 'Secure digital notarization and authentication services for legal documents.',
    iconClass: 'bi bi-vector-pen'
  },
  {
    title: 'eOffice Systems',
    description: 'Modern digital office management platforms for government institutions.',
    iconClass: 'bi bi-building'
  },
  {
    title: 'HRMS Systems',
    description: 'Human Resource Management Systems with advanced analytics and compliance tools.',
    iconClass: 'bi bi-people'
  },
  {
    title: 'Roster Management',
    description: 'Intelligent roster and scheduling systems for government and judicial operations.',
    iconClass: 'bi bi-list-check'
  },
  {
    title: 'Cause List Management',
    description: 'Specialized case management systems for courts and judicial bodies.',
    iconClass: 'bi bi-bank'
  },
  {
    title: 'Court Websites & Apps',
    description: 'High Court and Supreme Court digital presence with citizen services.',
    iconClass: 'bi bi-globe'
  },
  {
    title: 'Lokpal/Lok Adalat Systems',
    description: 'Systems for Public Grievance Redressal and Alternative Dispute Resolution.',
    iconClass: 'bi bi-shield-check'
  },
  {
    title: 'Custom Government Software',
    description: 'Tailored solutions for specific government agency requirements and workflows.',
    iconClass: 'bi bi-code-slash'
  }
]

const topRow = services.slice(0, 5)
const bottomRow = services.slice(5)

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="digitalls-service-card">
      <div className="digitalls-service-icon">
        <i className={service.iconClass} aria-hidden="true" />
      </div>

      <h3>{service.title}</h3>
      <p>{service.description}</p>

      <a href="/services">
        Learn more <i className="bi bi-arrow-right" aria-hidden="true" />
      </a>
    </article>
  )
}

function MarqueeRow({ servicesList, reverse = false }: { servicesList: Service[]; reverse?: boolean }) {
  const rendered = [...servicesList, ...servicesList]

  return (
    <div className="digitalls-marquee-row">
      <div className={`digitalls-marquee-track${reverse ? ' reverse' : ''}`}>
        {rendered.map((service, index) => (
          <ServiceCard key={`${service.title}-${index}`} service={service} />
        ))}
      </div>
    </div>
  )
}

export default function SolutionsMarquee() {
  return (
    <section id="services" className="digitalls-solutions-section">
      <div className="digitalls-section-head">
        <div className="digitalls-kicker">Our Solutions</div>
        <h2>Enterprise Solutions for Digital Transformation</h2>
        <p>
          Comprehensive suite of government-grade technology solutions designed for legal and
          administrative excellence.
        </p>
      </div>

      <div className="digitalls-marquee-shell">
        <MarqueeRow servicesList={topRow} />
        <MarqueeRow servicesList={bottomRow} reverse />
      </div>

      <div className="digitalls-marquee-fade left" />
      <div className="digitalls-marquee-fade right" />
    </section>
  )
}
