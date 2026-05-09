# TopBrands-SY Website Edits — Full Specification

---

## 1. Technical / SEO Files

### `llms.txt`

Create at root (`/llms.txt`):

```
# TopBrands Syria
> TopBrands is a leading brand distribution and partnership company based in Damascus, Syria.

## Contact
- Email: info@topbrands-sy.com
- Phone: +963 11 6022

## Pages
- /contact — Contact Us form
- /partner — Partner With Us form
- /blog — News & insights
```

### `robots.txt`

Create at root (`/robots.txt`):

```
User-agent: *
Allow: /

Sitemap: https://www.topbrands-sy.com/sitemap.xml
```

---

## 2. Contact & Email Routing

All contact form submissions and partner form submissions must route to:

**`info@topbrands-sy.com`**

Apply to:

- **Contact Us** page form → `to: info@topbrands-sy.com`
- **Partner With Us** page form → `to: info@topbrands-sy.com`

---

## 3. Phone Number Fix

Replace all instances of the phone number site-wide with the correct format:

```
+963 11 6022
```

Check: header, footer, contact page, partner page, any schema/JSON-LD markup.

---

## 4. Footer Logo

- Replace the current footer logo with the updated logo asset.
- Ensure the logo links back to the homepage (`/`).
- Use the same logo file used in the header, or a white/light variant appropriate for the footer background.

---

## 5. Navigation Restructure

### Remove from Header:

- **Contact Us**
- **Blog**

### Add to Footer (under a "Quick Links" or "Company" column):

- **Contact Us** → `/contact`
- **Blog** → `/blog`

The main header nav should retain only primary navigation items (e.g., Home, About, Brands, Partner With Us).

---

## 6. Google Maps Location

Coordinates to embed on the Contact page and/or footer map widget:

```
Latitude:  33.6193071287417
Longitude: 36.489023297392414
```

Embed URL (Google Maps iframe):

```
https://www.google.com/maps?q=33.6193071287417,36.489023297392414&z=15&output=embed
```

Or as a link:

```
https://www.google.com/maps?q=33.6193071287417,36.489023297392414
```

---

## 7. Clickable Contact Info — Bug Fix

### Issue

On the **Contact Us** page and **Partner With Us** page, the phone and email are only clickable on the text, not the full padded box/card. The location card has a visual toggle but the entire box is not pressable. On the **Partner With Us** page, none of the contact info items are working.

### Fix Instructions

Wrap each contact info card in a single `<a>` tag (or attach the `onClick`/`href` to the outermost wrapper element):

```html
<!-- Phone -->
<a href="tel:+9631116022" class="contact-card">
  <div class="icon">📞</div>
  <div class="text">+963 11 6022</div>
</a>

<!-- Email -->
<a href="mailto:info@topbrands-sy.com" class="contact-card">
  <div class="icon">✉️</div>
  <div class="text">info@topbrands-sy.com</div>
</a>

<!-- Location -->
<a
  href="https://www.google.com/maps?q=33.6193071287417,36.489023297392414"
  target="_blank"
  rel="noopener noreferrer"
  class="contact-card"
>
  <div class="icon">📍</div>
  <div class="text">Damascus, Syria</div>
</a>
```

CSS fix to ensure entire box is clickable:

```css
.contact-card {
  display: flex; /* or block */
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  /* Remove pointer-events: none if present on child elements */
}

.contact-card * {
  pointer-events: none; /* prevent children from capturing clicks */
}
```

Apply the same fix on **both** the Contact Us page and the Partner With Us page.

---

## 8. Social Media Links

Update all social media icons/links site-wide (header, footer, contact page):

| Platform  | URL                                            |
| --------- | ---------------------------------------------- |
| LinkedIn  | https://www.linkedin.com/company/topbrands-sy/ |
| Instagram | https://www.instagram.com/topbrands.sy/        |
| Facebook  | https://www.facebook.com/topbrandssy           |

Ensure links open in a new tab with `target="_blank" rel="noopener noreferrer"`.

---

## 9. Contact Forms — Thank You & Tracking

### 9a. Thank You Message

- On successful form submission, display the thank-you message **inside the form box** (replace the form fields with the message, do not redirect to a new page).
- Example text:
  > **Thank you for reaching out!**
  > We've received your message and will get back to you at `info@topbrands-sy.com` shortly.

### 9b. reCAPTCHA

Add **Google reCAPTCHA v2** (or v3) to both forms:

```html
<!-- In <head> -->
<script src="https://www.google.com/recaptcha/api.js" async defer></script>

<!-- In form, before submit button -->
<div class="g-recaptcha" data-sitekey="YOUR_SITE_KEY"></div>
```

Validate the reCAPTCHA response server-side before sending the email.

### 9c. Google Tag Manager / DataLayer Events

**Contact Us form** — fire on successful submission:

```javascript
dataLayer.push({
  event: "thank-you",
});
```

**Partner With Us form** — fire on successful submission:

```javascript
dataLayer.push({
  event: "partner-thank-you",
});
```

Place these scripts in the success callback (after server confirms submission), not on page load.

---

## 10. Design Refresh — Visual Overhaul

The current site feels outdated and lacks visual engagement. Apply the following improvements:

### 10a. Icons

- Replace any text-only labels with icon + label pairs throughout (use a consistent icon library: Lucide, Phosphor, or Heroicons).
- Use icons for: services, features, contact methods, navigation items, form fields.
- Icons should be SVG-based (not icon fonts) for sharpness and accessibility.

### 10b. Infographics

Add visual data storytelling sections, for example:

- **Brand Portfolio** → display as a branded logo grid with hover effects.
- **How It Works / Process** → horizontal or vertical step infographic with numbered icons and connecting lines.
- **Why Partner With Us** → icon cards with bold statistics or bullet differentiators.

### 10c. Data Visualization

Where applicable, replace plain text stats with visual counters or charts:

- Animated number counters (e.g., "50+ Brands", "15+ Years", "1000+ Retail Partners") — trigger on scroll into view.
- Use CSS/JS counter animation or a lightweight library (CountUp.js).

### 10d. General Design Principles

- **Typography**: Use a pairing of a strong display font (e.g., Playfair Display, Syne, or DM Serif Display) with a clean body font (e.g., DM Sans, Nunito Sans).
- **Color**: Establish a primary brand color (derive from logo), one accent color, and a neutral background. Use consistently via CSS variables.
- **Spacing**: Increase section padding. Use generous white space to avoid visual crowding.
- **Cards & Sections**: Add subtle shadows, rounded corners, and hover lift effects to cards.
- **Hero Section**: Should have a bold headline, subheading, CTA button, and a visual (image, pattern, or gradient mesh background) — not a plain colored block.
- **Animations**: Add scroll-triggered fade-in/slide-up animations on section entry (use Intersection Observer or AOS library).
- **Buttons**: Solid primary button with hover state (color shift + slight scale). Secondary outlined button variant.
- **Mobile**: Verify all changes are fully responsive. Test hamburger menu, stacked cards, and form usability on mobile.

---

## Priority Order (Suggested)

1. Bug fixes (clickable cards — §7)
2. Navigation restructure (§5)
3. Contact info corrections (§2, §3)
4. Social media links (§8)
5. Maps embed (§6)
6. Form thank-you + reCAPTCHA + GTM events (§9)
7. Footer logo update (§4)
8. llms.txt + robots.txt (§1)
9. Design refresh (§10)

---

_Document prepared for TopBrands Syria website development team._
_All changes should be tested in a staging environment before deployment._
