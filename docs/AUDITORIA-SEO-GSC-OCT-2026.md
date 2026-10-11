# Auditoría SEO — Google Search Console (octubre 2026)

> **Fuente de datos:** Google Search Console, propiedad de dominio `sc-domain:sandrarodriguezdental.com`.
> **Periodo analizado:** 9 jul 2026 – 8 oct 2026 (últimos 3 meses). Datos con ~65 h de retraso.
> **Fecha de la auditoría:** 11 oct 2026.
> **Contexto:** primera lectura de GSC tras conectar la propiedad. Recoge el efecto de la migración de URLs (PR #20) y de la expansión de contenido —tarifas, problemas dentales y 5 tratamientos nuevos— (PR #22), **ambos ya desplegados en producción**.

---

## 1. Resumen ejecutivo

El sitio tiene **buena posición media (6,2 → página 1)** pero un **CTR muy bajo (1%)**: el problema hoy no es rankear, es **convertir impresiones en clics** y **acelerar la indexación del contenido nuevo**.

**El contenido nuevo ya está 100% en vivo** (sitemap en vivo = 28 URLs, todas responden 200). El verdadero cuello de botella es que **Google no relee el sitemap desde el 24 de junio** (antes de toda la migración y del contenido nuevo).

### Acción #1 (urgente, trivial, ya se puede hacer)
**Reenviar el sitemap en Search Console.** Es la palanca de mayor impacto y menor esfuerzo: fuerza a Google a redescubrir las 28 URLs actuales (tarifas, los 5 tratamientos nuevos, el hub y las 5 páginas de problemas, blog).

---

## 2. Rendimiento global (últimos 3 meses)

| Métrica | Valor | Lectura |
|---|---|---|
| Clics totales | **34** | Bajo en absoluto (propiedad nueva y pequeña), pero hay base. |
| Impresiones | **3.260** | Visibilidad real y creciente. |
| CTR medio | **1 %** | 🔴 Muy bajo para la posición que se tiene. Principal palanca de mejora. |
| Posición media | **6,2** | 🟢 Página 1. El ranking **no** es el problema. |

**Diagnóstico:** aparecemos bien posicionados para consultas con volumen, pero casi nadie hace clic. Esto apunta a **títulos y meta-descripciones poco atractivos** (y a competencia fuerte de anuncios / ficha de Google en la SERP), no a un problema de autoridad o de ranking.

---

## 3. Consultas principales

| Consulta | Clics | Impr. | CTR | Pos. |
|---|---:|---:|---:|---:|
| coronas metal porcelana | 2 | 45 | 4,4 % | 4,2 |
| corona metal porcelana | 0 | **509** | 0 % | **3,7** |
| rehabilitación oral | 0 | **243** | 0 % | **3,3** |
| sandra liliana rodríguez *(marca)* | 0 | 91 | 0 % | 6,2 |
| rehabilitacion oral | 0 | 81 | 0 % | 2,9 |
| corona metal ceramica | 0 | 57 | 0 % | 10,9 |
| sandra rodriguez *(marca)* | 0 | 51 | 0 % | 4,2 |
| blanqueamiento dental bogota | 0 | 46 | 0 % | **45,1** |
| metal porcelana | 0 | 31 | 0 % | 5,8 |
| corona metal cerámica | 0 | 28 | 0 % | 28,4 |

*(124 consultas en total; el resto son cola larga con <28 impresiones.)*

**Patrones:**
- 🎯 **Cluster "corona metal porcelana / cerámica"** domina la demanda (~670 impresiones sumando variantes) y rankea muy bien (pos. 3,7–4,2) **pero con 0 clics**. Es la oportunidad #1 de CTR.
- 🎯 **"rehabilitación oral"** (324 impr. sumando variantes, pos. 2,9–3,3): posición excelente, 0 clics. Mismo problema de CTR.
- 🔍 **Marca** ("sandra (liliana) rodríguez", 142 impr.): la gente ya nos busca por nombre.
- ⚠️ **"blanqueamiento dental bogota"** (46 impr., pos. **45,1**): hay demanda local pero rankeamos en página 4-5. La página existe (`estetica-dental-blanqueamientos`) pero necesita refuerzo.

---

## 4. Páginas principales

| Página | Clics | Impr. | CTR | Pos. |
|---|---:|---:|---:|---:|
| `/` (home) | 26 | **2.021** | 1,3 % | 4,6 |
| `/tratamientos/protesis/coronas/porcelana/` · **URL vieja** | 3 | 374 | 0,8 % | 5,3 |
| `/tratamientos-dentales/protesis-dentales-sobreimplantes/` | 2 | 47 | 4,3 % | 8,4 |
| `/tratamientos-dentales/protesis-dentales-coronas-porcelana/` · **URL nueva** | 1 | **644** | 0,2 % | 6,0 |
| `/problemas-dentales/diente-roto/` *(indexada sin www)* | 1 | 68 | 1,5 % | 18,6 |
| `/tratamientos-dentales/ferula-para-bruxismo/` *(sin www)* | 1 | 22 | 4,5 % | 10,0 |
| `/tratamientos-dentales/estetica-dental-blanqueamientos/` | 0 | 112 | 0 % | 28,6 |
| `/tratamientos/protesis/sobreimplantes/` · **vieja** | 0 | 30 | 0 % | 6,2 |
| `/tratamientos/protesis/sobredientes/` · **vieja** | 0 | 23 | 0 % | 7,1 |
| `/tratamientos-dentales/protesis-dentales-coronas-nometal/` | 0 | 21 | 0 % | 7,2 |

**Patrones:**
- 🏠 **La home es el motor** (26 de 34 clics, 2.021 impresiones) pero con CTR 1,3%. Optimizar su título/descripción es la mejora de CTR de mayor alcance.
- 🔁 **Migración en transición:** conviven la URL vieja (`/tratamientos/protesis/coronas/porcelana/`, 374 impr.) y la nueva (`…/protesis-dentales-coronas-porcelana/`, 644 impr.) para el mismo tema. Google está traspasando señales; se resolverá con el recrawl + sitemap. **No requiere acción de código** (las 301 ya funcionan).
- ✅ **El contenido nuevo ya genera impresiones** (problemas, férula, sobreimplantes), señal de que se está indexando rápido.
- ⚠️ **Posible canibalización:** la home y la página de coronas compiten por "corona metal porcelana". Vigilar.

---

## 5. Indexación

| | Páginas |
|---|---:|
| **Indexadas** | **13** |
| **No indexadas** | **29** |

**Motivos de "no indexadas":**

| Motivo | Nº | ¿Problema? |
|---|---:|---|
| Página con redirección | 16 | ✅ **No.** Son las URLs viejas que ahora hacen 301. Esperado tras la migración; desaparecerán solas. |
| Alternativa con etiqueta canónica adecuada | 8 | ✅ **Casi no.** Duplicados (sobre todo **no-www**) que canonicalizan correctamente a www. Google los consolidará. Ver §6-B. |
| No encontrada (404) | 5 | ⚠️ **Stale.** Rastreos de junio (antes de desplegar las 301). 4 de 5 **ya redirigen 301 en vivo** y se auto-corregirán al recrawl. Solo `/es` sigue en 404 real (sin equity). |
| Duplicada sin canónica | 0 | — |
| Rastreada sin indexar | 0 | — |

**Páginas nuevas ya indexadas** (confirmado en GSC): las 5 de problemas (`diente-roto`, `desgaste-dental`, `dientes-manchados`, `bruxismo`, `me-faltan-dientes`), varias de prótesis y coronas. **Pendientes de descubrir** (recién desplegadas, aún no en el índice): `tarifas`, `limpieza-dental`, `diseno-de-sonrisa`, `resina-dental`, `implantes-dentales` y los hubs. → Se aceleran con el reenvío del sitemap (§6-A) y, opcionalmente, "Solicitar indexación" por URL.

---

## 6. Problemas técnicos detectados

### A) 🔴 Sitemap obsoleto — *máxima prioridad*
- **GSC:** última lectura **24 jun 2026**, **15 páginas** descubiertas, estado "Correcto".
- **En vivo:** `https://www.sandrarodriguezdental.com/sitemap.xml` ya tiene **28 URLs** correctas.
- **Causa:** Google no ha vuelto a leer el sitemap desde antes de la migración y del contenido nuevo.
- **Acción:** reenviar el sitemap en GSC → *Sitemaps* → volver a enviar `sitemap.xml`. (Se puede hacer **ahora**, todo el contenido está en vivo.)

### B) 🟠 El dominio sin www responde 200 (host duplicado)
- `https://sandrarodriguezdental.com/` devuelve **200** en vez de redirigir a `www`. El sitio es accesible en **ambos** hosts.
- Por eso GSC indexó algunas páginas como no-www (`diente-roto`, `protesis-dentales-fija`).
- **Mitigado:** cada página no-www lleva `<link rel="canonical">` → versión www (verificado). Por eso caen en "alternativa con canónica", no en "duplicado". Google consolidará a www.
- **Mejora recomendada (infra, no código):** crear en **Cloudflare** una *Redirect Rule* `no-www → www` (301). Consolida señales más rápido y limpio que depender solo del canonical. **Responsable: developer.**

### C) 🟡 `/es` devuelve 404
- URL de localización antigua, sin equivalente actual. Bajo impacto (sin enlaces/equity conocidos).
- **Opcional:** añadir `/es  /  301` en `public/_redirects`.

### D) ℹ️ Migración en transición (informativo, sin acción)
- URLs viejas aún visibles en resultados; las 301 funcionan en vivo (p. ej. `/tratamientos/protesis/fija` → 301 → `/tratamientos-dentales/protesis-dentales-fija/`). Se resuelve solo con el recrawl.

---

## 7. Oportunidades on-page (subir el CTR)

El mayor retorno está en **reescribir títulos y descripciones** de las páginas que ya rankean bien pero no reciben clics:

1. **Home** — actual:
   - *Title:* `Dra. Sandra Liliana Rodriguez | Rehabilitación Oral y Prostodoncia`
   - *Description:* `Servicios especializados de rehabilitación dental y odontología estética…`
   - **Problema:** sin **geo (Bogotá)**, sin servicios gancho, orientado a marca. Rankea pos. 4,6 con CTR 1,3%.
   - **Sugerencia:** incluir Bogotá + beneficio/servicios + llamada a la acción. Ej.: *"Rehabilitación Oral y Prótesis Dental en Bogotá | Dra. Sandra Rodríguez"* y una descripción con coronas, implantes y diseño de sonrisa + teléfono/WhatsApp.

2. **Coronas metal porcelana** — el title ya es bueno (*"Coronas Metal Porcelana en Bogotá | …"*), pero 644 impr. a pos. 6 con 0,2% CTR. Revisar **meta-description** (que responda a precio/duración/garantía) y la posible **canibalización con la home**.

3. **"rehabilitación oral"** (pos. 2,9–3,3, 0 clics): asegurar que el hub/página de rehabilitación tenga un snippet irresistible; es la consulta con mejor posición del sitio.

4. **Blanqueamiento** (pos. 28–45): la página existe pero rankea en página 4-5. Reforzar con enlazado interno (desde home, problemas y tratamientos), contenido más completo y señales locales ("Bogotá").

---

## 8. Qué está funcionando (validación de los cambios)

- ✅ **Migración de URLs (PR #20):** las 301 funcionan en vivo; las URLs viejas se catalogan correctamente como "con redirección".
- ✅ **Expansión de contenido (PR #22):** las 28 URLs están desplegadas y respondiendo 200.
- ✅ **Indexación rápida del contenido nuevo:** las páginas de problemas ya están indexadas (en días) y generando impresiones.
- ✅ **Canonical correcto** en todas las variantes (incl. no-www → www).

---

## 9. Plan de acción priorizado

| # | Acción | Impacto | Esfuerzo | Responsable |
|---|---|:---:|:---:|---|
| 1 | **Reenviar el sitemap** en GSC | 🔴 Alto | Trivial | Owner (ahora) |
| 2 | "Solicitar indexación" de las URLs nuevas aún no descubiertas (tarifas, implantes, limpieza, diseño, resina, hubs) | 🟠 Medio-Alto | Bajo | Owner |
| 3 | Optimizar **title + description de la home** (añadir geo y servicios) | 🔴 Alto (CTR) | Bajo | Código |
| 4 | **Redirect 301 no-www → www** en Cloudflare | 🟠 Medio | Bajo | Developer (infra) |
| 5 | Revisar/optimizar meta-descriptions del cluster de coronas y de rehabilitación oral | 🟠 Medio (CTR) | Bajo | Código |
| 6 | Reforzar la página de **blanqueamiento** (enlazado interno + contenido) | 🟡 Medio | Medio | Código/Contenido |
| 7 | Añadir redirect `/es → /` | 🟢 Bajo | Trivial | Código |
| 8 | Vigilar **canibalización** home vs. páginas de coronas | 🟡 Seguimiento | — | Seguimiento |

---

## 10. Para la próxima revisión (en 4–6 semanas)

Volver a medir tras el reenvío del sitemap y las optimizaciones de CTR:
- ¿Subieron las **páginas indexadas** (objetivo: ~25-28)?
- ¿Cayeron a 0 los **404 stale** y bajaron las URLs viejas "con redirección"?
- ¿Mejoró el **CTR** de la home y del cluster de coronas?
- ¿Empezaron a recibir impresiones **tarifas** y los **5 tratamientos nuevos**?
- ¿Se consolidó todo en **www** (desaparecen las no-www del índice)?
