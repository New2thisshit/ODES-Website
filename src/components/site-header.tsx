"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { siteConfig } from "@/lib/site";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link href="/" className="brand" aria-label={`${siteConfig.name} home`}>
          <Image src="/images/logo.png" alt={siteConfig.name} width={150} height={46} priority />
        </Link>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setIsOpen((state) => !state)}
          aria-expanded={isOpen}
          aria-controls="main-navigation"
        >
          Menu
        </button>

        <nav id="main-navigation" className={`main-nav ${isOpen ? "open" : ""}`}>
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${active ? "active" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/contact" className="button button-primary nav-cta" onClick={() => setIsOpen(false)}>
            Let&apos;s Talk
          </Link>
        </nav>
      </div>
    </header>
  );
}
