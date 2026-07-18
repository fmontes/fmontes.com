"use client";

import { useEffect } from "react";

const GLYPHS = "!<>-_\\/[]{}=+*^?#";
const SCRAMBLE_MS = 650;

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const smooth = (t: number) => t * t * (3 - 2 * t);

function runScramble(el: HTMLElement) {
  const original = el.dataset.text ?? el.textContent ?? "";
  el.dataset.text = original;
  const start = performance.now();

  function frame(now: number) {
    const t = Math.min((now - start) / SCRAMBLE_MS, 1);
    const settled = Math.floor(t * original.length);
    let out = original.slice(0, settled);
    for (let i = settled; i < original.length; i++) {
      const ch = original[i];
      out +=
        ch === " " || t === 1
          ? ch
          : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
    }
    el.textContent = out;
    if (t < 1) requestAnimationFrame(frame);
    else el.textContent = original;
  }

  requestAnimationFrame(frame);
}

export default function FX() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const cleanups: Array<() => void> = [];

    /* ── Scroll reveals ─────────────────────────────────────── */
    const revealEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    revealEls.forEach((el) => io.observe(el));
    cleanups.push(() => io.disconnect());

    /* ── Mono scramble on first view ────────────────────────── */
    const scrambleEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-scramble]"),
    );
    if (!reduced.matches) {
      const sio = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const el = entry.target as HTMLElement;
            sio.unobserve(el);
            runScramble(el);
          }
        },
        { threshold: 0.6 },
      );
      scrambleEls.forEach((el) => {
        el.dataset.text = el.textContent ?? "";
        sio.observe(el);
      });
      cleanups.push(() => sio.disconnect());
    }

    /* ── Count-up readouts on first view ────────────────────── */
    const countEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-countup]"),
    );
    if (!reduced.matches && countEls.length) {
      const cio = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const el = entry.target as HTMLElement;
            cio.unobserve(el);
            const target = parseInt(el.dataset.countup || "0", 10);
            const suffix = el.dataset.suffix || "";
            const t0 = performance.now();
            const DUR = 1300;
            const step = (now: number) => {
              const t = Math.min(1, (now - t0) / DUR);
              const eased = 1 - Math.pow(1 - t, 3);
              el.textContent = `${Math.round(target * eased)}${suffix}`;
              if (t < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
        },
        { threshold: 0.6 },
      );
      countEls.forEach((el) => cio.observe(el));
      cleanups.push(() => cio.disconnect());
    }

    /* ── Magnetic elements (fine pointers only) ─────────────── */
    const finePointer = window.matchMedia("(pointer: fine)");
    if (finePointer.matches && !reduced.matches) {
      const STRENGTH = 0.28;
      const MAX = 7;

      document
        .querySelectorAll<HTMLElement>("[data-magnetic]")
        .forEach((el) => {
          let raf = 0;
          let tx = 0,
            ty = 0,
            cx = 0,
            cy = 0;

          const tick = () => {
            cx += (tx - cx) * 0.16;
            cy += (ty - cy) * 0.16;
            el.style.translate = `${cx.toFixed(2)}px ${cy.toFixed(2)}px`;
            if (Math.abs(tx - cx) > 0.1 || Math.abs(ty - cy) > 0.1) {
              raf = requestAnimationFrame(tick);
            } else {
              el.style.translate =
                tx === 0 && ty === 0 ? "" : `${tx}px ${ty}px`;
              raf = 0;
            }
          };

          const start = () => {
            if (!raf) raf = requestAnimationFrame(tick);
          };

          const onMove = (e: PointerEvent) => {
            const rect = el.getBoundingClientRect();
            tx = (e.clientX - rect.left - rect.width / 2) * STRENGTH;
            ty = (e.clientY - rect.top - rect.height / 2) * STRENGTH;
            tx = Math.max(-MAX, Math.min(MAX, tx));
            ty = Math.max(-MAX, Math.min(MAX, ty));
            start();
          };

          const onLeave = () => {
            tx = 0;
            ty = 0;
            start();
          };

          el.addEventListener("pointermove", onMove);
          el.addEventListener("pointerleave", onLeave);
          cleanups.push(() => {
            el.removeEventListener("pointermove", onMove);
            el.removeEventListener("pointerleave", onLeave);
            cancelAnimationFrame(raf);
            el.style.translate = "";
          });
        });
    }

    /* ── Scroll story engine (skipped entirely for reduced motion) ── */
    if (!reduced.matches) {
      const threadFill = document.querySelector<HTMLElement>(
        "[data-thread-fill]",
      );
      const parallaxEls = Array.from(
        document.querySelectorAll<HTMLElement>("[data-parallax]"),
      );
      const focusEls = Array.from(
        document.querySelectorAll<HTMLElement>("[data-focus]"),
      );

      const method = document.querySelector<HTMLElement>("[data-method]");
      const methodLines = method
        ? Array.from(method.querySelectorAll<HTMLElement>("[data-method-line]"))
        : [];
      const methodIndex =
        method?.querySelector<HTMLElement>("[data-method-index]") ?? null;
      const methodDashes = method
        ? Array.from(method.querySelectorAll<HTMLElement>("[data-method-dash]"))
        : [];

      const kicker = document.querySelector<HTMLElement>("[data-kicker]");
      const kickerLine =
        kicker?.querySelector<HTMLElement>("[data-kicker-line]") ?? null;

      const hscroll = document.querySelector<HTMLElement>("[data-hscroll]");
      const hTrack =
        hscroll?.querySelector<HTMLElement>("[data-hscroll-track]") ?? null;
      const hIndex =
        hscroll?.querySelector<HTMLElement>("[data-hscroll-index]") ?? null;
      const hBar =
        hscroll?.querySelector<HTMLElement>("[data-hscroll-bar]") ?? null;
      const hPanels = hTrack
        ? Array.from(hTrack.querySelectorAll<HTMLElement>(".hscroll-panel"))
        : [];

      if (method) method.classList.add("method-live");
      if (kicker) kicker.classList.add("kicker-live");
      if (hscroll && hTrack) hscroll.classList.add("hscroll-live");

      let ticking = false;

      const update = () => {
        ticking = false;
        const vh = window.innerHeight;
        const sy = window.scrollY;
        const docRange = document.documentElement.scrollHeight - vh;

        /* Margin thread: journey progress */
        if (threadFill) {
          threadFill.style.height = `${(docRange > 0 ? (sy / docRange) * 100 : 0).toFixed(2)}%`;
        }

        /* Hero parallax: the cover lifts away */
        for (const el of parallaxEls) {
          const r = el.getBoundingClientRect();
          if (r.bottom < 0 || r.top > vh) continue;
          const speed = parseFloat(el.dataset.parallax || "0.12");
          el.style.transform = `translate3d(0, ${(sy * speed).toFixed(1)}px, 0)`;
        }

        /* Focus lines: ignite at the reading zone, drift laterally */
        for (const el of focusEls) {
          const r = el.getBoundingClientRect();
          if (r.bottom < -80 || r.top > vh + 80) continue;
          const center = r.top + r.height / 2;
          const f = smooth(
            clamp01(1 - Math.abs(center - vh * 0.46) / (vh * 0.3)),
          );
          el.style.setProperty("--f", f.toFixed(3));
          const dir = parseFloat(el.dataset.drift || "0");
          if (dir) {
            const dx = Math.max(
              -60,
              Math.min(60, (center - vh * 0.5) * 0.06 * dir),
            );
            el.style.setProperty("--dx", `${dx.toFixed(1)}px`);
          }
          if (f > 0.75) el.classList.add("line-drawn");
        }

        /* The method: pinned walkthrough, steps accumulate */
        if (method && methodLines.length) {
          const r = method.getBoundingClientRect();
          const total = r.height - vh;
          const approach = clamp01((vh - r.top) / vh);
          const stuck = total > 0 ? clamp01(-r.top / total) : 0;
          const f = approach + stuck * 2; // [0, 3] across 3 lines
          const big = window.innerWidth < 640 ? 30 : 40;
          const small = 19;

          methodLines.forEach((line, i) => {
            const raw = clamp01(f - i);
            const arrive = smooth(raw);
            const done =
              i === methodLines.length - 1 ? 0 : smooth(clamp01(f - i - 1));
            line.style.fontSize = `${(big + (small - big) * done).toFixed(1)}px`;
            line.style.color = `color-mix(in oklab, var(--ink-strong) ${(arrive * (1 - done) * 100).toFixed(1)}%, var(--muted))`;
            line.style.opacity = clamp01(raw * raw * 2.4).toFixed(3);
            line.style.transform = `translate3d(0, ${((1 - arrive) * 28).toFixed(1)}px, 0)`;
            line.style.filter = arrive >= 1 ? "none" : `blur(${((1 - arrive) * 5).toFixed(2)}px)`;
          });

          if (methodIndex) {
            const idx = String(
              Math.min(3, Math.max(1, Math.floor(Math.max(0, f - 0.02)) + 1)),
            ).padStart(2, "0");
            const txt = `${idx} / 03`;
            if (methodIndex.textContent !== txt)
              methodIndex.textContent = txt;
          }
          methodDashes.forEach((dash, i) => {
            dash.style.transform = `scaleX(${clamp01(f - i).toFixed(3)})`;
          });
        }

        /* Kicker hold: the punchline draws its underline while held */
        if (kicker && kickerLine) {
          const r = kicker.getBoundingClientRect();
          const total = r.height - vh;
          const p = total > 0 ? clamp01(-r.top / total) : 0;
          kickerLine.style.setProperty("--k", clamp01(p / 0.55).toFixed(3));
        }

        /* Horizontal gallery: vertical scroll drives the track */
        if (hscroll && hTrack) {
          const r = hscroll.getBoundingClientRect();
          const total = r.height - vh;
          const p = total > 0 ? clamp01(-r.top / total) : 0;
          const vw = window.innerWidth;
          const max = Math.max(0, hTrack.scrollWidth - vw);
          hTrack.style.transform = `translate3d(${(-p * max).toFixed(1)}px, 0, 0)`;

          let nearest = 0;
          let best = Infinity;
          hPanels.forEach((pn, i) => {
            const pr = pn.getBoundingClientRect();
            const dist = Math.abs(pr.left + pr.width / 2 - vw / 2);
            if (dist < best) {
              best = dist;
              nearest = i;
            }
          });
          if (hIndex) {
            const txt = `${String(nearest + 1).padStart(2, "0")} / ${String(hPanels.length).padStart(2, "0")}`;
            if (hIndex.textContent !== txt) hIndex.textContent = txt;
          }
          if (hBar) hBar.style.transform = `scaleX(${p.toFixed(4)})`;
        }
      };

      const onScroll = () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(update);
        }
      };

      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      update();
      cleanups.push(() => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
