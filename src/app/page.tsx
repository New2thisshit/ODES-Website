import Link from "next/link";

import { processSteps, serviceList, siteConfig, valuePillars } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-media" />
        <div className="container hero-grid">
          <div className="reveal">
            <p className="eyebrow">Human Capital Excellence</p>
            <h1>Build a High-Performing Workforce With Trusted HR Expertise</h1>
            <p className="hero-description">
              {siteConfig.name} helps organisations strengthen compliance, leadership, and talent outcomes through
              practical HR and skills solutions.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="button button-primary">
                Book a Consultation
              </Link>
              <Link href="/services" className="button button-secondary">
                View Services
              </Link>
            </div>
          </div>

          <aside className="hero-panel reveal">
            <p>Why organisations partner with us</p>
            <ul>
              <li>Established in {siteConfig.founded}</li>
              <li>Senior HR leadership experience</li>
              <li>Compliance-first delivery model</li>
              <li>Support across public and private sectors</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container metric-grid">
          <article className="metric-card reveal">
            <p className="metric">20+</p>
            <p>Years of HR experience in leadership and operations.</p>
          </article>
          <article className="metric-card reveal">
            <p className="metric">2</p>
            <p>Service regions in KwaZulu-Natal with growing reach.</p>
          </article>
          <article className="metric-card reveal">
            <p className="metric">4</p>
            <p>Core service pillars built for organisation-wide impact.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container section-head">
          <p className="eyebrow">Core Services</p>
          <h2>Integrated HR Solutions for Modern Organisations</h2>
        </div>
        <div className="container card-grid">
          {serviceList.map((service) => (
            <article key={service.title} className="service-card reveal">
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <ul className="clean-list">
                {service.outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container section-head">
          <p className="eyebrow">What Sets Us Apart</p>
          <h2>Built on Trust, Governance, and Measurable Outcomes</h2>
        </div>
        <div className="container chips reveal">
          {valuePillars.map((pillar) => (
            <span key={pillar} className="chip">
              {pillar}
            </span>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container section-head">
          <p className="eyebrow">How We Work</p>
          <h2>A Clear Engagement Journey</h2>
        </div>
        <div className="container timeline">
          {processSteps.map((step, index) => (
            <article key={step.title} className="timeline-item reveal">
              <span className="step">{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container cta-banner reveal">
          <h2>Ready to Improve HR Performance Across Your Organisation?</h2>
          <p>Let&apos;s discuss your goals and shape the right support for your workforce.</p>
          <Link href="/contact" className="button button-primary">
            Start the Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
