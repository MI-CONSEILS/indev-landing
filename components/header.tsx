"use client";

import { useEffect, useRef, useState } from "react";
import { Arrow, Logo } from "@/components/site";
import { MAILTO } from "@/lib/brand";

const links = [
  ["EXPERTISES", "/#expertises"],
  ["PROJETS", "/#projets"],
  ["MÉTHODE", "/#methode"],
  ["AGENCE", "/#agence"],
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const progress = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // ponytail: scaleX + hauteur mise en cache — pas de layout par frame
    let max = document.documentElement.scrollHeight - window.innerHeight;
    const measure = () => { max = document.documentElement.scrollHeight - window.innerHeight; };
    let raf = 0;
    const update = () => {
      raf = 0;
      setScrolled(window.scrollY > 36);
      if (progress.current) {
        progress.current.style.transform = `scaleX(${max > 0 ? Math.min(window.scrollY / max, 1) : 0})`;
      }
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <div className="scroll-progress" aria-hidden="true"><span ref={progress} /></div>
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
          <a className="contact-link" href={MAILTO}>CONTACT</a>
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
