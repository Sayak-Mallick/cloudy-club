"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useReveal(options?: {
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  stagger?: number;
  start?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const targets = ref.current?.querySelectorAll(".reveal-item");
      if (!targets || targets.length === 0) {
        // Animate the ref itself
        gsap.fromTo(
          ref.current,
          options?.from ?? { opacity: 0, y: 30 },
          {
            ...(options?.to ?? { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }),
            scrollTrigger: {
              trigger: ref.current,
              start: options?.start ?? "top 85%",
              once: true,
            },
          }
        );
      } else {
        gsap.fromTo(
          targets,
          options?.from ?? { opacity: 0, y: 30 },
          {
            ...(options?.to ?? { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }),
            stagger: options?.stagger ?? 0.15,
            scrollTrigger: {
              trigger: ref.current,
              start: options?.start ?? "top 85%",
              once: true,
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return ref;
}
