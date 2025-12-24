# Elifnaz Çaylı's Portfolio

A personal portfolio showcasing my journey from pure Computer Science to UX-focused Medieninformatik. This isn't just a resume—it's a space to communicate personality, education, and design philosophy through a clean, intentional interface.

## Architecture

Built with **vanilla HTML, CSS, and JavaScript**—no frameworks, no build tools, no dependencies except Google Fonts and Font Awesome icons.

### Core Files
- **`index.html`** - Semantic HTML structure with section IDs for smooth navigation
- **`script.js`** - Modal system for dynamic content (Education, Experience, Skills, etc.) + project card generation
- **`style.css`** - Utility-first styling with dark theme, glassmorphism, and gradient accents

### Data-Driven Design
- **Projects** - Array-based structure in `script.js` that auto-generates cards
- **Folder Windows** - Modal content for About section (Education, Experience, Skills, Random Facts)
- **Case Studies** - Multi-link support for projects with prototypes and detailed writeups (e.g., SynchroTrack)

## Design System

### Color Palette
- **Primary Dark**: `#26263A` (Deep Indigo)
- **Secondary Light**: `#BBBFCF` (Pale Blue/Gray)
- **Accent**: `#40E0D0` (Cyan/Turquoise)
- **Secondary Accent**: `#FFC107` (Amber)

### Key Features
- Dark theme with radial gradient background
- Glassmorphic modals (`backdrop-filter: blur(18px)`)
- Gradient underline hover effects on navigation
- Smooth scroll behavior throughout
- Responsive design with flexible layouts

## Notable Patterns

### Adding a New Project
1. Add object to `projects` array in `script.js`
2. Specify: `title`, `description`, `tech[]`, `link` (string or object)
3. For multiple links (prototype + case study): use `{ figma: "...", case: "..." }`
4. Card HTML auto-generates via forEach loop

### Updating Modal Content
All dynamic content lives in `folderData` object in `script.js`:
- `education` - Academic background
- `experience` - Work experience & certifications
- `skills` - UX/Design, Tools, Programming languages
- `random` - Personal facts and interests
- `synchrotrack_case_study` - Detailed project writeup

### Styling Conventions
- Utility classes for spacing (`.mb-6`, `.mt-2`) and text (`.text-white`, `.font-bold`)
- Semantic component classes for larger elements
- All colors derived from palette—maintain consistency
- Test hover/focus states for interactive elements

## Getting Started

### View Locally
Just open `index.html` in your browser—no server needed.

### Make Changes
- **Content**: Edit `script.js` (projects and folder data)
- **Styling**: Edit `style.css` (maintain dark theme + utility class pattern)
- **Structure**: Edit `index.html` (keep semantic sections)

## External Dependencies
- **Font**: [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts (weights: 400, 500, 600, 700, 800)
- **Icons**: [Font Awesome 6.5.1](https://fontawesome.com/) via CDN

##  Voice & Tone

This portfolio is written in a conversational, self-aware voice. Examples:
- "Remember when every productivity app made you feel MORE stressed?"
- "Java for when things need to be object-oriented, JavaScript for when they need to be confusing, and Haskell for when I need a good cry"
- "Currently debugging Java, contributing to magazines, or helping Turkish students navigate Munich life"

**When contributing**: Preserve this authenticity. Avoid corporate language, include personal context, use humor wisely, and explain the "why" behind decisions.


## 🔗 Links
- **GitHub**: [ecayli](https://github.com/ecayli)
- **LinkedIn**: [elifnazayli](https://linkedin.com/in/elifnazayli)
- **GitLab**: [cayli](https://gitlab.com/cayli)
- **Email**: elifnazcayli@gmail.com

---

Last updated: December 2025
