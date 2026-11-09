"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#projects" },
  { label: "Original theme", href: "https://shashikathi.netlify.app/", external: true },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="floating-header">
      <div className="floating-header-inner">
        <Link href="#hero" className="brand-link" aria-label="Shashi Kathi, home" onClick={() => setMenuOpen(false)}>
          <span className="brand-monogram" aria-hidden="true">SK</span>
          <span>Shashi Kathi</span>
        </Link>

        <nav className="desktop-navigation" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noreferrer" : undefined} className="navigation-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="#contact" className="header-contact">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </Link>

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile-navigation${menuOpen ? " is-open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {navigation.map((item) => (
          <Link key={item.href} href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noreferrer" : undefined} className="navigation-link" onClick={() => setMenuOpen(false)}>
            {item.label}
          </Link>
        ))}
        <Link href="#contact" className="mobile-contact-link" onClick={() => setMenuOpen(false)}>
          Contact me <span aria-hidden="true">↗</span>
        </Link>
      </nav>
    </header>
  );
}
