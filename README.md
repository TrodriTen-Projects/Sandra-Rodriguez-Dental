# Sandra Rodriguez Dental - Website

Professional dental clinic website for Dra. Sandra Liliana Rodriguez Ariza, specializing in oral rehabilitation and prosthodontics in Bogotá, Colombia.

## 🏗️ Tech Stack

- **Framework:** Next.js 15.1.3 (App Router)
- **Language:** TypeScript 5
- **UI Library:** React 19
- **Styling:** Tailwind CSS 3.4.1
- **Font:** DM Sans (Google Fonts)
- **Analytics:** Google Analytics 4, Google Tag Manager, Facebook Pixel
- **Deployment:** Docker-ready

## 📁 Project Structure

```
sandrarodriguezdental/
├── public/                    # Static assets (images, icons, favicon)
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── layout.tsx       # Root layout with navigation & tracking
│   │   ├── page.tsx         # Homepage
│   │   ├── contact/         # Contact page
│   │   ├── cases/           # Success cases page
│   │   └── tratamientos/    # Treatment pages (main content)
│   │       ├── estetica/
│   │       │   └── blanqueamientos/
│   │       └── protesis/
│   │           ├── fija/
│   │           ├── removible/
│   │           ├── sobredientes/
│   │           ├── sobreimplantes/
│   │           └── coronas/
│   ├── components/
│   │   ├── navbar/          # Navigation components
│   │   ├── footer/          # Footer component
│   │   ├── heros/           # Hero sections
│   │   ├── buttons/         # CTA and interactive buttons
│   │   ├── contact/         # Contact information components
│   │   ├── cards/           # Card components
│   │   ├── carousels/       # Image carousels
│   │   ├── banners/         # Cookie & Maps consent banners
│   │   └── tratamientos/    # Treatment page layout components
│   ├── data/                # Static data (FAQs, treatments)
│   ├── hooks/               # Custom React hooks
│   ├── translations/        # Internationalization (Spanish)
│   └── constants/           # Shared constants (NEW)
├── docs/                    # Documentation
│   ├── ARCHITECTURE.md      # Detailed architecture guide
│   ├── COMPONENTS.md        # Component catalog
│   └── REFACTORING.md       # Refactoring documentation
└── docker-compose.yml       # Docker configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd sandrarodriguezdental

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

### Docker Deployment

```bash
# Build and run with Docker Compose
docker-compose up --build

# Or build manually
docker build -t sandrarodriguezdental .
docker run -p 3000:3000 sandrarodriguezdental
```

## 📖 Documentation

- **[Architecture Guide](docs/ARCHITECTURE.md)** - Technical architecture, data flow, and routing
- **[Component Catalog](docs/COMPONENTS.md)** - All components with props and usage examples
- **[Refactoring Log](docs/REFACTORING.md)** - Code improvements and optimization decisions

## 🎨 Key Features

### Homepage Sections
- Hero section with call-to-action
- Service cards (experience, patients, specialization)
- Treatment carousel
- Doctor profile with credentials
- Interactive Google Maps
- FAQ accordion
- Persistent WhatsApp button

### Treatment Pages
Each treatment page includes:
- Hero section with background image
- Detailed description sections
- Treatment process with image carousel
- Treatment types comparison
- First visit information
- Call-to-action buttons

### Navigation
- Responsive navbar (desktop/mobile)
- Multi-level dropdown menus
- Mobile hamburger menu with slide-in animation
- Active route highlighting

### Analytics & Tracking
- Google Analytics 4 (GA4)
- Google Tag Manager (GTM)
- Facebook Pixel
- Google Ads conversion tracking
- Event tracking on CTAs

### Performance Optimizations
- React lazy loading for below-fold components
- Next.js Image optimization
- Font optimization with next/font
- Code splitting
- Scroll-triggered animations with IntersectionObserver

## 🔧 Configuration

### Environment Variables

Create `.env.local` for sensitive configuration:

```env
# Analytics (currently hardcoded in components - TODO: migrate)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID=XXXXXXXXXXXXXXX
```

### Contact Information

Contact details are centralized in `/src/constants/index.ts` (post-refactor):
- Phone: +57 321 278 6958
- Location: Bogotá, Colombia
- Social Media: Instagram, Facebook

## 🎯 SEO Configuration

The site includes comprehensive SEO optimization:
- Custom metadata per page
- Open Graph tags
- Sitemap (`/sitemap.ts`)
- Robots.txt (Next.js default)
- Semantic HTML structure
- Alt text on images

## 🌐 Internationalization

Currently supports Spanish (es-ES, es-CO). Structure in place for future i18n expansion.

## 📱 Responsive Design

- Mobile-first approach with Tailwind CSS
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-optimized interactions
- Adaptive navigation (hamburger on mobile)

## 🧪 Code Quality

### TypeScript
- Strict mode enabled
- Type-safe props and interfaces
- Exported types for reusability

### React Best Practices
- Functional components with hooks
- Proper cleanup in useEffect
- Accessibility considerations
- Semantic HTML

### Performance
- Code splitting with React.lazy
- Memoization where needed
- Debounced event handlers
- Optimized images

## 📦 Dependencies

### Production
- `next` - React framework
- `react` & `react-dom` - UI library
- `js-cookie` - Cookie management for consent

### Development
- `typescript` - Type safety
- `tailwindcss` - Utility-first CSS
- `eslint` - Code linting
- `postcss` - CSS processing

## 🤝 Contributing

When contributing, please:
1. Follow existing code patterns
2. Add TypeScript types for all props
3. Use Tailwind CSS for styling
4. Add documentation for new components
5. Test on mobile and desktop viewports

## 📄 License

Private project for Dra. Sandra Liliana Rodriguez Ariza.

## 👨‍💻 Development Team

- **Original Developer:** [TrodriTen](https://trodriten.com/)
- **Current Maintainer:** Dra. Sandra Rodriguez Dental Team

## 🔗 Links

- **Website:** [sandrarodriguezdental.com](https://www.sandrarodriguezdental.com)
- **Instagram:** [@sandrarodriguezdental](https://www.instagram.com/sandrarodriguezdental/)
- **Facebook:** [Profile](https://www.facebook.com/profile.php?id=61571028664278)
- **Location:** [Google Maps](https://maps.app.goo.gl/LrBZ2KhuGBCVw6Ab9)

---

**Last Updated:** January 2025
**Next.js Version:** 15.1.3
**React Version:** 19.0.0
