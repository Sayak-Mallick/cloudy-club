"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
  const pathname   = usePathname();
  const lenisRef   = useRef<import("lenis").default | null>(null);
  const tickFnRef  = useRef<((time: number) => void) | null>(null);

  // Kill GSAP ScrollTriggers whenever the route changes — this prevents the
  // "removeChild: node not a child" error caused by ScrollTrigger pin spacers
  // still being in the DOM when React unmounts the old page's components.
  useEffect(() => {
    ScrollTrigger.killAll();
    window.scrollTo(0, 0);
  }, [pathname]);

  // Lenis smooth scroll — lives for the lifetime of the layout
  useEffect(() => {
    let destroyed = false;

    async function init() {
      const { default: Lenis } = await import("lenis");
      if (destroyed) return;

      const lenis = new Lenis({
        duration: 1.15,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 1.5,
        infinite: false,
      });

      lenisRef.current = lenis;
      lenis.on("scroll", ScrollTrigger.update);

      const tickFn = (time: number) => lenis.raf(time * 1000);
      tickFnRef.current = tickFn;
      gsap.ticker.add(tickFn);
      gsap.ticker.lagSmoothing(0);
    }

    init();

    return () => {
      destroyed = true;
      if (tickFnRef.current) gsap.ticker.remove(tickFnRef.current);
      lenisRef.current?.destroy();
      lenisRef.current  = null;
      tickFnRef.current = null;
    };
  }, []);

  return null;
}
