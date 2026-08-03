"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function HeroOrbit() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const stage = root.current;
      if (!stage) return;

      const discs = gsap.utils.toArray<HTMLElement>(".orbit-disc");

      // le champ entier bascule en 3D vers le curseur
      const rotX = gsap.quickTo(stage, "rotationX", { duration: 1.1, ease: "power3" });
      const rotY = gsap.quickTo(stage, "rotationY", { duration: 1.1, ease: "power3" });
      const onMove = (event: PointerEvent) => {
        const x = event.clientX / window.innerWidth - 0.5;
        const y = event.clientY / window.innerHeight - 0.5;
        rotX(-y * 14);
        rotY(x * 18);
      };
      window.addEventListener("pointermove", onMove, { passive: true });

      // chaque disque part vers sa propre profondeur au scroll
      gsap.to(discs, {
        z: (index: number) => -280 + index * 90,
        rotationZ: (index: number) => (index % 2 ? 26 : -22),
        yPercent: (index: number) => (index % 3 === 0 ? -34 : 26),
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 0.8 },
      });

      // ouverture : les disques arrivent de loin
      gsap.from(discs, {
        z: -900,
        opacity: 0,
        duration: 1.5,
        stagger: { each: 0.055, from: "center" },
        ease: "power3.out",
        delay: 0.15,
      });

      return () => window.removeEventListener("pointermove", onMove);
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div className="hero-orbit" aria-hidden="true" ref={root}>
      <span className="orbit-line" />
      {Array.from({ length: 12 }, (_, index) => (
        <span className="orbit-disc" key={index} />
      ))}
    </div>
  );
}
