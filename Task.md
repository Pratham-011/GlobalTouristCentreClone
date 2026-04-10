# GTC Performance Fix Tasks
### Source: PageSpeed Insights — globaltouristcentre.com (Mobile, Apr 10 2026)

---

## Current Scores
| Category | Score |
|---|---|
| Performance | **77 / 100** |
| Accessibility | 98 / 100 |
| Best Practices | 92 / 100 |
| SEO | 100 / 100 |

## Core Web Vitals (Lab)
| Metric | Value | Target |
|---|---|---|
| First Contentful Paint (FCP) | 2.9s | < 1.8s |
| Largest Contentful Paint (LCP) | **4.7s** 🔴 | < 2.5s |
| Total Blocking Time (TBT) | 90ms | < 200ms |
| Speed Index | 3.5s | < 3.4s |
| Cumulative Layout Shift (CLS) | 0.016 ✅ | < 0.1 |

---

## 🔴 HIGH PRIORITY — Performance Failures

### 1. Eliminate Render-Blocking Requests
- **Savings: ~2,030ms** (biggest win)
- Identify CSS/JS loaded in `<head>` that blocks rendering
- Add `defer` or `async` to non-critical scripts
- Move non-critical CSS to load after page paint (inline critical CSS or use `<link rel="preload">`)
- For Next.js: check if any third-party scripts are loaded without `next/script` strategy

### 2. Fix Image Delivery
- **Savings: ~617 KiB**
- Convert images to WebP/AVIF format
- Add `sizes` attribute to responsive images
- Enable lazy loading (`loading="lazy"`) on below-the-fold images
- Do NOT lazy-load the LCP image (hero image) — mark it with `fetchpriority="high"` instead
- Verify images are served at correct dimensions (also fixes aspect ratio issue below)

### 3. Fix Cache Lifetimes
- **Savings: ~164 KiB**
- Set `Cache-Control: max-age=31536000, immutable` for all static assets (JS, CSS, images, fonts)
- For Next.js static exports: configure this via hosting platform headers (Vercel/Netlify/etc.)
- Short-cached or uncached resources: check third-party scripts and any API-served assets

### 4. Remove Legacy JavaScript
- **Savings: ~11 KiB**
- Check Babel config — ensure modern targets only (not IE11)
- In Next.js `next.config.js`, confirm `browserslist` targets modern browsers
- Run `npx browserslist` to audit current config
- Look for polyfills that are no longer needed

---

## 🟠 MEDIUM PRIORITY — Performance Warnings

### 5. Reduce Unused JavaScript
- **Total JS payload: 1,745 KiB** (very large)
- Audit which JS bundles are loaded on each route
- Use Next.js dynamic imports (`next/dynamic`) for heavy components
- Run `npx next build && npx next analyze` (with `@next/bundle-analyzer`) to see bundle breakdown
- Remove or defer third-party scripts that aren't needed at load time

### 6. Fix Network Dependency Tree (Request Chaining)
- Resources loading in a deep chain delay critical content
- Use `<link rel="preload">` for LCP image and critical fonts
- Check if fonts are being discovered late — embed `@font-face` in critical CSS or use `font-display: swap`

---

## 🟡 LOW PRIORITY — Best Practices Failures

### 7. Fix Console Errors
- Browser errors are being logged — find and fix them
- Open DevTools > Console on production site, document all errors
- Common causes in Next.js: hydration mismatches, missing keys, failed fetches

### 8. Add Source Maps (or Suppress Warning)
- **Savings shown: 282 KiB** (this is misleading — source maps are dev tools, not user-facing)
- If you don't want to expose source maps publicly, add a config to suppress this audit
- If needed for debugging, generate and upload source maps to error tracking service (e.g. Sentry)

### 9. Fix Image Aspect Ratio
- Some images are displayed with an incorrect aspect ratio
- Add explicit `width` and `height` attributes on all `<img>` tags to match intrinsic dimensions
- In Next.js `<Image>`, always specify `width` and `height` props

---

## ✅ ACCESSIBILITY (One Fix Needed)

### 10. Fix Heading Order
- Heading elements are not in sequentially-descending order (e.g. h1 → h3, skipping h2)
- Audit all page headings and fix hierarchy to be logical: h1 > h2 > h3

---

## Priority Order for Max Score Gain

1. Render-blocking requests (2,030ms savings → biggest LCP improvement)
2. Image delivery (617 KiB → LCP + Speed Index)
3. Cache lifetimes (164 KiB → repeat visit performance)
4. Reduce unused JS (1,745 KiB total → TBT + load time)
5. Heading order (easy fix)
6. Console errors (reliability)
7. Image aspect ratio
8. Legacy JavaScript
9. Network dependency tree
10. Source maps