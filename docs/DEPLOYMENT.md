# Despliegue y CI/CD

El sitio es un **export estático de Next.js** (`output: 'export'` → carpeta `out/`)
que se publica en **Cloudflare Pages** mediante **GitHub Actions**.

## Pipeline (GitHub Actions)

| Workflow | Archivo | Cuándo corre | Qué hace |
|---|---|---|---|
| **CI / CD** | `.github/workflows/ci-cd.yml` | push a `master`, cada PR, manual | `verify` (lint · type-check · `npm audit` · build) y, solo en `master`, `deploy` a Cloudflare. En PRs añade `dependency-review`. |
| **CodeQL** | `.github/workflows/codeql.yml` | push/PR a `master` + semanal | Análisis estático de seguridad (SAST) del código JS/TS. |
| **Dependabot** | `.github/dependabot.yml` | semanal | PRs automáticos para actualizar dependencias npm y Actions. |

El job `deploy` reutiliza el artefacto `out/` construido por `verify` (se compila
una sola vez) y lo sube con `wrangler pages deploy`.

## Configuración única

### 1. Cloudflare
1. Crea un proyecto en **Cloudflare Pages** llamado `sandrarodriguezdental`
   (Direct Upload / Wrangler). Si usas otro nombre, ajústalo en `ci-cd.yml`
   (`--project-name`).
2. Define la **rama de producción** del proyecto como `master`.
3. Crea un **API Token** (My Profile → API Tokens) con el permiso
   **Account → Cloudflare Pages → Edit**. Copia el token.
4. Copia tu **Account ID** (Dashboard → Workers & Pages → lateral derecho).

### 2. GitHub → Settings → Secrets and variables → Actions

**Secrets** (sensibles):
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

**Variables** (NO son secretos — son IDs públicos que se incrustan en el bundle):
- `NEXT_PUBLIC_GA_ID`
- `NEXT_PUBLIC_GTM_ID`
- `NEXT_PUBLIC_FB_PIXEL_ID`
- `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID`
- `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL`

> Los valores actuales están en `.env.local` (local, no versionado). Si una
> variable falta, el componente de tracking correspondiente simplemente no se
> carga (degradación segura).

### 3. Cabeceras de seguridad
Las cabeceras y la CSP viven en `public/_headers` y Cloudflare Pages las aplica
automáticamente (van incluidas en `out/`). No requieren configuración extra.

## Flujo de trabajo

- **Pull Request** → corre `verify` + `dependency-review` + `CodeQL`. No despliega.
- **Merge / push a `master`** → corre `verify`; si pasa, **despliega a producción**.
- **Manual** → pestaña *Actions* → *CI / CD* → *Run workflow*.

## Despliegue manual (sin CI, opcional)

```bash
npm run build
npx wrangler pages deploy out --project-name=sandrarodriguezdental --branch=master
```

## Notas

- `next start` **no** funciona con `output: 'export'`. Para previsualizar el
  build en local: `npx serve out` o `npx wrangler pages dev out` (este último
  también aplica `public/_headers`).
- Las imágenes de `/public` se optimizan con `npm run optimize:images` antes de
  subir nuevas imágenes pesadas.
