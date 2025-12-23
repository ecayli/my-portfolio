# AI Agent Instructions for Elifnaz's Portfolio

## Project Overview
This is a **personal portfolio website** showcasing Elifnaz's transition from pure CS to UX-focused Medieninformatik. It's not just a resume site—it's a space to communicate personality, education journey, and design philosophy through a clean, intentional interface.

**Key principle**: Everything here has a voice. Comments, copy, and code all reflect authentic personality. This isn't generic—it's deliberately human and conversational.

## Architecture & Core Patterns

### Three-File Structure
- **`index.html`**: Semantic structure with clear section IDs (`#home`, `#about`, `#projects`, `#contact`). Uses vanilla JS modal system for dynamic content windows.
- **`script.js`**: Manages modal interactions and project/folder data as JavaScript objects. No build tool, no API calls—pure vanilla JavaScript.
- **`style.css`**: Utility-first approach inspired by Tailwind (flex classes, margin utilities) mixed with semantic component classes. Dark theme with gradient backgrounds.

### Key Data Structures

**Projects array** (script.js lines 7-27): Dynamic project cards populated from JavaScript objects. Each project has optional multi-link support (see SynchroTrack's Figma prototype + case study example).

**Folder data** (script.js lines 51-329): Modal window content for Education, Experience, Skills, and Random Facts. Each folder is self-contained HTML string with inline styling using utility classes.

## Design & Styling Conventions

### Color System (from style.css comments)
- **Primary Dark**: `#26263A` (Deep Indigo)
- **Secondary Light**: `#BBBFCF` (Pale Blue/Gray)  
- **Accent**: `#40E0D0` (Cyan/Turquoise) used in gradients
- **Warning/Secondary Accent**: `#FFC107` (Amber)

### Utility Class Pattern
CSS heavily uses utility classes for spacing (`.mb-6`, `.mt-2`), text styling (`.text-white`, `.font-bold`), and layout (`.flex`, `.mx-auto`). This mirrors modern frontend patterns but is all vanilla CSS.

### Interactive Elements
- Gradient underline hover effect on nav links (linear gradient animation)
- Glassmorphic modals with `backdrop-filter: blur(18px)`
- Smooth scroll behavior on entire page (`html { scroll-behavior: smooth }`)
- Button hover states with gradient fills and upward transform

## Voice & Content Strategy

**This is critical**: Copy isn't formal or buttoned-up. It's conversational and self-aware.

Examples of the voice:
- "Remember when every productivity app made you feel MORE stressed?" (SynchroTrack intro)
- "Currently debugging Java, contributing to magazines, or helping Turkish students navigate Munich life"
- "Java for when things need to be object-oriented, JavaScript for when they need to be confusing, and Haskell for when I need a good cry"

**When adding/editing content**:
- Avoid corporate or generic language
- Include personal context and motivation
- Use humor that doesn't punch down
- Explain the "why" behind decisions (like the SynchroTrack case study)
- Keep academic credentials but humanize the experience

## Common Tasks & Workflows

### Adding a New Project
1. Add to `projects` array in script.js with `title`, `description`, `tech` array, and `link` (string or object)
2. Card HTML is auto-generated via `projects.forEach()` loop
3. If project has multiple links (like Figma + case study), use object structure: `{ figma: "...", case: "..." }`
4. For case study content, add corresponding key to `folderData` object with `.content` property containing HTML string

### Updating Modal Windows
All dynamic content (Education, Experience, Skills, Random Facts) lives in `folderData` object. To edit:
1. Find the key in script.js (e.g., `education`, `experience`)
2. Update the `.content` HTML string with any new information
3. Use utility classes for consistent styling (`.text-xl`, `.mb-4`, etc.)

### Styling New Sections
1. Define new component classes in style.css (e.g., `.feature-card`)
2. Use existing color variables and utility classes
3. Maintain dark theme aesthetic with appropriate contrast
4. Test hover/focus states for interactive elements

## External Dependencies
- **Font**: Inter (Google Fonts) with weights 400, 500, 600, 700, 800
- **Icons**: Font Awesome 6.5.1 via CDN (used for folder icons in About section)
- **CSS**: Vanilla only—no frameworks or preprocessors

## Known Quirks & Considerations

### No Framework, No Build Process
This is vanilla HTML/CSS/JS. No webpack, no npm scripts. This means:
- CSS utilities are manually defined
- JavaScript DOM manipulation is imperative, not reactive
- Any changes to content require direct HTML/JS edits

### Modal System
The modal popup for folder content (Education, Skills, etc.) uses `classList.add("open")` to show/hide. The styling for open state includes opacity and transform animations—check `.modal.open` in CSS.

### Responsive Design
The site uses flexible layouts and media queries (though some are in CSS files beyond the first 200 lines). Test mobile appearance when making layout changes.

## The Personality Layer

Every comment you see in the code reflects how Elifnaz talks. When you edit or add features:
- Preserve this voice in any new copy or comments
- Don't make it overly professional—this is a creative portfolio, not a bank website
- If adding code comments, match the conversational tone
- When suggesting improvements, think about whether they serve the "authentic self-presentation" goal

---

**Last updated**: December 2025  
**Maintained by**: AI agents working with Elifnaz on portfolio improvements
