# Product Landing Page - Design & Development Prompt

You are an expert senior front‑end designer and developer.  
Your task is to design and code a **complete single-product landing page** for a premium tech accessory, using **modern, high-conversion design** similar in structure and polish to top-tier product pages (e.g., DJI / Apple style), but with **100% original layout, copy, and assets** (no plagiarism, no copying text or code from any existing site).

---

## 1. Product To Showcase

Create a landing page for this product:

**Product Name:** 10000mAh Magnetic Wireless Power Bank – PD 22.5W Fast Charging  

**Short Concept:** Sleek, compact, magnetic wireless power bank with both **22.5W PD fast wired charging** and **15W magnetic wireless charging**, designed for travel, everyday carry, and multi-device use.

**Use all the details below (you can rephrase and enrich the text, but keep the facts accurate):**

### Key Features

- 10,000mAh battery capacity for extended use.
- PD 22.5W wired output for ultra-fast charging.
- Up to 15W magnetic wireless charging.
- Dual outputs: USB-A and USB-C for versatile charging.
- Safe and stable: protection against overheating and overcharging.
- Compact, lightweight design for pockets, bags, and travel.

### Compatibility

- iPhone 8 and above (including latest iPhone Pro / Pro Max models).
- Wireless-charging-enabled smartphones.
- Compatible with iPhone, Samsung, Huawei, Xiaomi, and other major brands.
- Supports wireless charging for Bluetooth earbuds/earphones.

### Technical Specifications

- Material: Plastic (premium matte / soft-touch look in the design).
- Battery Capacity: 10,000mAh.
- Wireless Output: 7.5W / 10W / 15W.
- USB-A Output: 5V ⎓ 3A / 9V ⎓ 2A / 12V ⎓ 1.5A (22.5W max).
- USB-C Output: 5V ⎓ 3A / 9V ⎓ 2.2A (20W max).
- USB-C Input: 20W.
- Approx. Dimensions: 98 × 64 × 15 mm.

---

## 2. Design & Layout Requirements

Follow a **long, scrollable, single-page layout** optimized for conversions, inspired by modern premium tech product pages (but fully original):

**Global Structure (Desktop & Mobile Responsive):**

1. **Sticky Header / Navigation**
   - Left: simple logo or text logo for a fictional brand (invent one, modern and minimal).
   - Center/Right: nav links scrolling to sections (e.g., Features, Specs, Reviews, FAQ, Support).
   - Right: a prominent "Buy Now" button.
   - Behavior: sticky on scroll, subtle background and shadow when scrolled.

2. **Hero Section (Above the Fold)**
   - Large, bold product name + short premium tagline.
   - 1–2 sentence description explaining value succinctly.
   - Primary CTA button: "Buy Now".
   - Secondary CTA: "Learn More" (anchors down to Features or Specs).
   - Price placeholder and key badge (e.g., "10000mAh | PD 22.5W | 15W Wireless").
   - Hero visual:
     - A large, centered mockup illustration of the power bank (use simple shapes, gradients, and shadows in CSS or as image placeholders / SVG shapes).
     - Optionally show a phone magnetically attached to emphasize MagSafe-like behavior.
   - Background:
     - Clean, premium gradient or soft abstract shapes to give a futuristic tech feel.

3. **Key Benefits / Feature Highlight Strip**
   - Immediately under the hero.
   - 3–4 horizontally aligned (stacked on mobile) feature blocks with icons:
     - Example: "Magnetic Wireless Charging", "PD 22.5W Fast Charge", "Travel-Friendly Size", "Multi-Device Support".
   - Each block has:
     - Simple custom icon (you can use emoji or simple inline SVG/HTML icons).
     - Short, bold title.
     - One-sentence supporting description.

4. **Detailed Features Sections (Alternating Layout)**
   Create at least **three** major, visually distinct feature sections, each with:

   - Large image or illustration mockup of the power bank in context (e.g., on a desk, in hand, attached to a phone, in a travel scene).
   - Strong heading and short subheading.
   - 2–4 bullet points explaining that feature in detail (performance, capacity, usage scenarios, safety).
   - Alternating layout:
     - Section 1: image on left, text on right.
     - Section 2: text on left, image on right.
     - Section 3: image on left, text on right again.
   - Examples of feature themes:
     - "Fast Charging, Zero Downtime" (wired & wireless, PD 22.5W, 15W wireless).
     - "Made for Travel & Everyday Carry" (size, weight, capacity).
     - "Safe, Smart, and Device-Friendly" (overheat protection, overcharge protection, auto-detection, smart output).

5. **Compatibility & Use Cases Section**
   - Title: something like "Works Seamlessly With Your Devices" (but use your own wording).
   - Two main parts:
     - Grid or cards listing compatible device types:
       - iPhone models, Android flagships, wireless earbuds, small devices.
     - A visual or icon-based list: Apple logo-style icon + generic smartphone, Android robot-like icon, earbuds icon, tablet icon, etc. (all original).
   - Short explanation of Qi wireless compatibility and PD support.

6. **Technical Specifications Table / Cards**
   - Clear spec table or nicely styled two-column layout:
     - Battery capacity, input/output values, dimensions, weight (you can infer a reasonable weight).
     - Ports and power profiles.
     - Material and finish.
   - Good readability: zebra stripes or card-based specs.

7. **"What's in the Box" Section**
   - Visual representation of:
     - The power bank.
     - USB-C cable.
     - Quick start guide / warranty card.
   - Short, simple bullet list of included items.

8. **Social Proof / Testimonials / Reviews**
   - Section with 3–4 fictional customer reviews.
   - Each review card includes:
     - Star rating (use 1–5 star visuals).
     - Short headline.
     - 1–2 sentence review.
     - Customer name and minimal avatar circle or initials.
   - Design should look trustworthy and clean.

9. **FAQ Section**
   - Accordion-style FAQ (can be implemented with React state).
   - At least 5–7 common questions:
     - Charging time.
     - Safety and overheating.
     - Magnetic compatibility (e.g., works best with phones that support magnetic attachment or with a magnetic case).
     - Airplane travel rules (e.g., carry-on safe, typical battery restrictions).
     - Warranty / support details (fictional but sensible).
   - Answers should be clear, concise, and reassuring.

10. **Final CTA / Closing Section**
    - Strong closing statement about why this power bank is the best choice.
    - Prominent "Buy Now" button.
    - Possibly a smaller "View Specs" or "Compare Models" secondary button (even if you don't implement multiple models).
    - Small reassurance elements: "Fast shipping", "Secure checkout", "30-day return" (you can invent these).

11. **Footer**
    - Simple, clean footer:
      - Brand name & small logo.
      - Links: Support, Warranty, Privacy Policy, Terms (link to placeholders).
      - Social icons (no real URLs required, but you can put placeholders).

---

## 3. Visual Style & UX

- **Aesthetic:**
  - Premium, tech-oriented, minimalistic.
  - Strong grid system, generous whitespace.
  - Rounded corners on buttons and cards.
  - Soft shadows and subtle gradients.
- **Color Palette (feel free to adjust creatively):**
  - Base: White / very light gray background.
  - Accent: Vibrant blue, teal, or purple for CTAs and highlights.
  - Secondary: Soft neutral grays for text and dividers.
- **Typography:**
  - Use a modern sans-serif stack (e.g., system fonts or a Google Font like Poppins / Inter / DM Sans).
  - Clear hierarchy:
    - H1: product name.
    - H2: section headings.
    - H3/H4: subheadings and card titles.
    - Body: 14–16px, comfortable line height.
- **Animation & Micro-interactions (CSS/JS):**
  - Smooth hover animations on buttons and cards.
  - Subtle scroll-based reveal animations (e.g., fade-in, slide-up) using CSS transitions or React hooks.
  - Highlight key CTAs with gentle pulsing glow or slight scale-on-hover.

- **Responsiveness:**
  - Must look excellent on:
    - Large desktop screens.
    - Laptops.
    - Tablets.
    - Mobile phones.
  - Use a mobile-first approach or strong media queries:
    - Collapse nav into a hamburger menu on mobile (React state for toggle).
    - Stack feature blocks vertically on small screens.
    - Ensure text remains readable and touch targets are big enough.

---

## 4. Technical & Code Output Requirements

### Tech Stack

**Use the following technologies:**

- **React** (with Vite as the build tool)
- **JavaScript** (NO TypeScript)
- **CSS Modules** for component-scoped styling (NO Tailwind CSS)

### Project Structure

Create a well-organized React + Vite project with the following structure:

```
src/
├── components/
│   ├── Header/
│   │   ├── Header.jsx
│   │   └── Header.module.css
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   └── Hero.module.css
│   ├── FeatureStrip/
│   │   ├── FeatureStrip.jsx
│   │   └── FeatureStrip.module.css
│   ├── FeatureSection/
│   │   ├── FeatureSection.jsx
│   │   └── FeatureSection.module.css
│   ├── Compatibility/
│   │   ├── Compatibility.jsx
│   │   └── Compatibility.module.css
│   ├── Specifications/
│   │   ├── Specifications.jsx
│   │   └── Specifications.module.css
│   ├── WhatsInBox/
│   │   ├── WhatsInBox.jsx
│   │   └── WhatsInBox.module.css
│   ├── Reviews/
│   │   ├── Reviews.jsx
│   │   └── Reviews.module.css
│   ├── FAQ/
│   │   ├── FAQ.jsx
│   │   └── FAQ.module.css
│   ├── CTA/
│   │   ├── CTA.jsx
│   │   └── CTA.module.css
│   └── Footer/
│       ├── Footer.jsx
│       └── Footer.module.css
├── assets/
│   └── (SVG icons, placeholder images if any)
├── styles/
│   └── global.css (CSS variables, resets, global styles)
├── App.jsx
├── App.module.css
└── main.jsx
```

### Component Guidelines

- Each component should be a **functional React component** using hooks (useState, useEffect, useRef as needed).
- Use **CSS Modules** for all component styling (import styles as `import styles from './Component.module.css'`).
- Use **CSS custom properties (variables)** in `global.css` for colors, typography, and spacing consistency.
- Keep components modular and reusable where possible.
- Use **React state** for:
  - Mobile navigation toggle (hamburger menu open/close).
  - FAQ accordion expand/collapse.
  - Scroll-based header styling changes.
- Implement **smooth scrolling** to sections using React refs or native smooth scroll behavior.
- Add **scroll reveal animations** using Intersection Observer API with useEffect hooks.

### CSS Module Guidelines

- Use meaningful, component-specific class names (e.g., `.container`, `.title`, `.card`, `.button`).
- Leverage CSS Flexbox and Grid for layouts.
- Include responsive breakpoints within each module using `@media` queries.
- Use CSS transitions for hover effects and animations.
- Define a consistent design system in `global.css`:
  ```css
  :root {
    --color-primary: #0066ff;
    --color-secondary: #6c757d;
    --color-background: #ffffff;
    --color-surface: #f8f9fa;
    --color-text: #212529;
    --color-text-muted: #6c757d;
    --font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    --border-radius: 12px;
    --shadow-sm: 0 2px 4px rgba(0,0,0,0.05);
    --shadow-md: 0 4px 12px rgba(0,0,0,0.1);
    --shadow-lg: 0 8px 24px rgba(0,0,0,0.15);
    --transition: all 0.3s ease;
  }
  ```

### Vite Configuration

- Standard Vite React setup (no additional plugins required).
- Include proper `index.html` with Google Fonts link if using external fonts.

---

## 5. Content & Legal Constraints

- All text must be **originally written by you** based on the factual data I provided.
- Do **not** copy or paraphrase any real-world marketing text from DJI or any other brand.
- Do not include any real brand logos (except generic text references like "Compatible with iPhone / Samsung / etc.").
- All imagery must be represented by **placeholders or simple shapes/gradients**; do not embed or link to copyrighted images.
- Use inline SVGs or CSS shapes for icons and product mockups.

---

## 6. Output Format

- First, briefly describe the overall design concept in 3–5 sentences.
- Then output all the necessary files for a complete, working React + Vite project:
  1. `package.json` - with all necessary dependencies
  2. `vite.config.js` - Vite configuration
  3. `index.html` - entry HTML file
  4. `src/main.jsx` - React entry point
  5. `src/App.jsx` - Main App component
  6. `src/App.module.css` - App-level styles (if needed)
  7. `src/styles/global.css` - Global styles and CSS variables
  8. All component files (`.jsx` and `.module.css` pairs)

Each code block should be complete and ready to use. The project should be runnable with:
```bash
npm install
npm run dev
```

---

## 7. Summary of Tech Stack

| Technology | Use |
|------------|-----|
| React | UI framework |
| Vite | Build tool / dev server |
| JavaScript | Programming language (NO TypeScript) |
| CSS Modules | Component-scoped styling |
| CSS Custom Properties | Design system variables |
| Flexbox / Grid | Layout |

**NOT using:**
- TypeScript
- Tailwind CSS
- Any CSS framework
- Any external animation libraries (use CSS transitions + Intersection Observer)
