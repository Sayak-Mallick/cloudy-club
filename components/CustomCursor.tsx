"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef   = useRef<HTMLDivElement>(null);
  const ringRef  = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  // Step 1: mount flag — prevents SSR from rendering cursor elements
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  // Step 2: GSAP setup — only runs after elements are actually in the DOM
  useEffect(() => {
    if (!mounted) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const dot   = dotRef.current!;
    const ring  = ringRef.current!;
    const label = labelRef.current!;

    // xPercent/yPercent handle centering; x/y handle position.
    // GSAP combines them so neither overwrites the other.
    gsap.set([dot, ring, label], { xPercent: -50, yPercent: -50, opacity: 0 });

    const onMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      gsap.set(dot,  { x, y, opacity: 1 });
      gsap.to(ring,  { x, y, opacity: 1, duration: 0.38, ease: "power2.out", overwrite: "auto" });
      gsap.to(label, { x, y,             duration: 0.38, ease: "power2.out", overwrite: "auto" });
    };

    const onDocLeave  = (e: MouseEvent) => {
      if (e.relatedTarget === null) gsap.to([dot, ring], { opacity: 0, duration: 0.3 });
    };
    const onDocEnter  = () => gsap.to([dot, ring], { opacity: 1, duration: 0.3 });

    const onLinkEnter = (e: Event) => {
      const tag = (e.currentTarget as HTMLElement).dataset.cursor;
      if (tag) {
        label.textContent = tag;
        gsap.to(ring,  { scale: 3,   opacity: 0.12, duration: 0.35, ease: "power2.out" });
        gsap.to(label, { opacity: 1, scale: 1,       duration: 0.3 });
        gsap.to(dot,   { scale: 0,                   duration: 0.2 });
      } else {
        gsap.to(ring, { scale: 2.2, opacity: 0.6, duration: 0.3, ease: "power2.out" });
        gsap.to(dot,  { scale: 0,                 duration: 0.2 });
      }
    };

    const onLinkLeave = () => {
      label.textContent = "";
      gsap.to(ring,  { scale: 1, opacity: 1,   duration: 0.4, ease: "power2.out" });
      gsap.to(label, { opacity: 0, scale: 0.8, duration: 0.2 });
      gsap.to(dot,   { scale: 1,               duration: 0.25 });
    };

    document.addEventListener("mousemove",  onMouseMove);
    document.addEventListener("mouseleave", onDocLeave);
    document.addEventListener("mouseenter", onDocEnter);

    const attach = () => {
      const els = document.querySelectorAll<HTMLElement>(
        "a, button, [role='button'], input, textarea, select, label, [data-cursor]"
      );
      els.forEach(el => {
        el.removeEventListener("mouseenter", onLinkEnter);
        el.removeEventListener("mouseleave", onLinkLeave);
        el.addEventListener("mouseenter", onLinkEnter);
        el.addEventListener("mouseleave", onLinkLeave);
      });
    };
    attach();

    const observer = new MutationObserver(attach);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove",  onMouseMove);
      document.removeEventListener("mouseleave", onDocLeave);
      document.removeEventListener("mouseenter", onDocEnter);
      observer.disconnect();
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <>
      {/* Dot — snaps to cursor instantly */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0, left: 0,
          width: "8px", height: "8px",
          borderRadius: "50%",
          background: "var(--lilac)",
          pointerEvents: "none",
          zIndex: 99998,
          willChange: "transform",
        }}
      />

      {/* Ring — follows with lag */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0, left: 0,
          width: "36px", height: "36px",
          borderRadius: "50%",
          border: "1.5px solid rgba(192,175,211,0.75)",
          pointerEvents: "none",
          zIndex: 99997,
          willChange: "transform",
        }}
      />

      {/* Label — for data-cursor elements */}
      <div
        ref={labelRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0, left: 0,
          pointerEvents: "none",
          zIndex: 99999,
          fontFamily: "Montserrat, sans-serif",
          fontSize: "9px",
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--lilac)",
          opacity: 0,
          whiteSpace: "nowrap",
        }}
      />
    </>
  );
}
