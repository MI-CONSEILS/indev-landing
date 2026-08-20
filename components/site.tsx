import Link from "next/link";
import { MAILTO, CONTACT_EMAIL } from "@/lib/brand";
import type { Project } from "@/lib/projects";

export function Logotype() {
  return (
    <svg className="logotype" aria-hidden="true" focusable="false" viewBox="279.499 606.291 3622.34 705.542" xmlns="http://www.w3.org/2000/svg"> <g> <path d="m 0,0 c 1.044,-0.231 10.933,-6.721 12.566,-8.141 122.333,-127.594 243.18,-256.955 368.566,-381.514 V 0 h 87.672 v -507.77 c 0,-1.523 -6.566,-11.311 -8.84,-13.078 -16.478,-12.798 -70.843,-10.463 -87.295,4.616 -161.195,169.998 -321.3,341.032 -484.711,508.91 L -115.679,0 Z" fill="currentColor" transform="matrix(1.3333333,0,0,-1.3333333,654.5412,606.29147)" /> <path d="m 297.296,363.247 h -87.672 v 526.035 h 87.672 z" fill="currentColor" transform="matrix(1.3333333,0,0,-1.3333333,0,1792)" /> <path d="m 0,0 h -87.672 v 409.138 c 4.562,0.727 7.028,-3.168 9.803,-6.027 C -51.556,375.992 -25.585,348.082 0,320.248 Z" fill="#C7E844" transform="matrix(1.3333333,0,0,-1.3333333,636.682,1307.6711)" /> <path d="m 0,0 h 283.718 c 2.253,0 17.307,4.757 20.679,6.11 24.788,9.943 29.908,28.435 31.776,53.461 2.247,30.106 3.669,128.816 -4.847,153.641 -4.543,13.244 -12.691,22.485 -25.638,27.94 -6.543,2.757 -25.404,7.253 -31.712,7.253 L 0,248.405 Z m -51.142,-46.272 v 338.514 h 339.731 c 29.828,0 72.46,-19.601 87.516,-46.428 18.087,-32.225 15.801,-139.134 13.651,-178.942 -4.402,-81.484 -35.001,-108.185 -115.803,-113.12 z" fill="currentColor" transform="matrix(1.3333333,0,0,-1.3333333,1963.3,1122.418)" /> <path d="M 0,0 186.335,-297.106 C 252.796,-200.251 314.505,-99.937 376.261,0 h 58.448 c -1.543,-7.542 -7.129,-15.11 -11.166,-21.711 -64.115,-104.867 -133.655,-206.55 -197.14,-311.847 l -5.255,-4.486 c -19.387,1.095 -44.258,-3.103 -62.969,-0.588 -3.381,0.455 -6.358,0.494 -8.54,3.637 L -54.293,-8.022 -57.231,0 Z" fill="currentColor" transform="matrix(1.3333333,0,0,-1.3333333,3322.2229,732.76267)" /> <path d="m 0,0 v -42.619 c 0,-0.258 -3.395,-3.653 -3.653,-3.653 H -399.397 V 0 Z" fill="currentColor" transform="matrix(1.3333333,0,0,-1.3333333,3148.5016,1122.418)" /> <path d="m 0,0 v -42.619 c 0,-0.258 -3.395,-3.653 -3.653,-3.653 h -392.091 c -0.258,0 -3.653,3.395 -3.653,3.653 l 0,42.619 z" fill="currentColor" transform="matrix(1.3333333,0,0,-1.3333333,3148.5016,732.76267)" /> <path d="M 2307.799,604.471 H 1961.98 v 43.836 h 345.819 z" fill="#C7E844" transform="matrix(1.3333333,0,0,-1.3333333,0,1792)" /> <path d="m 0,0 -1.426,-9.966 -106.786,-297.24 c -4.107,-9.287 -16.087,-4.72 -24.401,-5.638 L -22.594,-0.198 Z" fill="#C7E844" transform="matrix(1.3333333,0,0,-1.3333333,1667.8571,750.27707)" /> </g>
</svg>
  );
}

export function Logo() {
  return (
    <Link href="/" className="logo" aria-label="IN/DEV, accueil">
      <Logotype />
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
            <a className="cta-button" href={MAILTO}>
              Parler du projet <Arrow />
            </a>
          </div>
          <div className="cta-socials" aria-label="Réseaux sociaux">
            <a href="#" aria-label="LinkedIn IN/DEV"><span aria-hidden="true">in</span> LinkedIn</a>
            <a href="#" aria-label="Instagram IN/DEV"><span aria-hidden="true">◎</span> Instagram</a>
            <a href="#" aria-label="Behance IN/DEV"><span aria-hidden="true">Bē</span> Behance</a>
            <a href={MAILTO}><span aria-hidden="true">@</span> Email</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-word" aria-hidden="true"><Logotype /></div>
        <div className="footer-bottom shell">
          <span>© 2026 IN/DEV, Alger</span>
          <nav aria-label="Navigation de pied de page">
            <Link href="/#expertises">Expertises</Link>
            <Link href="/#projets">Projets</Link>
            <Link href="/#methode">Méthode</Link>
          </nav>
          <a href={MAILTO}>{CONTACT_EMAIL}</a>
        </div>
      </footer>
    </>
  );
}
