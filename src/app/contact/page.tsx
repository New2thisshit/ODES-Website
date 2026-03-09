import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact"
};

export default function ContactPage() {
  const mapAddress = `${siteConfig.address.line1}, ${siteConfig.address.city}, ${siteConfig.address.country}`.replace(
    /\s/g,
    "+"
  );

  return (
    <>
      <div className="container">
        <PageHero
          eyebrow="Contact"
          title="Start a Conversation With Our Team"
          description="Tell us about your HR priorities and we will help you identify the right way forward."
        />
      </div>

      <section className="section">
        <div className="container split">
          <article className="panel reveal">
            <p className="eyebrow">Reach Us</p>
            <h2>Contact Details</h2>
            <p>
              {siteConfig.address.line1}
              <br />
              {siteConfig.address.line2}
              <br />
              {siteConfig.address.city}, {siteConfig.address.postalCode}
            </p>
            <p>
              Phone: <a href={siteConfig.phoneLink}>{siteConfig.phoneDisplay}</a>
            </p>
            <p>
              Email: <a href={`mailto:${siteConfig.emailPrimary}`}>{siteConfig.emailPrimary}</a>
              <br />
              Email: <a href={`mailto:${siteConfig.emailSecondary}`}>{siteConfig.emailSecondary}</a>
            </p>
            <p>Office Hours: Monday to Friday, 08:00 to 17:00</p>
          </article>

          <article className="panel reveal">
            <p className="eyebrow">Send a Message</p>
            <h2>We&apos;ll Get Back to You Promptly</h2>
            <form className="contact-form">
              <label htmlFor="name">Full Name</label>
              <input id="name" name="name" type="text" placeholder="Your name" required />

              <label htmlFor="company">Company</label>
              <input id="company" name="company" type="text" placeholder="Your organisation" />

              <label htmlFor="email">Email Address</label>
              <input id="email" name="email" type="email" placeholder="you@company.com" required />

              <label htmlFor="phone">Phone Number</label>
              <input id="phone" name="phone" type="tel" placeholder="Your contact number" />

              <label htmlFor="service">Service Interest</label>
              <select id="service" name="service" defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                <option value="hr-consulting">HR Consulting</option>
                <option value="training-skills">Training and Skills Development</option>
                <option value="recruitment">Recruitment Solutions</option>
                <option value="employee-wellness">Employee Wellness</option>
                <option value="other">Other</option>
              </select>

              <label htmlFor="message">How can we help?</label>
              <textarea id="message" name="message" rows={5} placeholder="Share your goals and requirements" required />

              <button type="submit" className="button button-primary">
                Submit Enquiry
              </button>
            </form>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container map-frame reveal">
          <iframe
            title="Odirilejwang Enterprise office location"
            src={`https://www.google.com/maps?q=${mapAddress}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
