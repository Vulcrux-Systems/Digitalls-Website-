'use client'

import { useEffect, useMemo, useState } from 'react'

type TeamSlide = {
  name: string
  title: string
  description: string
  imageUrl: string
  socials: { iconClass: string; url: string; label: string }[]
}

const slides: TeamSlide[] = [
  {
    name: 'Michael Chen',
    title: 'Senior Software Engineer, Cloud Infrastructure',
    description:
      'Working with this team completely changed our infrastructure game. The support and expertise were incredible. They delivered beyond our expectations and helped us scale to millions of users.',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=900&auto=format&fit=crop',
    socials: [
      { iconClass: 'bi bi-github', url: '#', label: 'GitHub' },
      { iconClass: 'bi bi-twitter', url: '#', label: 'Twitter' },
      { iconClass: 'bi bi-youtube', url: '#', label: 'YouTube' },
      { iconClass: 'bi bi-linkedin', url: '#', label: 'LinkedIn' }
    ]
  },
  {
    name: 'Jessica Roberts',
    title: 'Lead Data Scientist, InsightX',
    description:
      'The data analytics platform they built gave our team the confidence and tools needed for true data-driven decisions. Their dashboarding capabilities went above and beyond our expectations.',
    imageUrl:
      'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=900&q=80',
    socials: [
      { iconClass: 'bi bi-github', url: '#', label: 'GitHub' },
      { iconClass: 'bi bi-twitter', url: '#', label: 'Twitter' },
      { iconClass: 'bi bi-youtube', url: '#', label: 'YouTube' },
      { iconClass: 'bi bi-linkedin', url: '#', label: 'LinkedIn' }
    ]
  },
  {
    name: 'William Carter',
    title: 'VP Product, NovaLabs',
    description:
      'NovaLabs helped our products find the perfect market fit. Their engineering team exceeded every delivery milestone and provided exceptional technical leadership.',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=900&q=80',
    socials: [
      { iconClass: 'bi bi-github', url: '#', label: 'GitHub' },
      { iconClass: 'bi bi-twitter', url: '#', label: 'Twitter' },
      { iconClass: 'bi bi-youtube', url: '#', label: 'YouTube' },
      { iconClass: 'bi bi-linkedin', url: '#', label: 'LinkedIn' }
    ]
  }
]

export default function TeamCarousel() {
  const [index, setIndex] = useState(2)
  const activeSlide = useMemo(() => slides[index], [index])

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  const handlePrevious = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length)
  const handleNext = () => setIndex((prev) => (prev + 1) % slides.length)

  return (
    <section id="team" className="digitalls-team-section">
      <div className="digitalls-section-head">
        <div className="digitalls-kicker">Our Team</div>
        <h2>Led by Industry Experts</h2>
        <p>
          Dedicated professionals committed to digital excellence in government and legal
          technology.
        </p>
      </div>

      <div className="digitalls-team-stage">
        <div className="digitalls-team-image-wrap">
          <img
            key={activeSlide.imageUrl}
            src={activeSlide.imageUrl}
            alt={activeSlide.name}
            className="digitalls-fade-in"
          />
        </div>

        <article key={activeSlide.name} className="digitalls-team-info-card digitalls-fade-in">
          <h3>{activeSlide.name}</h3>
          <h4>{activeSlide.title}</h4>
          <p>{activeSlide.description}</p>

          <div className="digitalls-team-socials">
            {activeSlide.socials.map((social) => (
              <a key={social.label} href={social.url} aria-label={social.label}>
                <i className={social.iconClass} aria-hidden="true" />
              </a>
            ))}
          </div>
        </article>
      </div>

      <div className="digitalls-team-controls">
        <button type="button" onClick={handlePrevious} aria-label="Previous testimonial">
          <i className="bi bi-chevron-left" aria-hidden="true" />
        </button>

        <div className="digitalls-team-dots">
          {slides.map((slide, slideIndex) => (
            <button
              key={slide.name}
              type="button"
              onClick={() => setIndex(slideIndex)}
              className={slideIndex === index ? 'active' : ''}
              aria-label={`Go to ${slide.name}`}
            />
          ))}
        </div>

        <button type="button" onClick={handleNext} aria-label="Next testimonial">
          <i className="bi bi-chevron-right" aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}
