# Sandra Rodríguez Dental

Sitio web de la **Dra. Sandra Liliana Rodríguez Ariza**, especialista en
rehabilitación oral y prostodoncia en Bogotá, Colombia.

🔗 **Producción:** [sandrarodriguezdental.com](https://www.sandrarodriguezdental.com)

---

## Stack

| | |
|---|---|
| **Framework** | Next.js 15.5.21 (App Router) |
| **Lenguaje** | TypeScript 5.9 (`strict`) |
| **UI** | React 19.2 |
| **Estilos** | Tailwind CSS 3.4 |
| **Tipografía** | DM Sans (`next/font/google`, self-hosted en build) |
| **Salida** | Export estático (`output: 'export'` → carpeta `out/`) |
| **Hosting** | Cloudflare Pages |
| **CI/CD** | GitHub Actions |

### Lo primero que hay que saber: es un sitio 100% estático

`next.config.ts` usa `output: 'export'`. El build produce HTML/CSS/JS planos en
`out/`; **no hay servidor Node en producción**. Esto tiene tres consecuencias
prácticas:

- **No existen** Server Actions, Route Handlers (`/api`), ISR ni SSR.
- El **optimizador de imágenes de Next está desactivado** (`images.unoptimized`).
  Las imágenes de `/public` se sirven tal cual, así que hay que optimizarlas
  a mano: `npm run optimize:images`.
- **`npm start` no funciona.** Para previsualizar el build: `npx serve out`.

`trailingSlash: true` hace que cada ruta se emita como `/ruta/index.html`, que es
lo que Cloudflare Pages espera.

---

## Arranque

**Requisitos:** Node.js 20+ y npm.

```bash
npm ci
```

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

### Scripts

| Script | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo (Turbopack) |
| `npm run build` | Build de producción → `out/` |
| `npm run lint` | ESLint (`next/core-web-vitals` + `next/typescript`) |
| `npm run optimize:images` | Redimensiona y recomprime `/public` en sitio (ver abajo) |
| `npm start` | ⚠️ No aplica con export estático |

### Verificar como lo hace el CI

Antes de abrir un PR, esto es exactamente lo que corre GitHub Actions:

```bash
npm ci && npm run lint && npx tsc --noEmit && npm audit --audit-level=high && npm run build
```

---

## Variables de entorno

Todas son `NEXT_PUBLIC_*`: se incrustan en el bundle del cliente en build time y
**son visibles en el navegador**. No son secretos — viven en el entorno para
poder cambiarlas por ambiente sin tocar código.

```bash
cp .env.example .env.local
```

| Variable | Uso |
|---|---|
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 (`G-…`) |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager (`GTM-…`) |
| `NEXT_PUBLIC_FB_PIXEL_ID` | Meta / Facebook Pixel |
| `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID` | Google Ads (`AW-…`) |
| `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL` | Etiqueta de conversión de Ads |

Se leen en un único punto, [`src/lib/env.ts`](src/lib/env.ts). **Si una variable
falta, su script de tracking simplemente no se renderiza** — degradación segura,
sin errores en consola.

En producción se definen como *Variables* (no *Secrets*) del repositorio en
GitHub → Settings → Secrets and variables → Actions. Ver
[`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md).

---

## Estructura

```
├── .github/
│   ├── workflows/ci-cd.yml      # verify (lint · tipos · audit · build) + deploy
│   ├── workflows/codeql.yml     # SAST semanal
│   └── dependabot.yml           # actualizaciones npm + Actions
├── docs/
│   └── DEPLOYMENT.md            # despliegue y CI/CD (vigente)
├── public/                      # assets servidos tal cual
│   └── _headers                 # CSP y cabeceras de seguridad (Cloudflare)
├── scripts/
│   └── optimize-images.mjs      # optimizador de imágenes (sharp)
└── src/
    ├── app/                     # App Router — una carpeta por ruta
    │   ├── layout.tsx           # layout raíz: metadata, fuente, navbar, footer
    │   ├── page.tsx             # home
    │   ├── globals.css          # Tailwind + variables CSS + utilidades
    │   ├── sitemap.ts           # sitemap.xml generado en build
    │   ├── robots.ts            # robots.txt generado en build
    │   ├── blog/[slug]/         # posts (SSG vía generateStaticParams)
    │   └── tratamientos/        # 8 páginas de tratamiento + hub
    ├── components/
    │   ├── analytics/           # orquestador de tracking
    │   ├── banners/, blog/, buttons/, cards/, carousels/,
    │   ├── contact/, footer/, heros/, navbar/, tratamientos/
    │   └── ui/icons/            # librería de iconos SVG
    ├── constants/               # config de UI (colores, breakpoints, cookies)
    ├── content/                 # ← TODO lo que el sitio *dice*
    ├── hooks/                   # hooks reutilizables
    └── lib/env.ts               # config de tracking desde el entorno
```

### Separación de responsabilidades

Tres carpetas parecidas que **no** son intercambiables:

| Carpeta | Contiene | Ejemplo |
|---|---|---|
| `src/content/` | Lo que el sitio *dice* — copy, contacto, marca, FAQs, blog | `CONTACT.PHONE`, `faqData` |
| `src/constants/` | Config *técnica* de UI | `COLORS`, `BREAKPOINTS`, `COOKIES` |
| `src/lib/env.ts` | Config de *tracking* desde el entorno | `TRACKING.GA_ID` |

Todo el contenido se importa desde un único barrel:

```ts
import { CONTACT, BRAND, faqData, getAllPosts } from '@/content';
```

El alias `@/*` apunta a `./src/*` (definido en `tsconfig.json`).

---

## Rutas

| Ruta | Origen |
|---|---|
| `/` | `app/page.tsx` |
| `/tratamientos` | Hub — la grilla se genera desde `navbarLinks` |
| `/tratamientos/protesis/{fija,removible,sobredientes,sobreimplantes}` | 4 páginas |
| `/tratamientos/protesis/coronas/{nometal,porcelana,sobreimplante}` | 3 páginas |
| `/tratamientos/estetica/blanqueamientos` | 1 página |
| `/blog` · `/blog/[slug]` | Índice + 4 posts (SSG) |
| `/contact` | Contacto y horarios |
| `/cases` | ⚠️ Ver *Limitaciones conocidas* |

---

## Tareas frecuentes

### Cambiar teléfono, dirección o redes sociales

Un solo archivo: [`src/content/site.ts`](src/content/site.ts). De ahí lo
consumen navbar, footer, página de contacto, botones de WhatsApp y el JSON-LD.

### Cambiar el mensaje que se pre-rellena en WhatsApp

También en `site.ts`: `WHATSAPP_DEFAULT_MESSAGE` (genérico) y
`whatsAppTreatmentMessage()` (por tratamiento).

### Agregar una página de tratamiento

1. Crea `src/app/tratamientos/<categoría>/<nombre>/`.
2. Dentro, un archivo de datos (`<nombre>.ts`) que exporte un objeto con la forma
   de `TratamientoProps` — cópialo de un tratamiento existente como plantilla.
3. Un `page.tsx` que exporte `metadata` **y** renderice
   `<TratamientoLayout {...datos} />`.
4. Registra el enlace en
   [`src/components/navbar/navbarLinks.ts`](src/components/navbar/navbarLinks.ts)
   — el navbar **y** la grilla del hub `/tratamientos` se generan desde ahí.
5. Añade la descripción corta y la categoría en `tratamientosMeta`, dentro de
   [`TratamientosHubPage.tsx`](src/components/tratamientos/TratamientosHubPage.tsx).
6. Añade la URL a [`src/app/sitemap.ts`](src/app/sitemap.ts).

### Agregar un post al blog

Añade un objeto al array `blogPosts` de
[`src/content/blog.ts`](src/content/blog.ts), respetando la interfaz `BlogPost`.
La ruta se genera sola vía `generateStaticParams`. La imagen de portada debe
existir en `/public`. Añade también la URL al sitemap.

### Subir imágenes nuevas

Colócalas en `/public` y ejecuta:

```bash
npm run optimize:images
```

Reescala a máximo 1600 px de ancho y recomprime a calidad 72, **en sitio**. Los
originales se respaldan en `./image-originals/` (fuera de `/public`, ignorado por
git, no se despliega). Es idempotente: re-ejecutarlo no degrada las imágenes ya
procesadas.

---

## Analítica y tracking

[`src/components/analytics/Analytics.tsx`](src/components/analytics/Analytics.tsx)
monta cuatro destinos, en este orden:

1. **Google Tag Manager**
2. **Google Analytics 4** — carga la librería `gtag.js` compartida
3. **Google Ads** — reutiliza esa librería y registra el destino `AW-…`
   (el `gtag('config', …)` propio es obligatorio: sin él Ads descarta las
   conversiones en silencio)
4. **Meta Pixel**

Los eventos se emiten con `useAnalytics()`; las conversiones de clic en WhatsApp
con `useGoogleAdsConversion()`.

> ⚠️ **Sin gate de consentimiento.** Los cuatro scripts cargan en el primer paint
> para todos los visitantes. El banner de cookies existe todavía como componente
> ([`banners/CookieConsent.tsx`](src/components/banners/CookieConsent.tsx)) pero
> **ya no está conectado a nada**. Fue una decisión explícita para no perder
> atribución de conversiones. Ten presente que la Ley 1581/2012 y el Decreto
> 1377/2013 exigen autorización previa e informada, y que el sitio también recibe
> tráfico desde la UE.

---

## SEO

- **Metadata** por página vía `export const metadata` en cada `page.tsx`.
- **JSON-LD** en [`StructuredData.tsx`](src/components/StructuredData.tsx):
  schemas `Dentist` (dirección, geo, horarios, redes) y `Organization`.
- **`sitemap.xml`** y **`robots.txt`** generados en build (`sitemap.ts` /
  `robots.ts`, ambos con `dynamic = 'force-static'`, requisito del export).
- **Open Graph** e imagen social configurados en el layout raíz.
- Idioma: `es-CO`. El sitio es monolingüe.

---

## Seguridad

- **CSP y cabeceras** en [`public/_headers`](public/_headers), aplicadas por
  Cloudflare Pages: `frame-ancestors 'none'`, `object-src 'none'`, HSTS con
  preload, `X-Content-Type-Options`, `Permissions-Policy`, COOP/CORP.
  `script-src` conserva `'unsafe-inline'` porque GTM/GA/Pixel traen bootstraps
  inline y un export estático no puede generar nonces por petición.
- **CodeQL** semanal + en cada PR.
- **`npm audit --audit-level=high`** es un gate del CI: una vulnerabilidad alta
  bloquea el despliegue.
- **Dependabot** semanal para npm y GitHub Actions.

### Overrides de npm

`package.json` fija versiones parcheadas de `sharp` y `postcss` dentro del árbol
de Next. Next empaqueta copias con CVEs conocidos y la única "corrección" que
propone npm es degradar Next a la 9.3.3, que no es viable. Ambas son
dependencias de build (`sharp` solo lo usa el script de imágenes; el optimizador
de Next está desactivado), así que fijarlas no afecta runtime. El campo
`//overrides` del `package.json` documenta el razonamiento completo.

---

## Despliegue

`push` a `master` → GitHub Actions corre `verify` (lint · tipos · audit · build)
y, si pasa, despliega `out/` a Cloudflare Pages con `wrangler`. Los PRs corren
`verify` + `dependency-review` + CodeQL, sin desplegar.

Detalle completo, configuración inicial y despliegue manual:
**[`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md)**.

---

## Limitaciones conocidas

Estado real a julio de 2026, para que nadie pierda tiempo redescubriéndolo:

- **`/cases` sigue siendo la plantilla de `create-next-app`** (logo de Next.js,
  enlaces a Vercel, imagen rota `/vercel.svg`). No está enlazada desde el
  navbar, pero es pública e indexable. Hay que reescribirla o eliminarla.
- **Los archivos `page.metadata.ts` son código muerto.** Next.js no los lee; el
  metadata real es el `export const metadata` de cada `page.tsx`. La home los
  necesitaría, pero al ser `'use client'` no puede exportar metadata — hoy usa
  la del layout raíz.
- **Los posts del blog no tienen metadata propia.** Falta `generateMetadata` en
  `blog/[slug]/page.tsx`; los campos `metaTitle` / `metaDescription` /
  `focusKeyword` ya existen en `blog.ts` pero no se usan.
- **Las fotos de las páginas de tratamiento están comentadas** en
  `TratamientoSection.tsx`; se ve un degradado en su lugar. Las rutas de imagen
  de los archivos de datos apuntan a archivos que no existen en `/public`.
- **El `ImageCarousel` no navega**: flechas e indicadores llevan la clase
  `hidden`, así que solo se muestra la primera imagen.
- **El acordeón de FAQ no es accesible por teclado** (`<div onClick>` sin
  `aria-expanded`).
- Las URLs de imagen del `sitemap.ts` apuntan a archivos inexistentes.
- `next lint` está deprecado y desaparece en Next 16.

---

## Documentación adicional

- **[`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md)** — vigente y verificado.
- `docs/ARCHITECTURE.md`, `docs/COMPONENTS.md`, `docs/REFACTORING.md` y
  `REFACTORING_SUMMARY.md` — ⚠️ **desactualizados**. Son anteriores a la
  migración a Cloudflare Pages y describen un despliegue con Docker, además de
  carpetas (`src/data/`, `src/translations/`) que ya no existen. Trátalos como
  histórico, no como referencia.

---

## Convenciones

- Componentes funcionales con hooks; `'use client'` solo donde hace falta
  interactividad o efectos.
- Props tipadas con interfaces explícitas.
- Estilos con utilidades de Tailwind; los colores salen de variables CSS
  definidas en `globals.css` y expuestas en `tailwind.config.ts`.
- El copy nunca se escribe dentro de un componente: va en `src/content/`.

---

## Licencia

Software propietario. Copyright © 2026 Tomás Alberto Rodríguez Peña
(TrodriTen). Todos los derechos reservados — ver [`LICENSE`](LICENSE).

**Desarrollo:** [TrodriTen](https://trodriten.com/)
