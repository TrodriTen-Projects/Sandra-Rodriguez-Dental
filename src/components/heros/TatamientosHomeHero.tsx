import React, { useRef, useEffect, useState } from 'react';
import { navbarLinks } from '../navbar/navbarLinks';
import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import type { SubLinkItem } from '../navbar/navbarLinks';
const getAllTreatmentSubItems = () => {
  const treatments = navbarLinks.find(link => link.key === 'treatments');
  if (!treatments || !treatments.subLinks) return [];
  // Only return subLinkItems from subLinks that have them
  return treatments.subLinks
    .filter(t => t.subLinkItems && t.subLinkItems.length > 0)
    .flatMap(t => t.subLinkItems);
};
import Image from 'next/image';
const TatamientosHomeHero = () => {
  const treatmentItems = getAllTreatmentSubItems();
  // Infinite scroll: clone first and last items
  const [items, setItems] = useState<SubLinkItem[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (treatmentItems.length > 0) {
      // Filter out undefined just in case
      const filtered = treatmentItems.filter(Boolean) as SubLinkItem[];
      // Duplicate the first 2 items at the end for smooth infinite scroll
      const N = Math.min(2, filtered.length); // Number of items to duplicate
      setItems([
        ...filtered,
        ...filtered.slice(0, N),
      ]);
    }
  }, [treatmentItems.length]);

  // On mount, scroll to the first real item
  useEffect(() => {
    if (carouselRef.current && items.length > 0) {
      carouselRef.current.scrollLeft = 0;
    }
  }, [items.length]);

  // Handle infinite scroll effect (only forward/right)
  const handleScroll = () => {
    if (!carouselRef.current) return;
    const cardWidth = carouselRef.current.firstChild instanceof HTMLElement ? carouselRef.current.firstChild.offsetWidth + 24 : 320;
    const realItemsCount = items.length > 2 ? items.length - 2 : items.length;
    // If scrolled past the last real item (into the duplicated ones)
    if (carouselRef.current.scrollLeft >= cardWidth * (realItemsCount)) {
      // Instantly reset to the start (same card visually)
      carouselRef.current.scrollLeft = 0;
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.firstChild instanceof HTMLElement ? carouselRef.current.firstChild.offsetWidth + 24 : 320;
      carouselRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.firstChild instanceof HTMLElement ? carouselRef.current.firstChild.offsetWidth + 24 : 320;
      carouselRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white max-w-7xl mx-auto px-4">
      <div className="container mx-auto">
        <SectionTitle header="h2" className=" text-center font-bold mb-4" uppercase>Tratamientos diseñados a medida</SectionTitle>
        <div className="relative">
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth p-4 md:p-4"
            style={{ scrollSnapType: 'x mandatory' }}
            onScroll={handleScroll}
          >
            {items.map((item, idx) => (
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