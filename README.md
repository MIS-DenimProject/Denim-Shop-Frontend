# Denim Factory MIS - Management System

A professional enterprise-level Management Information System for Denim Factory operations, built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- 🎨 **Professional Enterprise Sidebar** - Clean, modern navigation with smooth interactions
- 🏗️ **Atomic Design Pattern** - Scalable component architecture
- 🎯 **Type-Safe** - Full TypeScript support
- 🎨 **Custom Color System** - White, Blue, Black, and Gray palette with CSS variables
- 📱 **Responsive Design** - Optimized for all screen sizes
- 🔧 **shadcn/ui Components** - Beautiful, accessible components
- 🎭 **Lucide Icons** - Modern, consistent icon set

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── atoms/          # Basic UI elements
│   ├── molecules/      # Simple component groups
│   ├── organisms/      # Complex sections
│   ├── pages/         # Complete page views
│   └── ui/            # shadcn components
├── lib/               # Utilities
└── utils/             # Color system & helpers
```

## 📚 Documentation

- **[Quick Start Guide](QUICK_START.md)** - Get up and running
- **[Sidebar Documentation](SIDEBAR_DOCUMENTATION.md)** - Complete API reference
- **[Component Structure](COMPONENT_STRUCTURE.md)** - Architecture details
- **[Implementation Summary](IMPLEMENTATION_SUMMARY.md)** - What's been built

## 🎨 Color System

The project uses a centralized color system with CSS variables:

- **White** - Primary backgrounds
- **Blue** - Primary brand color (#4F9BFF)
- **Black** - Text
- **Gray 50-900** - UI hierarchy

```tsx
// Use in components
import { colors } from '@/utils';

<div style={{ backgroundColor: colors.blue }} />
```

## 🧩 Components

### Sidebar
Professional navigation sidebar with:
- Company logo and title
- 6 navigation tabs (Dashboard, Orders, Productions, Inventory, Quality Control, Reports)
- User profile section
- Logout button

```tsx
import { Sidebar } from '@/components';

<Sidebar
  userName="John Doe"
  userRole="Administrator"
  onNavigate={(id) => console.log(id)}
  onLogout={() => console.log('Logout')}
  activeItemId="dashboard"
/>
```

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS 4** - Styling
- **shadcn/ui** - UI components
- **Lucide React** - Icons
- **CVA** - Component variants

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## 🎯 Navigation Tabs

- **Dashboard** - Overview and analytics
- **Orders** - Order management
- **Productions** - Production tracking
- **Inventory** - Stock management
- **Quality Control** - QC processes
- **Reports** - Reporting and analytics

## 💡 Usage Examples

See [QUICK_START.md](QUICK_START.md) for detailed examples.

---

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.


## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
