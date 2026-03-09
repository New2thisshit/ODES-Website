import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { leaderProfile, siteConfig, valuePillars } from "@/lib/site";

export const metadata: Metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <>
      <div className="container">
        <PageHero
          eyebrow="About ODES"
          title="Experienced HR Leadership, Grounded in Partnership"
          description="We support organisations with practical, compliant, and people-centered HR solutions that improve workforce performance."
        />
      </div>

      <section className="section">
        <div className="container split">
          <article className="panel reveal">
            <p className="eyebrow">Our Story</p>
            <h2>Founded in {siteConfig.founded}, Built for Long-Term Impact</h2>
            <p>
              {siteConfig.name} (formerly ODES) was created to deliver reliable human resource services to
              organisations that want both compliance and performance.
            </p>
            <p>
              Our model combines strategic advisory with practical implementation so teams can execute confidently and
              sustainably.
            </p>
          </article>

          <article className="panel dark reveal">
            <p className="eyebrow">Vision and Mission</p>
            <h3>Vision</h3>
            <p>To be the preferred provider of human resource solutions.</p>
            <h3>Mission</h3>
            <p>
              To continuously deliver timeous, high-impact services through practical collaboration that advances
              organisational effectiveness.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container section-head">
          <p className="eyebrow">Strategic Pillars</p>
          <h2>What Drives Our Delivery</h2>
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
        <div className="container leader-card reveal">
          <div className="leader-avatar" aria-hidden="true">
            {leaderProfile.name
              .split(" ")
              .map((name) => name[0])
              .slice(0, 2)
              .join("")}
          </div>

          <div>
            <p className="eyebrow">Leadership</p>
            <h2>{leaderProfile.name}</h2>
            <p className="leader-role">{leaderProfile.role}</p>
            <p>{leaderProfile.bio}</p>
            <ul className="clean-list">
              {leaderProfile.credentials.map((credential) => (
                <li key={credential}>{credential}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container section-head">
          <p className="eyebrow">Regional Presence</p>
          <h2>Serving KwaZulu-Natal Organisations</h2>
        </div>
        <div className="container card-grid">
          {siteConfig.locations.map((location) => (
            <article key={location.city} className="service-card reveal">
              <h3>{location.city}</h3>
              <p>{location.type}</p>
              <p>{location.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
