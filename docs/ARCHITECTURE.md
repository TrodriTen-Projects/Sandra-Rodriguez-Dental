# Architecture Documentation

## Table of Contents
1. [Overview](#overview)
2. [Technology Stack](#technology-stack)
3. [Directory Structure](#directory-structure)
4. [Routing & Navigation](#routing--navigation)
5. [Component Architecture](#component-architecture)
6. [Data Flow](#data-flow)
7. [State Management](#state-management)
8. [Performance Strategy](#performance-strategy)
9. [Analytics & Tracking](#analytics--tracking)
10. [SEO Strategy](#seo-strategy)

---

## Overview

Sandra Rodriguez Dental is a Next.js 15 application built using the App Router architecture. It's a static website with client-side interactivity for a dental clinic in Bogotá, Colombia.

### Key Characteristics
- **Type:** Marketing/Informational Website
- **Rendering:** Hybrid (Static Generation + Client-side Hydration)
- **Data Strategy:** Static data (no CMS or API)
- **Deployment:** Docker containerized
- **Target Audience:** Spanish-speaking dental patients in Colombia

---

## Technology Stack

### Core Framework
```
Next.js 15.1.3 (App Router)
├── React 19.0.0
├── TypeScript 5.x
└── Node.js 20+
```

### Styling
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **PostCSS** - CSS preprocessing
- **Custom CSS Variables** - Color theme system

### Performance
- **next/image** - Automatic image optimization
- **next/font** - Font optimization (DM Sans from Google Fonts)
- **React.lazy** - Code splitting for components
- **IntersectionObserver** - Scroll animations

### Analytics & Marketing
- **Google Analytics 4** - Web analytics
- **Google Tag Manager** - Tag management
- **Facebook Pixel** - Social media tracking
- **Google Ads** - Conversion tracking

### Development Tools
- **ESLint** - Code linting
- **TypeScript** - Type checking
- **Docker** - Containerization

---

## Directory Structure

### App Router Structure (`/src/app/`)

```
app/
├── layout.tsx              # Root layout (Navbar, Footer, Scripts)
├── page.tsx               # Homepage (/)
├── page.metadata.ts       # Homepage metadata
├── globals.css            # Global styles + Tailwind imports
├── sitemap.ts            # Dynamic sitemap generation
│
├── contact/
│   ├── page.tsx          # Contact page (/contact)
│   └── page.metadata.ts  # Contact metadata
│
├── cases/
│   ├── page.tsx          # Success cases (/cases)
│   └── page.metadata.ts  # Cases metadata
│
└── tratamientos/         # Treatment pages
    ├── page.tsx          # Redirects to /tratamientos/implantes
    │
    ├── estetica/
    │   └── blanqueamientos/
    │       ├── page.tsx
    │       ├── page.metadata.ts
    │       └── blanqueamiento.ts    # Treatment data
    │
    └── protesis/
        ├── fija/
        ├── removible/
        ├── sobredientes/
        ├── sobreimplantes/
        └── coronas/
            ├── nometal/
            ├── porcelana/
            └── sobreimplante/
```

### Component Organization (`/src/components/`)

```
components/
├── navbar/                    # Navigation
│   ├── Navbar.tsx            # Main navbar container
│   ├── DesktopMenu.tsx       # Desktop navigation
│   ├── MobileMenu.tsx        # Mobile slide-in menu
│   ├── DesktopDropdown.tsx   # Desktop dropdown menus
│   ├── MobileDropdown.tsx    # Mobile accordion dropdowns
│   ├── Logo.tsx              # Logo component
│   └── navbarLinks.ts        # Navigation structure data
│
├── footer/
│   └── Footer.tsx            # Site footer
│
├── heros/                     # Hero sections
│   ├── HomeHero.tsx          # Homepage hero
│   ├── DoctorHero.tsx        # About doctor section
│   ├── FaqHero.tsx           # FAQ accordion
│   ├── MapHero.tsx           # Google Maps embed
│   ├── CardsHero.tsx         # Service cards grid
│   └── TatamientosHomeHero.tsx # Treatment carousel
│
├── tratamientos/              # Treatment page components
│   ├── TratamientoLayout.tsx  # Master layout
│   ├── TratamientoHero.tsx    # Treatment hero
│   ├── TratamientoSection.tsx # Content sections
│   ├── TratamientoProceso.tsx # Process steps
│   ├── TratamientoTipos.tsx   # Types comparison
│   ├── FirstVisitSection.tsx  # First visit info
│   └── ImageCarousel.tsx      # Image carousel
│
├── buttons/
│   ├── WhatsappButton.tsx     # Floating WhatsApp button
│   ├── WhatsappButtonCTA.tsx  # WhatsApp CTA button
│   └── MobileMenuButton.tsx   # Hamburger menu button
│
├── contact/
│   ├── ContactIcons.tsx       # Contact info with icons
│   └── SocialIcons.tsx        # Social media icons
│
├── cards/
│   └── StatsCard.tsx         # Statistics card
│
├── carousels/
│   └── DoctorHeroCarousel.tsx # Doctor image carousel
│
├── banners/
│   ├── CookieConsent.tsx     # GDPR cookie banner
│   └── GoogleMapsConsent.tsx # Maps consent wrapper
│
├── SectionTitle.tsx          # Reusable section title
├── GoogleAnalytics.tsx       # GA4 integration
├── GoogleTagManager.tsx      # GTM integration
└── FacebookPixel.tsx         # Meta Pixel integration
```

### Data & Configuration

```
src/
├── data/
│   ├── faqData.ts           # FAQ questions/answers
│   └── tratamientos.ts      # Legacy treatment data (unused)
│
├── hooks/
│   ├── useAnalytics.ts      # GA4 event tracking
│   └── useGoogleAdsConversion.ts  # Ads conversion tracking
│
├── translations/
│   └── es/
│       └── translations.json # Spanish translations (minimal)
│
└── constants/               # (NEW in refactor)
    └── index.ts            # Centralized constants
```

---

## Routing & Navigation

### Route Hierarchy

```
/ (Homepage)
├── /contact (Contact Page)
├── /cases (Success Cases)
└── /tratamientos (Treatments)
    ├── /estetica
    │   └── /blanqueamientos (Teeth Whitening)
    └── /protesis
        ├── /fija (Fixed Prosthesis)
        ├── /removible (Removable Prosthesis)
        ├── /sobredientes (Overdentures on Teeth)
        ├── /sobreimplantes (Overdentures on Implants)
        └── /coronas
            ├── /nometal (Metal-Free Crowns)
            ├── /porcelana (Porcelain Crowns)
            └── /sobreimplante (Implant Crowns)
```

### Navigation Data Structure

Navigation is defined in `/src/components/navbar/navbarLinks.ts`:

```typescript
interface NavLink {
  key: string;
  label: string;
  href?: string;
  subLinks?: SubLink[];
  disabled?: boolean;
}

interface SubLink {
  key: string;
  label: string;
  href?: string;
  subLinkItems?: SubLinkItem[];
  disabled?: boolean;
}

interface SubLinkItem {
  key: string;
  label: string;
  href: string;
  image?: string;
  disabled?: boolean;
}
```

**Navigation Levels:**
1. **Top Level:** Main menu items (Tratamientos, Nosotros, Contacto)
2. **Sub Level:** Category dropdowns (Prótesis, Estética)
3. **Item Level:** Individual pages (Fija, Removible, etc.)

### Active Route Highlighting

Uses Next.js `usePathname()` to highlight current page:
- Exact match for leaf pages
- Parent highlighting for nested routes
- Different styles for desktop vs mobile

---

## Component Architecture

### Layout Hierarchy

```
RootLayout (layout.tsx)
├── Fixed Logo (separate from Navbar)
├── GoogleAnalytics
├── GoogleTagManager
├── FacebookPixel
├── Navbar
│   ├── DesktopMenu (hidden on mobile)
│   └── MobileMenu (hidden on desktop)
├── {children} (Page content)
├── Footer
└── WhatsAppButton (floating)
```

### Page Patterns

#### **Homepage Pattern** (`page.tsx`)
```
"use client"
├── useEffect (IntersectionObserver setup)
├── Suspense + Lazy(HomeHero)
├── Suspense + Lazy(CardsHero)
├── TatamientosHomeHero (eager loaded)
├── Suspense + Lazy(DoctorHero)
├── Suspense + Lazy(MapHero)
└── Suspense + Lazy(FaqHero)
```

**Animation Pattern:**
- Elements start with `hidden-initially opacity-0`
- IntersectionObserver adds `show` class when visible
- CSS transitions handle the animation

#### **Treatment Page Pattern** (all tratamientos pages)
```
TratamientoLayout
├── useEffect (scroll to top + IntersectionObserver)
├── TratamientoHero (eager loaded)
├── Suspense + Lazy(TratamientoSection)
├── Suspense + Lazy(TratamientoProceso)
├── Suspense + Lazy(TratamientoTipos)
└── Suspense + Lazy(FirstVisitSection)
```

### Component Composition Patterns

#### **1. Container/Presentational**
```
Navbar (container)
├── DesktopMenu (presentational)
└── MobileMenu (presentational)
```

#### **2. Compound Components**
```
TratamientoLayout (wrapper)
├── TratamientoHero
├── TratamientoSection
├── TratamientoProceso
├── TratamientoTipos
└── FirstVisitSection
```

#### **3. Render Props / Children**
```
GoogleMapsConsent (wrapper)
└── {children} (iframe or fallback)
```

---

## Data Flow

### Data Sources

#### **1. Static Data Files**
```typescript
// Treatment data example
export const blanqueamientoData = {
  title: "Blanqueamiento Dental",
  description: "...",
  sections: [...],
  process: {...},
  types: [...]
};
```

#### **2. Navigation Structure**
```typescript
// navbarLinks.ts
export const navbarLinks: NavLink[] = [
  {
    key: 'tratamientos',
    label: 'Tratamientos',
    subLinks: [...]
  }
];
```

#### **3. Translations**
```json
// translations.json
{
  "home": {
    "hero": {
      "title": "Rehabilitación Oral",
      "subtitle": "..."
    }
  }
}
```

### Data Flow Patterns

#### **Props Flow (Unidirectional)**
```
Page
 └─> TratamientoLayout
      ├─> TratamientoHero (receives: title, subtitle, image, etc.)
      ├─> TratamientoSection (receives: sections array)
      └─> TratamientoProceso (receives: pasos, imagenes)
```

#### **No Global State**
- Each component manages its own local state
- No Redux, Zustand, or Context API
- State hoisting where needed (e.g., mobile menu open/close)

#### **Event Flow (Bottom-up)**
```
MobileMenuButton
 └─> onClick
      └─> setIsOpen() in Navbar
           └─> isOpen prop to MobileMenu
```

---

## State Management

### Local State (useState)

#### **UI State**
```typescript
// Menu visibility
const [isOpen, setIsOpen] = useState(false);

// Accordion state
const [openIndex, setOpenIndex] = useState(0);

// Carousel index
const [currentIndex, setCurrentIndex] = useState(0);
```

#### **Hydration Safety**
```typescript
// Prevent hydration mismatches
const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);
if (!mounted) return null;
```

#### **Scroll State**
```typescript
const [isScrolled, setIsScrolled] = useState(false);
useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 100);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

### Side Effects (useEffect)

#### **1. Event Listeners**
```typescript
useEffect(() => {
  const handler = () => { /* ... */ };
  window.addEventListener('event', handler);
  return () => window.removeEventListener('event', handler);
}, [dependencies]);
```

#### **2. Intersection Observer**
```typescript
useEffect(() => {
  const observer = new IntersectionObserver(callback, options);
  elements.forEach(el => observer.observe(el));
  return () => elements.forEach(el => observer.unobserve(el));
}, []);
```

#### **3. Cookie Checks**
```typescript
useEffect(() => {
  const consent = Cookies.get("cookie_consent_is_true") === "true";
  setConsentGiven(consent);
}, []);
```

---

## Performance Strategy

### Code Splitting

#### **Route-Based Splitting**
- Automatic per-route code splitting via Next.js App Router
- Each page in `/app` is a separate bundle

#### **Component-Based Splitting**
```typescript
// Lazy load below-fold components
const DoctorHero = lazy(() => import("@/components/heros/DoctorHero"));
const MapHero = lazy(() => import("@/components/heros/MapHero"));

// Usage with Suspense
<Suspense fallback={<div>Loading...</div>}>
  <DoctorHero />
</Suspense>
```

### Image Optimization

#### **Next.js Image Component**
```typescript
<Image
  src={image}
  alt="..."
  width={1200}
  height={800}
  priority={isAboveFold}  // LCP optimization
  quality={75}            // Balance size/quality
  placeholder="blur"      // Optional blur-up
/>
```

#### **Preloading Critical Images**
```html
<!-- In layout.tsx <head> -->
<link rel="preload" href="/home.webp" as="image" />
```

### Font Optimization

```typescript
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  variable: '--font-dm-sans',
  display: 'swap',  // Prevents invisible text
});
```

### Scroll Performance

#### **IntersectionObserver for Animations**
```typescript
// Better than scroll event listeners
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '100px'  // Start loading early
});
```

### CSS Performance

- **Tailwind CSS** purges unused styles in production
- **CSS Variables** for theme colors (fast updates)
- **Avoid inline styles** where possible (use Tailwind classes)

---

## Analytics & Tracking

### Google Analytics 4 (GA4)

**Implementation:** `/src/components/GoogleAnalytics.tsx`

```typescript
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
  strategy="afterInteractive"
/>
```

**Custom Hook:** `/src/hooks/useAnalytics.ts`

```typescript
const { trackEvent } = useAnalytics();

trackEvent('contact_whatsapp', {
  source: 'whatsapp_cta',
  component_name: 'hero_section'
});
```

**Events Tracked:**
- Page views (automatic)
- WhatsApp button clicks
- CTA button clicks
- Navigation interactions

### Google Tag Manager (GTM)

**Implementation:** `/src/components/GoogleTagManager.tsx`

```typescript
<Script id="google-tag-manager" strategy="afterInteractive">
  {`
    (function(w,d,s,l,i){...})(window,document,'script','dataLayer','${GTM_ID}');
  `}
</Script>
```

**DataLayer:** Initialized globally for event tracking

### Facebook Pixel

**Implementation:** `/src/components/FacebookPixel.tsx`

```typescript
fbq('init', FB_PIXEL_ID);
fbq('track', 'PageView');
```

**Tracking Pixel:** 1x1 image fallback for no-JS users

### Google Ads Conversion

**Custom Hook:** `/src/hooks/useGoogleAdsConversion.ts`

```typescript
const { reportConversion } = useGoogleAdsConversion();

reportConversion(url, label);
```

**Used for:** CTA conversions, contact form submissions

---

## SEO Strategy

### Metadata Configuration

#### **Root Metadata** (`layout.tsx`)
```typescript
export const metadata: Metadata = {
  title: "Dra. Sandra Liliana Rodriguez | Rehabilitación Oral",
  description: "...",
  keywords: "rehabilitación dental, odontología estética, ...",
  metadataBase: new URL('https://www.sandrarodriguezdental.com'),
  openGraph: {
    title: "...",
    description: "...",
    images: [{url: '/og-image.png', width: 1200, height: 630}]
  }
};
```

#### **Page-Specific Metadata**
```typescript
// page.metadata.ts
export const metadata = {
  title: "Blanqueamiento Dental | Dra. Sandra Rodriguez",
  description: "...",
  // Merges with root metadata
};
```

### Sitemap

**Dynamic Generation:** `/src/app/sitemap.ts`

```typescript
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://.../', lastModified: new Date() },
    { url: 'https://.../tratamientos/...', lastModified: new Date() },
    // ...
  ];
}
```

### Semantic HTML

- `<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`, `<section>`
- Proper heading hierarchy (`<h1>` → `<h2>` → `<h3>`)
- Alt text on all images
- ARIA labels on interactive elements

### Robots & Crawling

```typescript
robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
  }
}
```

### Performance Metrics (SEO Impact)

- **LCP (Largest Contentful Paint):** Optimized with priority images
- **FID (First Input Delay):** Minimal JavaScript blocking
- **CLS (Cumulative Layout Shift):** Fixed dimensions on images
- **Core Web Vitals:** Monitored via GA4

---

## Build & Deployment

### Build Process

```bash
npm run build
```

**Output:**
```
.next/
├── static/           # Static assets with content hashing
├── server/          # Server components
└── standalone/      # Production server files
```

### Docker Deployment

**Dockerfile:**
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

**Docker Compose:**
```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
```

### Environment Variables

```env
NODE_ENV=production
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID=XXXXXXXXXXXXXXX
```

---

## Future Considerations

### Scalability
- Consider CMS integration (Sanity, Contentful) for content management
- Add API routes for contact form submissions
- Implement proper i18n with next-i18next

### Performance
- Add bundle analyzer
- Consider self-hosting fonts
- Implement service worker for offline support

### Features
- Add blog/news section
- Implement online appointment booking
- Add patient portal

### Testing
- Unit tests with Jest
- Integration tests with React Testing Library
- E2E tests with Playwright

---

**Last Updated:** January 2025
**Architecture Version:** 1.0
**Next.js Version:** 15.1.3
