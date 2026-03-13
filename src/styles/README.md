# CSS Struktur 📁

Denne mappe indeholder al CSS for projektet organiseret i en modulær struktur for bedre vedligeholdelse og overskuelighed.

## 📂 Mappestruktur

```
styles/
├── base/              # Foundation styles
│   ├── variables.css  # CSS custom properties (farver, fonts, etc.)
│   ├── reset.css      # Global resets og base styles
│   └── typography.css # Typografi, headings, links
│
├── layout/            # Layout komponenter
│   ├── page-section.css  # Side-layout og grid
│   ├── header.css        # Header & navigation (inkl. mobile drawer)
│   └── footer.css        # Footer
│
├── components/        # Genanvendelige UI-komponenter
│   ├── buttons.css       # Knapper
│   ├── cards.css         # Projekt-cards og grid
│   ├── forms.css         # Formularer (kontaktform)
│   ├── hero.css          # Hero-sektioner
│   ├── sidebar.css       # Side-navigation
│   ├── tools.css         # Tools-sektion (frontpage)
│   ├── typewriter.css    # Typewriter-effekt
│   └── search.css        # Søge-komponent
│
├── pages/             # Side-specifikke styles
│   ├── frontpage.css     # Frontpage (bio, contact section)
│   ├── contact.css       # Kontakt-side
│   ├── cv.css           # CV-side
│   ├── projects.css     # Projekt-side
│   └── about.css        # Om-side
│
├── utilities/         # Hjælpe-klasser
│   └── utilities.css     # Utility classes (mt-1, etc.)
│
└── main.css          # ⭐ Main import fil

```

## 🚀 Hvordan det fungerer

### main.css - Central Import
Alle CSS-filer importeres i **`main.css`** i den rigtige rækkefølge:

1. **Base** - Variables → Reset → Typography
2. **Layout** - Structure og containers
3. **Components** - Genanvendelige elementer
4. **Pages** - Side-specifikke styles
5. **Utilities** - Sidste (højeste specificitet)

### Import i index.html
```html
<link rel="stylesheet" href="/src/styles/main.css">
```

## ✅ Fordele ved denne struktur

- **🔍 Let at finde**: Styles er logisk organiseret efter funktion
- **🛠️ Nemmere vedligeholdelse**: Ændringer er isoleret til relevante filer
- **🚫 Færre konflikter**: Mindre risiko for CSS-navnekollisioner
- **⚡ Bedre performance**: Kan optimeres til kun at loade nødvendig CSS
- **👥 Team-venlig**: Flere personer kan arbejde samtidigt uden konflikter
- **📦 Modulær**: Komponenter kan nemt genbruges eller fjernes

## 📝 Konventioner

### Filnavne
- Brug kebab-case: `page-section.css`, `contact-form.css`
- Beskrivende navne der matcher indholdet

### CSS-klasser
- BEM-inspireret: `.component-element--modifier`
- Beskrivende navne: `.hero-content`, `.project-card-image`

### Kommentarer
```css
/* =========================================
   Komponent Navn
   ========================================= */
```

## 🔄 Opdatering fra gammel struktur

Den gamle `styles.css` fil (2200+ linjer) er gemt som backup:
- **Backup**: `src/styles.css.backup`

Alle styles er bevaret - kun organiseret bedre!

## 💡 Tips til vedligeholdelse

1. **Nye komponenter**: Opret ny fil i `components/`
2. **Side-specifikke styles**: Tilføj i relevante page-fil
3. **Globale ændringer**: Start i `base/variables.css`
4. **Utilities**: Tilføj i `utilities/utilities.css`

## 🎯 Næste skridt (valgfrit)

- Overvej CSS Modules for endnu bedre scope isolation
- Implementér CSS-in-JS hvis projektet vokser meget
- Tilføj PostCSS plugins for autoprefixer og minification

---

**Sidst opdateret**: Marts 2026
