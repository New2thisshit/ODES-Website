import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { processSteps, serviceList } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services"
};

export default function ServicesPage() {
  return (
    <>
      <div className="container">
        <PageHero
          eyebrow="Our Services"
          title="Comprehensive HR and Talent Support"
          description="From strategic advisory to operational execution, our services help organisations improve compliance, capability, and workforce outcomes."
        />
      </div>

      <section className="section">
        <div className="container card-grid">
          {serviceList.map((service) => (
            <article key={service.title} className="service-card reveal">
              <h2>{service.title}</h2>
              <p>{service.summary}</p>
              <ul className="clean-list">
                {service.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <article className="panel reveal">
            <p className="eyebrow">Support Areas</p>
            <h3>Where We Add Value</h3>
            <ul className="clean-list">
              <li>Employment equity planning and advisory</li>
              <li>HR policy development and alignment</li>
              <li>Workplace skills planning and audits</li>
              <li>Talent sourcing and candidate assessment</li>
              <li>Employee wellbeing programme support</li>
            </ul>
          </article>

          <article className="panel reveal">
            <p className="eyebrow">Approach</p>
            <h3>Designed for Practical Implementation</h3>
            <p>
              Every engagement is tailored to your organisation&apos;s context, maturity, and strategic direction. We
              prioritize clear ownership, measurable progress, and long-term sustainability.
            </p>
            <Link href="/contact" className="button button-secondary">
              Discuss Your Requirements
            </Link>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container section-head">
          <p className="eyebrow">Delivery Framework</p>
          <h2>Structured, Collaborative, Outcome-Focused</h2>
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
    </>
  );
}
