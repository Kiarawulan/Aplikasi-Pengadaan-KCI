# Create Flow Simulation

A React + Vite + Tailwind CSS application for simulating and visualizing
procurement/process flows (RUP, Purchase Requisition, Park Document, etc).

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Project Structure

```
src/
├── main.tsx              # App entry point
├── App.tsx                # Root component / router
├── types/                 # Shared TypeScript types
├── constants/              # Shared constant data (step definitions, etc)
├── components/
│   ├── layout/             # Sidebar, top bar, breadcrumb, nav items
│   ├── common/              # Small reusable UI primitives
│   ├── pengadaan/           # Procurement-flow-specific components
│   └── ui/                  # Base design-system components (shadcn/ui)
├── pages/                  # Top-level screens (Dashboard, RUP, etc)
└── styles/                 # Global styles and Tailwind theme
```
