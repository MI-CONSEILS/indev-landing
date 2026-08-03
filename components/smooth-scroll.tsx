"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";

const lenisOptions = {
  anchors: { offset: -80 },
  autoRaf: true,
  lerp: 0.085,
  smoothWheel: true,
  wheelMultiplier: 0.9,
};

export function SmoothScroll() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setEnabled(!mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  if (!enabled) return null;

  return <ReactLenis root options={lenisOptions} />;
}
