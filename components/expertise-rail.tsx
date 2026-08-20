"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Boxes,
  Braces,
  Gauge,
  LayoutTemplate,
  Radar,
  Workflow,
  type LucideIcon,
} from "lucide-react";

const services: [LucideIcon, string, string][] = [
  [Boxes, "ERP & logiciels métier", "Des outils construits autour de vos opérations, de vos équipes et de vos règles."],
  [Radar, "CRM & automatisations", "Un suivi commercial lisible, des données centralisées et moins de tâches manuelles."],
  [LayoutTemplate, "Sites web & e-commerce", "Des expériences rapides qui présentent, rassurent et convertissent sur chaque écran."],
  [Gauge, "Landing pages", "Une page, un message et un chemin direct vers la prise de contact ou l’achat."],
  [Workflow, "Design UI/UX", "Des interfaces cohérentes, accessibles et testées pour les usages réels."],
  [Braces, "Intégrations & maintenance", "APIs, paiements, données et suivi après mise en ligne."],
];

export function ExpertiseRail() {
  const section = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(max-width: 860px)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    // les métriques des webfonts changent scrollWidth, donc la distance du rail
    document.fonts.ready.then(() => ScrollTrigger.refresh());
    const ctx = gsap.context(() => {
      const rail = track.current;
      if (!rail) return;

      // ponytail: le rail est en width:max-content, donc on mesure contre son viewport, pas contre lui-même
      const distance = () => Math.max(0, rail.scrollWidth - (rail.parentElement?.clientWidth ?? 0));

      gsap.to(rail, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section.current,
          start: "top top",
          end: () => `+=${distance() + window.innerHeight * 0.5}`,
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // ponytail: scale + opacity seulement — un y résiduel décalerait les cartes hors du pin
      gsap.from(".service-panel", {
        opacity: 0,
        scale: 0.94,
        duration: 0.7,
        stagger: 0.07,
        ease: "power3.out",
        clearProps: "opacity,transform",
        scrollTrigger: { trigger: section.current, start: "top 75%", once: true },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="services" id="expertises" ref={section}>
      <div className="section-title shell">
        <h2>Tout ce qu’il faut pour passer de l’idée au produit</h2>
      </div>
      <div className="services-viewport">
        <div className="services-track" ref={track}>
          {services.map(([Icon, title, copy], index) => (
            <article className="service-panel" key={title}>
              <span className="service-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <span className="service-icon" aria-hidden="true"><Icon strokeWidth={1.25} /></span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
