# Component Catalog

Complete reference for all React components in the Sandra Rodriguez Dental website.

## Table of Contents

### Navigation Components
- [Navbar](#navbar)
- [DesktopMenu](#desktopmenu)
- [MobileMenu](#mobilemenu)
- [DesktopDropdown](#desktopdropdown)
- [MobileDropdown](#mobiledropdown)
- [Logo](#logo)

### Layout Components
- [Footer](#footer)

### Hero Components
- [HomeHero](#homehero)
- [DoctorHero](#doctorhero)
- [FaqHero](#faqhero)
- [MapHero](#maphero)
- [CardsHero](#cardshero)
- [TatamientosHomeHero](#tatamientoshomehero)

### Treatment Components
- [TratamientoLayout](#tratamientolayout)
- [TratamientoHero](#tratamientohero)
- [TratamientoSection](#tratamientosection)
- [TratamientoProceso](#tratamientoproceso)
- [TratamientoTipos](#tratamientotipos)
- [FirstVisitSection](#firstvisitsection)
- [ImageCarousel](#imagecarousel)

### Button Components
- [WhatsappButton](#whatsappbutton)
- [WhatsappButtonCTA](#whatsappbuttoncta)
- [MobileMenuButton](#mobilemenubutton)

### Contact Components
- [ContactIcons](#contacticons)
- [SocialIcons](#socialicons)

### Card Components
- [StatsCard](#statscard)

### Banner Components
- [CookieConsent](#cookieconsent)
- [GoogleMapsConsent](#googlemapsconsent)

### Analytics Components
- [GoogleAnalytics](#googleanalytics)
- [GoogleTagManager](#googletagmanager)
- [FacebookPixel](#facebookpixel)

### Utility Components
- [SectionTitle](#sectiontitle)

---

## Navigation Components

### Navbar

**Path:** `/src/components/navbar/Navbar.tsx`

**Purpose:** Main navigation component that renders the appropriate menu based on viewport size.

**Type:** Container component with local state

**Props:** None

**State:**
```typescript
isOpen: boolean  // Controls mobile menu visibility
```

**Usage:**
```tsx
<Navbar />
```

**Children:**
- DesktopMenu (visible on md+ screens)
- MobileMenu (visible on <md screens)

**Notes:**
- "use client" component
- Fixed positioning at top of page
- Contains mysterious invisible div (`.text-[#efffff]`) - likely layout hack
- Mobile menu state managed here and passed to children

---

### DesktopMenu

**Path:** `/src/components/navbar/DesktopMenu.tsx`

**Purpose:** Desktop navigation menu with dropdown support.

**Props:** None (reads from `navbarLinks.ts`)

**Dependencies:**
- `navbarLinks` - Navigation structure
- `useAnalytics` - Event tracking
- `useGoogleAdsConversion` - Conversion tracking

**Usage:**
```tsx
<DesktopMenu />
```

**Features:**
- Multi-level dropdown menus
- Active route highlighting
- WhatsApp CTA button (last item)
- Analytics tracking on clicks

**Issues:**
- ⚠️ **Anti-pattern:** Wraps `<a>` tags in `<button>` elements
- Hardcoded WhatsApp number
- Fragile logic depending on array position for special styling

**Example of dropdown item:**
```tsx
{link.subLinks ? (
  <DesktopDropdown link={link} />
) : (
  <Link href={link.href}>{link.label}</Link>
)}
```

---

### MobileMenu

**Path:** `/src/components/navbar/MobileMenu.tsx`

**Purpose:** Mobile slide-in menu with backdrop.

**Props:**
```typescript
interface MobileMenuProps {
  isOpen: boolean;
  onClose?: () => void;
}
```

**State:**
```typescript
mounted: boolean  // Prevents hydration mismatches
```

**Usage:**
```tsx
<MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
```

**Features:**
- Slide-in animation from right
- Backdrop overlay
- Nested dropdowns (accordion style)
- Active route highlighting
- SSR-safe rendering

**Styling:**
- Fixed positioning
- z-index: 50
- Backdrop blur effect
- Smooth transitions

---

### DesktopDropdown

**Path:** `/src/components/navbar/DesktopDropdown.tsx`

**Purpose:** Dropdown menu for desktop navigation with nested sub-menus.

**Props:**
```typescript
interface DesktopDropdownProps {
  link: NavLink;  // Navigation link with subLinks
}
```

**State:**
```typescript
isOpen: boolean         // Dropdown visibility
activeSubLink: string | null  // Active nested dropdown
```

**Usage:**
```tsx
<DesktopDropdown link={tratamientosLink} />
```

**Features:**
- Hover to open/close
- Two-level nesting (category → items)
- Grid layout for sub-items
- Image thumbnails in sub-items

**Interaction:**
- Mouse enter/leave to toggle
- Click on main item prevented (not navigable)
- Sub-items are navigable links

**Issues:**
- ⚠️ Uses `<a>` with `preventDefault` instead of proper semantic button
- No keyboard navigation support
- Complex state management

---

### MobileDropdown

**Path:** `/src/components/navbar/MobileDropdown.tsx`

**Purpose:** Accordion-style dropdown for mobile navigation.

**Props:**
```typescript
interface MobileDropdownProps {
  link: NavLink;
  onClose?: () => void;
  isFirst?: boolean;  // For conditional border styling
}
```

**State:**
```typescript
isOpen: boolean              // Main dropdown open/close
openSubLink: string | null   // Active nested accordion
```

**Usage:**
```tsx
<MobileDropdown
  link={tratamientosLink}
  onClose={closeMenu}
  isFirst={false}
/>
```

**Features:**
- Click to expand/collapse
- Nested accordion for sub-categories
- Smooth height transitions
- Closes menu on item selection

**Styling:**
- Background color changes per level
- Border-top conditional on `isFirst`
- Icons for expand/collapse state

---

### Logo

**Path:** `/src/components/navbar/Logo.tsx`

**Purpose:** Reusable logo component with customizable size and color variant.

**Props:**
```typescript
interface LogoProps {
  width?: number;
  isWhite?: boolean;
}
```

**Default Props:**
```typescript
width: 200
isWhite: false
```

**Usage:**
```tsx
<Logo width={150} isWhite={true} />
```

**Features:**
- Next.js Image optimization
- SVG logo
- Responsive sizing
- White variant for dark backgrounds

**Asset:**
- Default: `/logo.svg`
- White variant: `/logo-white.svg`

---

## Layout Components

### Footer

**Path:** `/src/components/footer/Footer.tsx`

**Purpose:** Site footer with contact information, social links, and credits.

**Props:** None

**Usage:**
```tsx
<Footer />
```

**Sections:**
1. **Contact Information** - Uses ContactIcons component
2. **Credits** - Copyright and developer attribution

**Features:**
- Responsive layout
- Dark background
- Links to social media
- External link to developer portfolio

**Issues:**
- ⚠️ Hardcoded year (2025) instead of dynamic `new Date().getFullYear()`

---

## Hero Components

### HomeHero

**Path:** `/src/components/heros/HomeHero.tsx`

**Purpose:** Main homepage hero section with background image and CTA.

**Props:** None (reads from translations.json)

**Dependencies:**
```typescript
import t from "../../translations/es/translations.json";
```

**Usage:**
```tsx
<HomeHero />
```

**Features:**
- Full viewport height
- Background image with Next.js Image
- Gradient overlay (teal to transparent)
- CTA button to WhatsApp
- Responsive typography

**Content:**
- `t.home.hero.title` - Main heading
- `t.home.hero.subtitle` - Subheading

**Styling:**
- `min-h-screen` - Full viewport
- Gradient: `from-[#005268]/80 to-transparent`
- Background image: `/home.webp`

---

### DoctorHero

**Path:** `/src/components/heros/DoctorHero.tsx`

**Purpose:** "About the Doctor" section with credentials and photo.

**Props:** None (hardcoded content)

**Usage:**
```tsx
<DoctorHero />
```

**Features:**
- Two-column layout (text + image)
- Badge with specialization
- Bullet list of credentials
- Responsive design

**Content:**
- Title: "Dra. Sandra Liliana Rodriguez Ariza"
- Credentials: Education, specialization, memberships
- Image: Doctor portrait

**Layout:**
- Desktop: Image right, text left
- Mobile: Stacked (image top)

---

### FaqHero

**Path:** `/src/components/heros/FaqHero.tsx`

**Purpose:** FAQ section with accordion functionality.

**Props:**
```typescript
interface FaqHeroProps {
  title?: string;
  faqs: FaqItem[];
}

interface FaqItem {
  question: string;
  answer: string;
}
```

**State:**
```typescript
openIndex: number  // Currently open FAQ (default: 0)
```

**Usage:**
```tsx
<FaqHero
  title="Preguntas Frecuentes"
  faqs={faqData}
/>
```

**Features:**
- Accordion with single item open at a time
- Smooth expand/collapse animations
- First item open by default
- Click to toggle

**Interaction:**
- Click question to expand/collapse
- + icon when closed, × icon when open

**Data Source:** `/src/data/faqData.ts`

---

### MapHero

**Path:** `/src/components/heros/MapHero.tsx`

**Purpose:** Google Maps embed showing clinic location.

**Props:** None

**Usage:**
```tsx
<MapHero />
```

**Features:**
- Embedded Google Maps iframe
- Responsive container
- Rounded corners
- Shadow effect

**Issues:**
- ⚠️ **Security:** Hardcoded iframe src (should use GoogleMapsConsent properly)
- Inline styles on iframe
- No loading state

**Location:** Cra. 15 #88-64, Bogotá, Colombia

---

### CardsHero

**Path:** `/src/components/heros/CardsHero.tsx`

**Purpose:** Grid of feature/statistics cards on homepage.

**Props:**
```typescript
interface CardsHeroProps {
  data?: CardsHeroData;
}

interface CardsHeroData {
  sectionTitle: string;
  smallCardData: StatsCardProps[];
  mediumCardData: StatsCardProps[];
}
```

**Usage:**
```tsx
<CardsHero data={customData} />
// Or use default data:
<CardsHero />
```

**Default Cards:**
1. **20 Años** - Experience
2. **1000+ Pacientes** - Satisfied patients
3. **Especialización** - In prosthodontics

**Layout:**
- Responsive grid
- Mix of small and medium cards
- Staggered animation delays

**Features:**
- Scroll animations
- Customizable gradients per card
- Icon support

---

### TatamientosHomeHero

**Path:** `/src/components/heros/TatamientosHomeHero.tsx`

**Purpose:** Horizontal scrolling carousel of treatment cards.

**Props:** None (reads from navbarLinks)

**State:**
```typescript
items: SubLinkItem[]  // Cloned treatment items for infinite scroll
```

**Usage:**
```tsx
<TatamientosHomeHero />
```

**Features:**
- Infinite scroll carousel
- Auto-scroll animation
- Pause on hover
- Treatment cards with images
- CTA to view more

**Issues:**
- ⚠️ **Critical:** `console.log(treatments)` in production code
- Complex scroll logic (could be simplified)
- Gets data from navigation instead of dedicated source
- Performance concerns with dynamic calculations

**Animation:**
- CSS keyframe animation
- Smooth continuous scroll
- Duplicated items for seamless loop

---

## Treatment Components

### TratamientoLayout

**Path:** `/src/components/tratamientos/TratamientoLayout.tsx`

**Purpose:** Master layout wrapper for all treatment pages.

**Props:**
```typescript
interface TratamientoLayoutProps {
  children: React.ReactNode;
  heroTitle: string;
  heroSubtitle?: string;
  heroImage: string;
  ubicacion?: string;
  imagenUbicacion: string;
}
```

**Usage:**
```tsx
<TratamientoLayout
  heroTitle="Blanqueamiento Dental"
  heroSubtitle="Sonrisa más blanca y brillante"
  heroImage="/tratamientos/blanqueamiento.jpg"
  imagenUbicacion="/ubicacion.jpg"
>
  <TratamientoSection {...sectionData} />
  <TratamientoProceso {...procesoData} />
  {/* More sections */}
</TratamientoLayout>
```

**Features:**
- Lazy loads all child sections except hero
- IntersectionObserver for scroll animations
- Scroll to top on mount
- Suspense boundaries with fallbacks

**Sections Included:**
1. TratamientoHero (eager loaded)
2. {children} (custom sections)
3. Lazy-loaded common sections

---

### TratamientoHero

**Path:** `/src/components/tratamientos/TratamientoHero.tsx`

**Purpose:** Hero section for treatment pages.

**Props:**
```typescript
interface TratamientoHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  imageAlt?: string;
  ctaText?: string;
  ctaHref?: string;
}
```

**Usage:**
```tsx
<TratamientoHero
  title="Prótesis Fija"
  subtitle="Restauración permanente"
  image="/tratamientos/fija.jpg"
  imageAlt="Prótesis fija dental"
  ctaText="Agendar Consulta"
  ctaHref="https://wa.me/573212786958"
/>
```

**Features:**
- Full viewport height
- Background image with overlay
- Gradient (teal to transparent)
- Optional CTA button
- Responsive typography

---

### TratamientoSection

**Path:** `/src/components/tratamientos/TratamientoSection.tsx`

**Purpose:** Content section with text and colored info box.

**Props:**
```typescript
interface TratamientoSectionProps {
  titulo: string;
  descripcion: string[];  // Array of paragraphs
  tituloSecundario?: string;
  textoBox: string;
  colorBox: string;  // Tailwind color class
  image?: string;    // Currently unused
}
```

**Usage:**
```tsx
<TratamientoSection
  titulo="¿Qué es la Prótesis Fija?"
  descripcion={[
    "Primera descripción...",
    "Segunda descripción..."
  ]}
  tituloSecundario="Beneficios"
  textoBox="Restauración permanente y natural"
  colorBox="bg-teal-500"
/>
```

**Layout:**
- Two-column on desktop
- Stacked on mobile
- Colored box on right
- Text content on left

**Issues:**
- ⚠️ Commented-out image element (image prop unused)

---

### TratamientoProceso

**Path:** `/src/components/tratamientos/TratamientoProceso.tsx`

**Purpose:** Display treatment process steps with image carousel.

**Props:**
```typescript
interface TratamientoProcesoProps {
  pasos: string[];           // Step descriptions
  imagenes: string[];        // Image paths
  tituloSecundario?: string;
  altPrefix?: string;        // For image alt text
}
```

**Usage:**
```tsx
<TratamientoProceso
  pasos={[
    "Evaluación inicial",
    "Preparación dental",
    "Colocación"
  ]}
  imagenes={[
    "/process/step1.jpg",
    "/process/step2.jpg",
    "/process/step3.jpg"
  ]}
  tituloSecundario="Proceso"
  altPrefix="Paso de blanqueamiento"
/>
```

**Features:**
- Numbered steps (1, 2, 3...)
- Image carousel
- Responsive layout
- Clean step indicators

---

### TratamientoTipos

**Path:** `/src/components/tratamientos/TratamientoTipos.tsx`

**Purpose:** Comparison table of treatment types/options.

**Props:**
```typescript
interface TratamientoTiposProps {
  titulo: string;
  opciones: TipoOpcion[];
}

interface TipoOpcion {
  nombre: string;
  descripcion: string;
}
```

**Usage:**
```tsx
<TratamientoTipos
  titulo="Tipos de Prótesis"
  opciones={[
    {
      nombre: "Fija",
      descripcion: "Permanente, no removible..."
    },
    {
      nombre: "Removible",
      descripcion: "Puede quitarse..."
    }
  ]}
/>
```

**Layout:**
- Table format on desktop
- Card layout on mobile
- Fixed column widths

**Issues:**
- ⚠️ May cause horizontal scroll on small screens

---

### FirstVisitSection

**Path:** `/src/components/tratamientos/FirstVisitSection.tsx`

**Purpose:** Information about what to expect on first visit.

**Props:**
```typescript
interface FirstVisitSectionProps {
  titulo: string;
  descripcion: string[];
  valores: ValueItem[];
}

interface ValueItem {
  icon: 'home' | 'clock' | 'smile';  // Only 3 supported
  title: string;
  description: string;
}
```

**Usage:**
```tsx
<FirstVisitSection
  titulo="Primera Visita"
  descripcion={[
    "En su primera visita...",
    "Realizaremos..."
  ]}
  valores={[
    {
      icon: 'clock',
      title: 'Duración',
      description: '45-60 minutos'
    }
  ]}
/>
```

**Features:**
- Icon + text cards
- Responsive grid
- Custom icons (home, clock, smile)

**Issues:**
- ⚠️ Limited icon set (switch statement)
- Should use icon component library

---

### ImageCarousel

**Path:** `/src/components/tratamientos/ImageCarousel.tsx`

**Purpose:** Image carousel for treatment process visualization.

**Props:**
```typescript
interface ImageCarouselProps {
  images: string[];
  altPrefix?: string;
}
```

**State:**
```typescript
currentIndex: number  // Current slide index
```

**Usage:**
```tsx
<ImageCarousel
  images={['/img1.jpg', '/img2.jpg', '/img3.jpg']}
  altPrefix="Paso del proceso"
/>
```

**Features:**
- Next/Previous navigation
- Dot indicators
- Smooth transitions
- Responsive

**Issues:**
- ⚠️ Navigation arrows hidden (`className="hidden"`)
- ⚠️ Dots hidden (`className="hidden"`)
- Effectively just shows static image

---

## Button Components

### WhatsappButton

**Path:** `/src/components/buttons/WhatsappButton.tsx`

**Purpose:** Floating WhatsApp button with different behavior on mobile/desktop.

**Export:** Named export `WhatsAppButton`

**Props:** None

**State:**
```typescript
isScrolled: boolean  // Show/hide based on scroll
isMobile: boolean    // Device detection
```

**Usage:**
```tsx
<WhatsAppButton />
```

**Features:**
- Floating bottom-right button
- Different text on mobile vs desktop
- Appears after scrolling 100px
- WhatsApp icon
- Green background (#25D366)

**Issues:**
- ⚠️ **Performance:** Two separate resize event listeners
- ⚠️ Hardcoded phone number
- ⚠️ Inline styles for dynamic positioning

---

### WhatsappButtonCTA

**Path:** `/src/components/buttons/WhatsappButtonCTA.tsx`

**Purpose:** Customizable WhatsApp CTA button for sections.

**Props:**
```typescript
interface WhatsappButtonCTAProps {
  text: string;
  phoneNumber?: string;
  isPrimary?: boolean;
  componentName?: string;  // For analytics
}
```

**Usage:**
```tsx
<WhatsappButtonCTA
  text="Agendar Consulta"
  phoneNumber="+573212786958"
  isPrimary={true}
  componentName="hero_section"
/>
```

**Variants:**
- **Primary:** Green background, white text
- **Secondary:** White background, green text

**Features:**
- Analytics tracking on click
- Google Ads conversion tracking
- WhatsApp deep link

**Issues:**
- ⚠️ **Anti-pattern:** Button wrapping anchor tag
- ⚠️ `preventDefault` but doesn't actually prevent
- ⚠️ Returns false from onClick (outdated)

---

### MobileMenuButton

**Path:** `/src/components/buttons/MobileMenuButton.tsx`

**Purpose:** Hamburger menu button for mobile navigation.

**Props:**
```typescript
interface MobileMenuButtonProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}
```

**Usage:**
```tsx
<MobileMenuButton
  isOpen={isMenuOpen}
  setIsOpen={setIsMenuOpen}
/>
```

**Features:**
- Animated hamburger icon
- Transforms to X when open
- Accessible labels
- Click to toggle menu

**Styling:**
- Three horizontal lines
- Smooth rotation/fade transitions
- Clean, minimal design

---

## Contact Components

### ContactIcons

**Path:** `/src/components/contact/ContactIcons.tsx`

**Purpose:** Display contact information with icons and optional social icons.

**Exported Types:**
```typescript
export interface ContactInfo {
  phone: string;
  whatsapp: string;
  address: string;
  addressUrl: string;
  instagram: string;
  facebook: string;
}

export const defaultContactInfo: ContactInfo = { /* ... */ };
```

**Props:**
```typescript
interface ContactIconsProps {
  contactInfo?: ContactInfo;
  className?: string;
  iconClassName?: string;
  iconSocialClassName?: string;
  vertical?: boolean;
  showSocialIcons?: boolean;
}
```

**Usage:**
```tsx
<ContactIcons
  contactInfo={customContact}
  vertical={true}
  showSocialIcons={true}
  className="text-white"
/>
```

**Features:**
- Phone, WhatsApp, Location links
- Optional social media icons
- Vertical or horizontal layout
- Customizable styling
- SVG icons

**Default Data:**
- Phone: +57 321 278 6958
- Address: Cra. 15 #88 - 64 607, Bogotá
- Instagram & Facebook links

**Issues:**
- ⚠️ Duplicates social icons from SocialIcons component
- ⚠️ SVG icons inline (should extract)

---

### SocialIcons

**Path:** `/src/components/contact/SocialIcons.tsx`

**Purpose:** Display only social media icons (Instagram, Facebook).

**Props:**
```typescript
interface SocialIconsProps {
  contactInfo?: ContactInfo;
  className?: string;
  iconClassName?: string;
}
```

**Usage:**
```tsx
<SocialIcons
  contactInfo={customContact}
  className="justify-center"
  iconClassName="w-8 h-8"
/>
```

**Features:**
- Instagram icon
- Facebook icon
- Horizontal layout
- Hover effects

**Issues:**
- ⚠️ Duplicates SVG from ContactIcons

---

## Card Components

### StatsCard

**Path:** `/src/components/cards/StatsCard.tsx`

**Purpose:** Display statistics or features with gradient background.

**Props:**
```typescript
interface StatsCardProps {
  title: string;
  subtitle: string;
  opacity: string;       // Tailwind opacity class
  gradient: string;      // 'to-r' or 'to-b'
  icon?: React.ReactNode;
}
```

**Usage:**
```tsx
<StatsCard
  title="20"
  subtitle="Años de Experiencia"
  opacity="opacity-90"
  gradient="to-r"
  icon={<IconComponent />}
/>
```

**Features:**
- Gradient background (teal colors)
- Customizable opacity
- Gradient direction (horizontal/vertical)
- Optional icon
- Responsive sizing

---

## Banner Components

### CookieConsent

**Path:** `/src/components/banners/CookieConsent.tsx`

**Purpose:** GDPR cookie consent banner.

**Props:** None

**State:**
```typescript
cookieConsentIsTrue: boolean
```

**Usage:**
```tsx
<CookieConsent />
```

**Features:**
- Fixed bottom banner
- Accept button
- Close button (X)
- Sets cookies on acceptance
- Persistent across sessions

**Cookies Set:**
- `cookie_consent_is_true`
- Attempts to set Google Maps cookies (won't work - SOP issue)

**Issues:**
- ⚠️ **Major:** `setGoogleMapsCookies` tries to set `.google.com` cookies (impossible due to same-origin policy)
- ⚠️ Cookie Policy link points to "#" (not implemented)
- ⚠️ Close button removes consent entirely

---

### GoogleMapsConsent

**Path:** `/src/components/banners/GoogleMapsConsent.tsx`

**Purpose:** Wrapper that checks cookie consent before showing Google Maps.

**Props:**
```typescript
interface GoogleMapsConsentProps {
  children: React.ReactNode;
}
```

**State:**
```typescript
consentGiven: boolean
```

**Usage:**
```tsx
<GoogleMapsConsent>
  <iframe src="google-maps-url" />
</GoogleMapsConsent>
```

**Features:**
- Checks `cookie_consent_is_true` cookie
- Shows fallback if no consent
- Renders children if consent given

**Fallback:**
- Message about cookies
- Link to accept cookies

**Issues:**
- ⚠️ **Duplicate useEffect** - checks same cookie twice
- ⚠️ No polling - won't update if user accepts while on page

---

## Analytics Components

### GoogleAnalytics

**Path:** `/src/components/GoogleAnalytics.tsx`

**Purpose:** Google Analytics 4 integration.

**Props:** None

**Usage:**
```tsx
<GoogleAnalytics />
```

**Features:**
- Loads GA4 script
- Initializes gtag
- Tracks pageviews
- afterInteractive loading strategy

**Configuration:**
- Hardcoded GA ID: `G-2ZQDWY58KZ`
- Global dataLayer initialization

**Issues:**
- ⚠️ GA ID should be environment variable

---

### GoogleTagManager

**Path:** `/src/components/GoogleTagManager.tsx`

**Purpose:** Google Tag Manager integration.

**Props:** None

**Usage:**
```tsx
<GoogleTagManager />
```

**Features:**
- Loads GTM script
- Initializes dataLayer
- afterInteractive loading strategy

**Configuration:**
- Hardcoded GTM ID: `GTM-PWZJRJM7`

**Issues:**
- ⚠️ GTM ID should be environment variable
- ⚠️ Duplicate dataLayer declaration (also in GoogleAnalytics)

---

### FacebookPixel

**Path:** `/src/components/FacebookPixel.tsx`

**Purpose:** Meta (Facebook) Pixel integration.

**Props:** None

**Usage:**
```tsx
<FacebookPixel />
```

**Features:**
- Loads Facebook Pixel script
- Tracks PageView event
- 1x1 tracking pixel image fallback
- afterInteractive loading strategy

**Configuration:**
- Hardcoded Pixel ID: `1056724835789657`

**Issues:**
- ⚠️ Pixel ID should be environment variable
- Uses Next.js Image for 1x1 pixel (could be `<img>`)

---

## Utility Components

### SectionTitle

**Path:** `/src/components/SectionTitle.tsx`

**Purpose:** Reusable section title component with consistent styling.

**Props:**
```typescript
interface SectionTitleProps {
  header: 'h1' | 'h2';
  uppercase?: boolean;
  className?: string;
  children: React.ReactNode;
}
```

**Usage:**
```tsx
<SectionTitle header="h1" uppercase={true}>
  Nuestros Servicios
</SectionTitle>

<SectionTitle header="h2" className="text-white">
  {title}
</SectionTitle>
```

**Features:**
- Polymorphic (renders h1 or h2)
- Semantic HTML
- Optional uppercase
- Customizable classes
- Consistent font sizing

**Default Styling:**
- Large, bold text
- Dark color
- Optional uppercase transform

---

## Custom Hooks

### useAnalytics

**Path:** `/src/hooks/useAnalytics.ts`

**Purpose:** Google Analytics event tracking.

**Returns:**
```typescript
{
  trackEvent: (eventName: string, eventParams?: object) => void
}
```

**Usage:**
```tsx
const { trackEvent } = useAnalytics();

trackEvent('contact_whatsapp', {
  source: 'whatsapp_cta',
  component_name: 'hero_section'
});
```

**Features:**
- Type-safe event tracking
- Checks for gtag availability
- Graceful failure if gtag not loaded

---

### useGoogleAdsConversion

**Path:** `/src/hooks/useGoogleAdsConversion.ts`

**Purpose:** Google Ads conversion tracking.

**Returns:**
```typescript
{
  reportConversion: (url: string, label?: string) => boolean
}
```

**Usage:**
```tsx
const { reportConversion } = useGoogleAdsConversion();

reportConversion(
  'https://wa.me/573212786958',
  'cta_button_hero'
);
```

**Features:**
- Reports conversion to Google Ads
- Returns false (legacy pattern)
- Checks for gtag availability

---

## Data Structures

### navbarLinks.ts

**Path:** `/src/components/navbar/navbarLinks.ts`

**Purpose:** Define navigation structure.

**Types:**
```typescript
export interface NavLink {
  key: string;
  label: string;
  href?: string;
  subLinks?: SubLink[];
  disabled?: boolean;
}

export interface SubLink {
  key: string;
  label: string;
  href?: string;
  subLinkItems?: SubLinkItem[];
  disabled?: boolean;
}

export interface SubLinkItem {
  key: string;
  label: string;
  href: string;
  image?: string;
  disabled?: boolean;
}
```

**Usage:**
```typescript
import { navbarLinks } from '@/components/navbar/navbarLinks';
```

**Issues:**
- ⚠️ Contains image paths but not consistently used
- ⚠️ Commented-out items (dead code)
- ⚠️ Used as data source for TatamientosHomeHero (mixing concerns)

---

## Best Practices When Using Components

### 1. Props Destructuring
```tsx
// Good ✓
const MyComponent = ({ title, subtitle }: Props) => { ... }

// Avoid
const MyComponent = (props: Props) => { ... }
```

### 2. Default Props
```tsx
// Good ✓
const Logo = ({ width = 200, isWhite = false }: LogoProps) => { ... }
```

### 3. Type Safety
```tsx
// Good ✓
interface MyComponentProps {
  required: string;
  optional?: number;
}
```

### 4. Lazy Loading
```tsx
// Good ✓ - Below-fold components
const DoctorHero = lazy(() => import("@/components/heros/DoctorHero"));

<Suspense fallback={<div>Loading...</div>}>
  <DoctorHero />
</Suspense>
```

### 5. Cleanup in useEffect
```tsx
// Good ✓
useEffect(() => {
  const handler = () => { ... };
  window.addEventListener('scroll', handler);
  return () => window.removeEventListener('scroll', handler);
}, []);
```

---

**Last Updated:** January 2025
**Components Total:** 40+
**Documentation Version:** 1.0
