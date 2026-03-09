import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Image src="/images/logo.png" alt={siteConfig.name} width={170} height={54} />
          <p className="footer-copy">
            {siteConfig.ownership}
            <br />
            Established {siteConfig.founded}
          </p>
        </div>

        <div>
          <h3>Explore</h3>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div>
          <h3>Contact</h3>
          <a href={siteConfig.phoneLink}>{siteConfig.phoneDisplay}</a>
          <a href={`mailto:${siteConfig.emailPrimary}`}>{siteConfig.emailPrimary}</a>
          <p className="footer-copy">
            {siteConfig.address.line1}
            <br />
            {siteConfig.address.line2}, {siteConfig.address.city} {siteConfig.address.postalCode}
          </p>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>&copy; {year} {siteConfig.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
