import Link from "next/link";
import type { Project } from "@/lib/projects";

export function Logo() {
  return (
    <Link href="/" className="logo" aria-label="In-Dev, accueil">
      in<span className="logo-mark">·</span>dev
    </Link>
  );
}

export function Arrow() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M5 15 15 5M7 5h8v8" />
    </svg>
  );
}

export function Mockup({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <div className={`mockup ${compact ? "mockup-compact" : ""}`} aria-label={`Emplacement du mockup ${project.name}`}>
      <div className="mockup-window">
        <div className="mockup-bar">
          <span />
          <span />
          <span />
          <b>{project.name}</b>
        </div>
        <div className="mockup-screen">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={project.shot} alt={`Aperçu du site ${project.name}`} loading="lazy" />
        </div>
      </div>
    </div>
  );
}

function CtaArtwork() {
  return (
    <div className="cta-artwork" aria-hidden="true">
      {Array.from({ length: 9 }, (_, index) => <span key={index} />)}
    </div>
  );
}

export function Footer() {
  return (
    <>
      <section className="cta-section" id="contact">
        <div className="cta-banner shell">
          <CtaArtwork />
          <div className="cta-copy">
            <h2>Une idée forte à mettre en ligne&nbsp;?</h2>
            <a className="cta-button" href="mailto:contact@indevtech.dev">
              Parler du projet <Arrow />
            </a>
          </div>
          <div className="cta-socials" aria-label="Réseaux sociaux">
            <a href="#" aria-label="LinkedIn In-Dev"><span aria-hidden="true">in</span> LinkedIn</a>
            <a href="#" aria-label="Instagram In-Dev"><span aria-hidden="true">◎</span> Instagram</a>
            <a href="#" aria-label="Behance In-Dev"><span aria-hidden="true">Bē</span> Behance</a>
            <a href="mailto:contact@indevtech.dev"><span aria-hidden="true">@</span> Email</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-word" aria-hidden="true">in<span>·</span>dev</div>
        <div className="footer-bottom shell">
          <span>© 2026 In-Dev, Alger</span>
          <nav aria-label="Navigation de pied de page">
            <Link href="/#expertises">Expertises</Link>
            <Link href="/#projets">Projets</Link>
            <Link href="/#methode">Méthode</Link>
          </nav>
          <a href="mailto:contact@indevtech.dev">contact@indevtech.dev</a>
        </div>
      </footer>
    </>
  );
}
