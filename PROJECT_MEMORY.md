# PROJECT_MEMORY.md

A living log of design decisions, file inventory, and pending tasks for the **TickleApps** website. Future AI sessions and contributors should read and update this file with every meaningful change.

---

## 📅 Versions / Update notes

### v1.0.0 — Project Initialization (2026-05-10)

**Task:** Initial setup of the TickleApps static website project for Hostinger deployment.

**Decisions:**
- Target Architecture: Pure static HTML/CSS/JS.
- Routing: Folder-based clean URLs (e.g., `/about/`).
- Styling: Bootstrap 5 + custom refined CSS.
- Assets: Full domain URLs used for global assets.

**Files Created (Structure):**
- `public/` (Deployment root)
  - `assets/css/style.css`
  - `assets/js/main.js`
  - `assets/js/contact.js`
- `partials/` (Reference components)
  - `navbar.html`
  - `footer.html`

---

## 🎨 Design decisions

- **Mood:** Premium startup, modern SaaS, professional.
- **Colors:**
  - Primary: Coral `#FF7F66` (from logo)
  - Secondary: Teal `#26C2B9` (from logo)
  - Dark: Ink `#1F3340`
  - BG: Soft white `#F7F9FB`
- **Typography:** Inter (Sans-serif) for clarity and modern feel.

---

## 🧱 Dependencies (CDN)

- Bootstrap 5.3.3
- Google Fonts (Inter)
- EmailJS (for contact form)

---

## ✅ What's done

- [x] Project memory initialized.
- [x] README initialized.
- [x] Folder structure implemented in `/public`.
- [x] Global CSS architecture created (`/public/assets/css/style.css`).
- [x] Global JS architecture created (`/public/assets/js/main.js`).
- [x] Navbar and Footer partials created in `/partials`.
- [x] Homepage created (`/public/index.html` and `/index.html`).
- [x] All 9 mandatory pages created with clean SEO-friendly markup.
- [x] Privacy Policy and DPDPA optimized for AdSense and legal compliance.
- [x] Contact page integrated with EmailJS.
- [x] SEO assets (`sitemap.xml`, `robots.txt`) and Hostinger config (`.htaccess`) added.
- [x] All social links verified (Twitter, Instagram, LinkedIn).

---

## 🔧 Pending / Takeaway tasks

- [ ] User: Configure EmailJS `PUBLIC_KEY`, `SERVICE_ID`, and `TEMPLATE_ID` in `/public/assets/js/contact.js`.
- [ ] User: Add `logo.png` and `og-cover.png` to `/public/assets/images/`.
- [ ] User: Replace AdSense placeholders with real snippets in all pages after approval.
