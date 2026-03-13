# 🎨 DesignByJimmi - Portfolio Website

Moderne portfolio website bygget med React og Vite, der præsenterer mine projekter, kompetencer og erfaring som webudvikler.

> **Live site**: [DesignByJimmi](https://designbyjimmi.com)

![React](https://img.shields.io/badge/React-19.2-61dafb?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2-646cff?logo=vite)
![React Router](https://img.shields.io/badge/React_Router-7.13-ca4245?logo=reactrouter)

---

## 📋 Indhold

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Projektstruktur](#-projektstruktur)
- [Installation](#-installation)
- [Scripts](#-scripts)
- [CSS Arkitektur](#-css-arkitektur)
- [Deployment](#-deployment)

---

## ✨ Features

- **📱 Responsiv Design** - Optimeret til alle skærmstørrelser
- **🎭 Interaktive Animationer** - Smooth animations og typewriter-effekter
- **🗂️ Portfolio Showcase** - Dynamisk projekt-galleri med filter
- **📧 Kontaktformular** - Validering og feedback
- **📄 Interaktivt CV** - Moderne præsentation af erfaring og skills
- **🎨 Moderne UI/UX** - Clean design med fokus på brugeroplevelse
- **♿ Tilgængelighed** - Semantic HTML og ARIA labels
- **⚡ Performance** - Optimeret med lazy loading og code splitting
- **🔍 SEO Optimeret** - Meta tags, sitemap og robots.txt

---

## 🛠️ Tech Stack

### Core
- **React 19.2** - UI framework
- **Vite 7.2** - Build tool og dev server
- **React Router 7.13** - Client-side routing

### Styling
- **Vanilla CSS** - Modulær CSS arkitektur
- **CSS Custom Properties** - Farver og design tokens
- **Responsive Design** - Mobile-first approach

### Tools & Libraries
- **React Icons** - Icon library
- **Sharp** - Image optimization
- **ESLint** - Code linting
- **Vite Plugins** - CSS injection og optimering

---

## 📁 Projektstruktur

```
designbyjimmi.com/
├── public/                  # Statiske filer
│   ├── assets/
│   │   ├── image/          # Billeder og projektbilleder
│   │   └── files/          # Downloadbare filer (CV)
│   ├── sitemap.xml
│   └── robots.txt
│
├── src/
│   ├── components/         # React komponenter
│   │   ├── about/         # Om-side komponenter
│   │   ├── cards/         # Projekt-cards
│   │   ├── cv/            # CV komponenter
│   │   ├── form/          # Kontaktformular
│   │   ├── frontpage/     # Forside sektioner
│   │   ├── header-footer/ # Navigation & footer
│   │   ├── projects/      # Projekt-sider
│   │   └── writers/       # Typewriter effekter
│   │
│   ├── data/              # Data og konfiguration
│   │   ├── projects.js    # Projekt-data
│   │   ├── tools.js       # Tech stack data
│   │   ├── blogs.js       # Blog posts
│   │   └── imgconvert.js  # Image optimization script
│   │
│   ├── pages/             # Side-komponenter
│   │   ├── frontpage.jsx  # Forside
│   │   ├── projects.jsx   # Projekter
│   │   ├── about.jsx      # Om mig
│   │   ├── cv.jsx         # CV
│   │   ├── contact.jsx    # Kontakt
│   │   ├── blog/          # Blog posts
│   │   └── projects/      # Individuelle projekter
│   │
│   ├── styles/            # Modulær CSS ⭐
│   │   ├── base/          # Foundation (variables, reset, typography)
│   │   ├── layout/        # Layout (header, footer, sections)
│   │   ├── components/    # Component styles (buttons, cards, forms)
│   │   ├── pages/         # Page-specific styles
│   │   ├── utilities/     # Utility classes
│   │   ├── main.css       # Main import fil
│   │   └── README.md      # CSS dokumentation
│   │
│   └── main.jsx           # App entry point
│
├── index.html             # HTML template
├── vite.config.js         # Vite konfiguration
├── eslint.config.js       # ESLint konfiguration
└── package.json           # Dependencies
```

---

## 🚀 Installation

### Forudsætninger
- Node.js 18+ 
- npm eller yarn

### Setup

1. **Clone repository**
```bash
git clone https://github.com/Saliandros/Saliandros.dk.git
cd Saliandros.dk
```

2. **Installer dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

Åbn [http://localhost:5173](http://localhost:5173) i din browser.

---

## 📜 Scripts

```bash
# Development
npm run dev              # Start dev server med hot reload

# Production
npm run build            # Build til produktion
npm run preview          # Preview production build

# Code Quality
npm run lint             # Kør ESLint

# Images
npm run convert-images   # Optimer billeder med Sharp
```

---

## 🎨 CSS Arkitektur

Projektet bruger en **modulær CSS arkitektur** for bedre vedligeholdelse og skalerbarhed.

### Struktur
```
styles/
├── base/           # Foundation (variables, reset, typography)
├── layout/         # Layout components (header, footer)
├── components/     # Reusable UI components
├── pages/          # Page-specific styles
└── utilities/      # Utility classes
```

### Fordele
✅ Bedre organisation og overskuelighed  
✅ Lettere at finde og redigere styles  
✅ Mindre risiko for CSS-konflikter  
✅ Nemmere at udvide og vedligeholde  

📖 **Se [`src/styles/README.md`](src/styles/README.md) for detaljeret dokumentation**

---

## 🌐 Deployment

Projektet er optimeret til deployment på moderne hosting platforme.

### Build til produktion
```bash
npm run build
```

Dette genererer en optimeret build i `dist/` mappen.

### Anbefalede platforme
- **Netlify** (nuværende) - Auto-deploy fra GitHub
- **Vercel** - Zero-config deployment
- **GitHub Pages** - Gratis hosting

### Production optimizations
- ✅ Code splitting
- ✅ CSS minification
- ✅ Asset optimization
- ✅ Lazy loading af routes
- ✅ Image optimization

---

## 📱 Browser Support

- Chrome (sidste 2 versioner)
- Firefox (sidste 2 versioner)
- Safari (sidste 2 versioner)
- Edge (sidste 2 versioner)

---

## 👨‍💻 Udvikling

### Code Style
- ESLint til JavaScript linting
- Konsistent navngivning (camelCase for JS, kebab-case for CSS)
- Komponentbaseret arkitektur
- Semantisk HTML

### Best Practices
- Mobile-first responsive design
- Accessibility (ARIA labels, semantic HTML)
- Performance optimization
- SEO metadata

---

## 📄 Licens

Dette projekt er oprettet som personligt portfolio og er ikke open source.

---

## 📧 Kontakt

**Jimmi Larsen**  
🌐 Website: [designbyjimmi.com](https://designbyjimmi.com)  
💼 LinkedIn: [linkedin.com/in/jimmi-larsen](https://linkedin.com/in/jimmi-larsen)  
🐙 GitHub: [github.com/Saliandros](https://github.com/Saliandros)

### Kontaktformular
Projektet bruger [Formspree](https://formspree.io/) til håndtering af kontaktformularen - en simpel og sikker løsning til form submissions uden backend.

---

**Bygget med ❤️ og ☕ af Jimmi Larsen**
