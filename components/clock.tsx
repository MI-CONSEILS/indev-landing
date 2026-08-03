"use client";

import { useEffect, useState } from "react";

const time = new Intl.DateTimeFormat("fr-FR", {
  timeZone: "Africa/Algiers",
  hour: "2-digit",
  minute: "2-digit",
});

export function LocalClock() {
  // ponytail: empty until mounted, sidesteps SSR/client clock mismatch
  const [now, setNow] = useState("");

  useEffect(() => {
    const tick = () => setNow(time.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="hero-clock">
      GMT+1 <b>{now || "--:--"}</b>
    </span>
  );
}
