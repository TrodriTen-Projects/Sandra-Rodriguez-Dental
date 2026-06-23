'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SectionTitle from '../SectionTitle';
import { navbarLinks } from '../navbar/navbarLinks';
import type { SubLinkItem } from '../navbar/navbarLinks';

function getAllTreatmentSubItems(): SubLinkItem[] {
  const treatments = navbarLinks.find((link) => link.key === 'treatments');
  if (!treatments || !treatments.subLinks) return [];
  return treatments.subLinks
    .filter((t) => t.subLinkItems && t.subLinkItems.length > 0)
    .flatMap((t) => t.subLinkItems as SubLinkItem[])
    .filter(Boolean);
}

// Computed once at module load (navbarLinks is static) so the cards render into
// the static HTML immediately. The list is rendered TWICE: scrolling wraps by
// exactly one set width, which is invisible because both copies are identical →
// a seamless infinite loop. NOTE: the track must NOT use CSS `scroll-smooth`,
// or the instant wrap would animate (rewind) and become visible; smoothness is
// applied per-advance via scrollBy({ behavior: 'smooth' }) instead.
const TREATMENT_ITEMS = getAllTreatmentSubItems();
const SET_LENGTH = TREATMENT_ITEMS.length;
const CAROUSEL_ITEMS = [...TREATMENT_ITEMS, ...TREATMENT_ITEMS];

// Auto-advance interval (ms).
const AUTOPLAY_MS = 1000;

const TatamientosHomeHero = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const tickingRef = useRef(false);
  const pausedRef = useRef(false);

  const cardStep = () => {
    const el = carouselRef.current;
    if (!el) return 320;
    return el.firstChild instanceof HTMLElement ? el.firstChild.offsetWidth + 24 : 320;
  };

  // Width of one full copy of the list (measured from the DOM so it stays exact
  // across breakpoints / card sizes).
  const setWidth = () => {
    const el = carouselRef.current;
    if (!el) return cardStep() * SET_LENGTH;
    const first = el.children[0];
    const secondSetStart = el.children[SET_LENGTH];
    if (first instanceof HTMLElement && secondSetStart instanceof HTMLElement) {
      return secondSetStart.offsetLeft - first.offsetLeft;
    }
    return cardStep() * SET_LENGTH;
  };

  // Once we scroll past one full set, subtract a set width — instant and
  // invisible because the second copy is identical. rAF-throttled.
  const handleScroll = () => {
    if (tickingRef.current) return;
    tickingRef.current = true;
    requestAnimationFrame(() => {
      tickingRef.current = false;
      const el = carouselRef.current;
      if (!el) return;
      const sw = setWidth();
      if (sw > 0 && el.scrollLeft >= sw) {
        el.scrollLeft -= sw;
      }
    });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: cardStep(), behavior: 'smooth' });
  };

  const scrollLeft = () => {
    const el = carouselRef.current;
    if (!el) return;
    // Near the start, hop forward one set first so we can loop back seamlessly
    // instead of hitting the left edge.
    if (el.scrollLeft < cardStep()) {
      el.scrollLeft += setWidth();
    }
    el.scrollBy({ left: -cardStep(), behavior: 'smooth' });
  };

  const pause = () => { pausedRef.current = true; };
  const resume = () => { pausedRef.current = false; };

  // Auto-play: advance one card on an interval. Skipped for visitors who prefer
  // reduced motion; paused while hovering/touching or when the tab is hidden.
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (prefersReducedMotion) return;

    const onVisibility = () => {
      pausedRef.current = document.hidden;
    };
    document.addEventListener('visibilitychange', onVisibility);

    const id = window.setInterval(() => {
      if (pausedRef.current) return;
      const el = carouselRef.current;
      if (!el) return;
      const step = el.firstChild instanceof HTMLElement ? el.firstChild.offsetWidth + 24 : 320;
      el.scrollBy({ left: step, behavior: 'smooth' });
    }, AUTOPLAY_MS);

    return () => {
      window.clearInterval(id);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <section className="bg-white max-w-7xl mx-auto px-4">
      <div className="container mx-auto">
        <SectionTitle header="h2" className=" text-center font-bold mb-4" uppercase>Tratamientos diseñados a medida</SectionTitle>
        <div className="relative">
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto no-scrollbar p-4 md:p-4"
            style={{ scrollSnapType: 'x mandatory' }}
            onScroll={handleScroll}
            onMouseEnter={pause}
            onMouseLeave={resume}
            onTouchStart={pause}
            onTouchEnd={resume}
          >
            {CAROUSEL_ITEMS.map((item, idx) => (
              item && (
                <Link
                  key={item.key + '-' + idx}
                  href={item.href}
                  className="bg-white rounded-3xl overflow-hidden flex-shrink-0 relative group transition-transform duration-300 w-[80vw] max-w-xs md:w-[350px] md:max-w-none h-[300px] md:h-[350px]"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <Image
                    src={item.image}
                    width={350}
                    height={350}
                    alt={item.label}
                    loading="lazy"
                    className="w-full h-full object-cover brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                    <SectionTitle header="h3" className=" text-left font-bold mb-4 text-white !text-xl md:!text-3xl">
                      {item.label}
                    </SectionTitle>
                  </div>
                </Link>
              )
            ))}
          </div>
          {/* Mobile & desktop button styles */}
          <button
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1 md:p-2 rounded-full shadow-md z-20 transition-all border border-primary w-8 h-8 md:w-10 md:h-10 flex items-center justify-center"
            aria-label="Ver tratamientos anteriores"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1 md:p-2 rounded-full shadow-md z-20 transition-all border border-primary w-8 h-8 md:w-10 md:h-10 flex items-center justify-center"
            aria-label="Ver más tratamientos"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TatamientosHomeHero;
