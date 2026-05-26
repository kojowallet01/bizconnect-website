# SEO Guidelines – Bizconnect Technologies

This document explains what's already in place and what you should do to improve and maintain your Google rankings.

---

## What's Already Done on the Site

### 1. **Meta & technical**
- **Title:** "Web Design Worldwide | Business Websites, Digital Marketing & SEO | Bizconnect Technologies" (keyword-focused).
- **Meta description:** 150–160 characters with "web design", "digital marketing", "worldwide", "free consultation".
- **Meta keywords:** web design worldwide, international web design, digital marketing agency, business website design, SEO services, logo design, remote web design, global digital marketing.
- **Canonical URL:** Points to `https://bizconnecttechnologies.com/` to avoid duplicate content.
- **robots:** `index, follow` so search engines are invited to crawl and index.
- **Open Graph & Twitter:** Set for good sharing (title, description, image, locale).
- **theme-color:** Brand blue for mobile browsers.

### 2. **Structured data (JSON-LD)**
- **Organization:** Name, URL, logo, description, social links, contact.
- **LocalBusiness:** Name, image, description, area served (Worldwide), opening hours.
- **WebSite:** Site name, URL, publisher, language.
- **FAQPage:** All FAQ questions and answers so they can show as rich results in Google.

### 3. **Content & keywords**
- **Hero (H1):** "Web design and digital marketing for businesses worldwide" + subtitle with "business websites", "social media marketing", "SEO".
- **Sections:** Headings and copy use "web design", "digital marketing", "business website", "worldwide", "SEO", "logo design" where it reads naturally.
- **FAQ:** Questions include "website cost", "international clients", "social media marketing", "Google ranking" for long-tail searches.

### 4. **Semantics & accessibility**
- One **H1** per page (hero title).
- **H2** on each section with unique `id` (e.g. `services-heading`, `about-heading`, `faq-heading`).
- Sections use **aria-labelledby** where it makes sense.
- **Image alt text:** Logo and work/portfolio images have descriptive alt (e.g. "Bizconnect Technologies – Web design and digital marketing worldwide").

### 5. **Crawling**
- **robots.txt:** `Allow: /` and `Sitemap: https://bizconnecttechnologies.com/sitemap.xml`.
- **sitemap.xml:** Homepage with `priority` 1.0 and `changefreq` weekly.

---

## What You Should Do to Rank Better

### 1. **Use the correct live URL**
- Replace `https://bizconnecttechnologies.com` everywhere with your **real live domain** (same as in the browser).
- Update: `index.html` (canonical, og:url, og:image, twitter:image, all JSON-LD URLs), `public/robots.txt` (Sitemap URL), `public/sitemap.xml` (`<loc>`).

### 2. **Submit to Google (and Bing)**
- **Google Search Console:** https://search.google.com/search-console  
  - Add the property with your domain (or URL prefix).  
  - Submit `sitemap.xml` (e.g. `https://yourdomain.com/sitemap.xml`).  
  - Use "URL Inspection" for the homepage to request indexing.
- **Bing Webmaster Tools:** https://www.bing.com/webmasters  
  - Add site and submit the same sitemap.

### 3. **Add a real OG image**
- Create **og-image.png** (recommended **1200×630 px**) with your logo, tagline ("Web design & digital marketing worldwide"), and maybe a short benefit line.
- Put it in `public/` so it's at `https://yourdomain.com/og-image.png`.
- Already referenced in `index.html`; once the file exists and the URL is correct, shares will show the image.

### 4. **Get quality backlinks**
- List the site on:
  - Business / startup directories.
  - Design / digital agency directories (e.g. Clutch, GoodFirms if relevant).
- Guest posts or partnerships with business or tech blogs (with a link to your site).
- Ensure your social profiles (Instagram, LinkedIn, Facebook) link to the site.

### 5. **Google Business Profile (if applicable)**
- Create or claim **Google Business Profile** for Bizconnect Technologies if you have a physical location or serve a specific region.
- Use the same business name, phone, and website URL as on the site.
- Add photos, short posts, and respond to reviews.

### 6. **Content and keywords over time**
- Add a **blog** or **Resources** section and write short articles around:
  - "How much does a website cost for a small business"
  - "How to get your business on Google"
  - "Best website design tips for small businesses"
  - "Social media marketing for growing businesses"
- Use keywords (web design, digital marketing, business website, SEO) naturally in titles and body.
- Link from those pages to your main service and contact sections.

### 7. **Speed and mobile**
- Keep the site **fast** (you're on Vite; avoid heavy images or scripts).
- Keep it **mobile-friendly** (responsive layout is already in place).
- In Search Console, check "Core Web Vitals" and "Mobile usability" and fix any issues.

### 8. **Keep sitemap and structured data up to date**
- When you add new **pages** (e.g. blog), add their URLs to `sitemap.xml` and set a sensible `lastmod`.
- If you add more **FAQ** items, add them to both the FAQ component and the **FAQPage** JSON-LD in `index.html`.

### 9. **Monitor and iterate**
- In **Google Search Console:** watch "Search results" (queries, pages, clicks, impressions).
- See which queries already bring traffic and create more content around them.
- Fix "Coverage" or "Enhancements" issues (e.g. missing or wrong structured data).

---

## Quick checklist before launch

- [ ] Replace all `bizconnecttechnologies.com` with your real domain in `index.html`, `robots.txt`, `sitemap.xml`.
- [ ] Add `public/og-image.png` (1200×630).
- [ ] Add and verify the site in Google Search Console and submit the sitemap.
- [ ] Create/claim Google Business Profile (if applicable) and link to the site.
- [ ] Add the site URL to your social profiles and any directories.

---

## Security (next step)

After SEO, we can work on security: HTTPS, headers (CSP, X-Frame-Options, etc.), and form/contact handling. See your hosting (e.g. Netlify/Vercel) docs for HTTPS and security headers.
