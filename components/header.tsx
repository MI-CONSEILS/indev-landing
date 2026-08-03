"use client";

import { useEffect, useState } from "react";
import { Arrow, Logo } from "@/components/site";

const links = [
  ["EXPERTISES", "/#expertises"],
  ["PROJETS", "/#projets"],
  ["MÉTHODE", "/#methode"],
  ["AGENCE", "/#agence"],
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > window.innerHeight * 0.78);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className={`header ${scrolled ? "header-light" : ""}`}>
      <div className="header-inner shell">
        <Logo />
        <nav className="desktop-nav" aria-label="Navigation principale">
          {links.map(([label, href], index) => (
            <span key={href}>
              <a href={href}>{label}</a>
              {index < links.length - 1 && <i aria-hidden="true">·</i>}
            </span>
          ))}
        </nav>
        <div className="header-actions">
          <a className="contact-link" href="mailto:contact@indevtech.dev">CONTACT</a>
          <button
            type="button"
            className="menu-button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span /><span />
          </button>
        </div>
      </div>
      <nav className={`mobile-nav ${open ? "mobile-nav-open" : ""}`} aria-label="Navigation mobile">
        {links.map(([label, href]) => (
          <a href={href} key={href} onClick={() => setOpen(false)}>{label}<Arrow /></a>
        ))}
      </nav>
    </header>
  );
}
