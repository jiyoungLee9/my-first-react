# Copilot Instructions for React UI Components Project

## Project Overview
A React 19 + Vite + SCSS-based UI component library and template project. The project focuses on responsive web design, web accessibility, and web standards. It serves as a reusable foundation for UI/UX implementation across projects without backend data handling.

**Stack**: React 19.2, Vite 7.2, SCSS (modern compiler), ESLint, Node modules

## Architecture & Key Patterns

### Component Structure
- **Location**: `src/components/` - Houses reusable UI components (e.g., `MyButton.jsx`, `radioGroup.jsx`)
- **CSS Modules**: Each component has a paired `.module.scss` file for scoped styling (e.g., `MyButton.module.scss`)
- **Props Pattern**: Components accept props for configuration; see `radioGroup.jsx` for multi-prop patterns (name, itemList, defaultValue, isType)
- **Conditional Classes**: Use template literals with ternary operators for conditional SCSS classes: `className={${styles.radioGroup} ${isType === "vertical" ? styles.type_vertical : ""}}`

### Styling Architecture
- **SCSS Preprocessing**: All `.scss` files automatically import `build-set.scss` (defined in `vite.config.js` additionalData)
- **Build-set Pattern**: `src/assets/scss/build-set.scss` → imports `_var_value.scss` (colors, font sizes) and `_mixin.scss` (utilities)
- **Color Variables**: Defined in `_var_value.scss` ($clr_blue, $clr_main, $clr_red, etc.) - use in component SCSS files without import
- **Mixins**: Common utilities in `_mixin.scss` include `@mixin ellips()`, `@mixin default-shadow()`, `@mixin font_pre()`, `@mixin scroll-custom()`
- **Font Size Convention**: Base font size 62.5% on html (10px) - rem units throughout (e.g., 1.6rem = 16px, 2.4rem = 24px)
- **Reset & Base**: `_base.scss` contains CSS reset and common element defaults; imported by global stylesheet

### File Organization
```
src/
  assets/scss/
    build-set.scss          # Auto-imported entry point (vars + mixins)
    _var_value.scss         # Color palette, font sizes
    _mixin.scss             # Reusable SCSS utilities
    _base.scss              # CSS reset
  components/
    ComponentName.jsx       # Component logic
    ComponentName.module.scss # Scoped component styles
  App.jsx                   # Root app with component examples
```

## Data Flow & Props Pattern
- **RadioGroup Example** (`src/components/radioGroup.jsx`): Accepts data arrays with `{ label, value }` structure
- **Stateful Components**: Parent component (App.jsx) manages state and passes data to children via props
- **Default Values**: Components accept sensible defaults (e.g., `defaultValue`, `defaultChecked` for form elements)
- **No Backend Integration**: Components are UI-only; data typically mocked or passed from parent

## Developer Workflows

### Build & Development
```bash
npm run dev       # Start Vite dev server (http://localhost:5173)
npm run build     # Production build → dist/
npm run preview   # Preview production build
npm run lint      # Run ESLint checks
```

### Vite Configuration
- **Alias**: `@` resolves to `/src` for imports (e.g., `@/assets/scss/...`)
- **React Plugin**: Enables JSX fast refresh for development
- **SCSS Preprocessing**: Automatically injects `build-set.scss` into all .scss imports via `additionalData`

## Code Conventions

### Naming & Imports
- **Component Files**: PascalCase for named components, kebab-case for filenames if lowercase (e.g., `radioGroup.jsx`)
- **SCSS Modules**: Import as `import styles from './ComponentName.module.scss'`; apply via `className={styles.className}`
- **Private SCSS**: Files prefixed with `_` (e.g., `_var_value.scss`) are partial imports, not standalone

### JSX & Component Guidelines
- **Props Comments**: Document expected props with inline comments (see `radioGroup.jsx` for [Props 설명] pattern)
- **Map Iterations**: Use `key={item.value}` (unique identifier) when rendering lists from data arrays
- **Accessibility**: Custom radio buttons use hidden `<input type="radio">` + styled `<label>` approach; ensure `htmlFor` matches input `id`
- **Conditional Rendering**: Use ternary operators in JSX or conditional class bindings; avoid complex nested conditions

### SCSS Best Practices
- **Font Variables**: Use `$f_size: 1.3rem` and `$f_line: 2.4rem` from `_var_value.scss`
- **Color Palette**: Reference global colors ($clr_main, $clr_blue, $clr_darkgray, etc.) rather than hardcoding hex values
- **Mixin Usage**: Apply utilities like `@include ellips()` (text truncation), `@include default-shadow()`, `@include font_pre(600)` (font family + weight)
- **Nested Selectors**: Use SCSS nesting for state rules (e.g., `&:checked`, `&:hover`) and pseudo-elements (`&::before`, `&::after`)
- **Responsive Design**: Implied but not yet visible in examples; be prepared to add breakpoint mixins

## ESLint Rules
- **Extends**: js.recommended, reactHooks.recommended, reactRefresh (vite config)
- **Key Rule**: `no-unused-vars` ignores PascalCase identifiers (for component imports/exports)
- **Watch for**: Unused variables in lowercase will trigger errors

## Important Notes
- **Template Purpose**: Project is designed as a UI template/guide for future projects—data handling excluded by design
- **Responsive & Accessible**: Project commits to responsive web design and WCAG compliance (implied in README)
- **Comments in Korean**: Many comments in components use Korean; maintain pattern for consistency with existing codebase
- **Active Development**: Project is in progress (completion: 2026-01, ~2026-02); some areas may expand

## Common Tasks

### Creating a New Component
1. Create `src/components/ComponentName.jsx` with JSX logic
2. Create `src/components/ComponentName.module.scss` with scoped styles
3. Import styles: `import styles from './ComponentName.module.scss'`
4. Document props with comments
5. Use global color/mixin variables from `build-set.scss`
6. Test in `App.jsx` with example usage

### Adding Global Styles
- Add to `src/assets/scss/global.scss` (entry point for app-wide styles)
- For component-specific: use `.module.scss` files

### Updating Color/Font Palette
- Edit `src/assets/scss/_var_value.scss`
- Changes auto-available to all SCSS files via Vite's `additionalData` injection
