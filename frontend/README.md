# HousePlanFiles — Next.js SEO Migration
## React SPA → Next.js 14 | Complete SEO Optimization

---

## URGENT: Deindexing Fix (1600 → 500 pages)

Root Cause: React SPA served empty HTML to Googlebot — no real content visible.
Google mass-deindexed pages as low-value thin content.

Fix: Every page now SSR — Google sees real HTML, real metadata, real schema immediately.
Expected recovery: 4–8 weeks after deployment.

---

## ✅ All 20 SEO Issues Fixed

| Issue | Fix Applied |
|-------|------------|
| Messy URLs /product/50x60-3/ | New: /house-plans/50x60-modern-house-plan/ + 301 redirects |
| Product-based structure | Full /house-plans/ silo with category + region routes |
| Duplicate meta titles | generateMetadata() per page from DB seo fields |
| No schema markup | Product, BlogPosting, FAQPage, LocalBusiness, BreadcrumbList, WebSite, Person |
| No breadcrumbs | UI breadcrumbs + BreadcrumbList schema on ALL pages |
| Index bloat (admin/cart indexed) | noindex metadata + robots.txt blocks all non-public |
| Image SEO (no alt, no WebP) | next/image WebP, alt from seo.altText DB field |
| Core Web Vitals failing | next/image lazy load, next/font, no JS blocking render |
| H1/H2 structure issues | One H1 per page, logical H2 hierarchy |
| No topical silos | /house-plans/, /architects/, /city-partners/, /marketplace/, /blog/ |
| Weak EEAT signals | Person schema (founder), LocalBusiness schema, About page H1 |
| No geo-SEO | /house-plans/region/[name], /architects/[id] with city metadata |
| Crawl depth too high | HTML sitemap page + breadcrumbs |
| No internal linking | Related plans by plotSize, BHK, direction on product pages |
| Weak blog architecture | /blogs/ pillar + /blog/[slug] with BlogPosting schema |
| No sitemap | Auto-generated via next-sitemap with priority tiers |
| No robots.txt | Auto-generated blocking admin/dashboard/cart/checkout |
| Thin content signals | SSR = real HTML content, no wrapper bloat |
| No canonical tags | alternates.canonical on every public page |
| No OG/Twitter cards | openGraph + twitter metadata on all SEO pages |

---

## Project Structure

```
houseplanfiles-nextjs/
├── public/                    # All original assets (logos, images, favicons)
├── src/
│   ├── app/                   # Next.js 14 App Router
│   │   ├── layout.tsx         # Root layout — LocalBusiness schema, Poppins, Providers
│   │   ├── page.tsx           # Homepage — SSG + FAQ schema
│   │   ├── globals.css        # All CSS variables + Tailwind
│   │   ├── not-found.tsx      # 404 page
│   │   │
│   │   ├── house-plans/       # SEO Pillar
│   │   │   ├── page.tsx                   # /house-plans
│   │   │   ├── [slug]/page.tsx            # /house-plans/:slug — SSR + Product schema
│   │   │   ├── category/[name]/page.tsx   # /house-plans/category/:name
│   │   │   └── region/[name]/page.tsx     # /house-plans/region/:name
│   │   │
│   │   ├── blog/[slug]/page.tsx    # Blog post — BlogPosting schema
│   │   ├── blogs/page.tsx          # Blog listing — Blog schema
│   │   ├── architects/
│   │   │   ├── page.tsx            # Architects — FAQPage schema
│   │   │   └── [id]/page.tsx       # Profile — SSR metadata
│   │   ├── contractors/[id]/page.tsx
│   │   ├── city-partners/page.tsx
│   │   ├── marketplace/page.tsx
│   │   ├── about/page.tsx          # Person schema (founder)
│   │   ├── contact/page.tsx        # ContactPage + LocalBusiness schema
│   │   ├── gallery/page.tsx
│   │   ├── services/page.tsx
│   │   ├── packages/page.tsx
│   │   ├── careers/page.tsx
│   │   ├── become-a-seller/page.tsx
│   │   ├── sitemap-page/page.tsx   # HTML sitemap — fixes crawl depth
│   │   ├── terms-and-conditions/, privacy-policy/, payment-policy/, refund-policy/
│   │   │
│   │   ├── cart/, checkout/, login/, register/  # noindex, client-only
│   │   ├── dashboard/, admin/, professional/, seller/  # Protected routes
│   │   └── products/page.tsx       # Redirects → /house-plans
│   │
│   ├── components/
│   │   ├── ui/                     # shadcn/ui — 50 components (unchanged)
│   │   ├── Providers.tsx           # Redux + QueryClient + Contexts
│   │   ├── Navbar.tsx              # next/link + usePathname
│   │   ├── BrowseProductsClient.tsx
│   │   ├── ProductDetailClient.tsx  # react-router fixed
│   │   ├── SingleBlogPostClient.tsx
│   │   ├── ArchitectsClient.tsx
│   │   ├── [all original components]
│   │   ├── admin/     # 28 files
│   │   ├── professional/ # 11 files
│   │   ├── seller/    # 8 files
│   │   └── Userdashboard/ # 7 files
│   │
│   ├── lib/
│   │   ├── store.ts
│   │   └── features/  # 20 Redux slices — env vars fixed
│   │
│   └── contexts/      # Cart, Wishlist, Currency contexts
│
├── next.config.js          # 301 redirects, image domains, security headers
├── next-sitemap.config.js  # Sitemap + robots.txt
├── tailwind.config.ts      # Tailwind v3 (identical to original)
├── .env.example
└── package.json
```

---

## Setup

### 1. Install
```bash
cd houseplanfiles-nextjs
npm install
```

### 2. Environment Variables
```bash
cp .env.example .env.local
```

Fill in `.env.local`:
```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:5000
NEXT_PUBLIC_SHARE_BACKEND_URL=https://houseplansfiles-backend.vercel.app
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_key
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_client_id
NEXT_PUBLIC_AISENSY_API_KEY=your_api_key
```

NOTE: Original used VITE_ prefix. Next.js requires NEXT_PUBLIC_ for browser vars.
Mapping:
- VITE_BACKEND_URL → NEXT_PUBLIC_BACKEND_URL
- VITE_SHARE_BACKEND_URL → NEXT_PUBLIC_SHARE_BACKEND_URL
- VITE_RAZORPAY_KEY_ID → NEXT_PUBLIC_RAZORPAY_KEY_ID
- PAYPAL_CLIENT_ID → NEXT_PUBLIC_PAYPAL_CLIENT_ID
- VITE_AISENSY_API_KEY → NEXT_PUBLIC_AISENSY_API_KEY

### 3. Development
```bash
npm run dev
# → http://localhost:3000
```

### 4. Production Build
```bash
npm run build
# Automatically generates sitemap.xml + robots.txt
npm run start
```

### 5. Deploy — Vercel
1. Push to GitHub
2. Import on vercel.com
3. Add environment variables in Vercel Dashboard → Settings → Environment Variables
4. Deploy

Backend: Zero changes needed. Just add new Vercel domain to backend CORS.

---

## Post-Deployment (Client Must Do)

### Week 1 — Urgent
- Submit sitemap.xml to Google Search Console
- Request re-indexing of /house-plans in GSC
- Test 301 redirects: /product/slug → /house-plans/slug
- Run PageSpeed Insights check (target LCP < 2.5s)

### Month 1
- Submit sitemap to Bing Webmaster Tools
- Set up Google Analytics 4
- Create/verify Google Business Profile
- Register on Houzz.in for backlinks
- Start Pinterest — upload plan images with keyword descriptions

### Ongoing Content (Cannot Be Done in Code)
- Write educational blogs: vastu tips, construction costs, house plan guides
- Add founder bio, architect certifications to About page
- Collect and display client Google Reviews
- Upload YouTube walkthroughs, embed on product pages
