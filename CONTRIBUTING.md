# Portfolio Monorepo - Contributing Guide

Thank you for considering contributing to this project!

## Development Setup

1. **Prerequisites:**
   - Node.js 20+
   - Bun 1.1+ (`curl -fsSL https://bun.sh/install | bash`)

2. **Installation:**
   ```bash
   bun install
   ```

3. **Development:**
   ```bash
   # Start all apps
   bun dev
   
   # Start specific app
   cd apps/web && bun dev
   cd apps/blog && bun dev
   ```

## Project Structure

```
portfolio/
├── apps/
│   ├── web/      - Main portfolio (port 3000)
│   └── blog/     - Blog microfrontend (port 3001)
├── packages/
│   ├── ui/       - Shared UI components
│   └── i18n/     - Translations
```

## Code Standards

### TypeScript
- Use strict mode
- No `any` types
- Proper type annotations

### Styling
- Tailwind CSS for utilities
- Emotion for complex components
- Follow shadcn/ui patterns

### Components
- Use React 19 Server Components where possible
- Client components: `'use client'` directive
- Proper error boundaries

### Naming Conventions
- Components: PascalCase (`Button.tsx`)
- Utilities: camelCase (`formatDate.ts`)
- Constants: UPPER_SNAKE_CASE

## Commit Guidelines

Use conventional commits:
```
feat: add new feature
fix: bug fix
docs: documentation
style: formatting
refactor: code restructuring
test: add tests
chore: maintenance
```

## Pull Request Process

1. Create feature branch: `git checkout -b feature/your-feature`
2. Make changes and test locally
3. Run linting: `bun lint`
4. Run formatting: `bun format`
5. Commit with conventional commits
6. Push and create PR
7. Wait for CI checks

## Testing

```bash
# Unit tests (when implemented)
bun test

# E2E tests (when implemented)
bun test:e2e

# Type checking
bun run type-check
```

## Adding New Features

### New Component
```bash
# In packages/ui
cd packages/ui
# Create component file
# Export from index.tsx
```

### New Translation
```bash
# In packages/i18n/messages
# Add to en.json, es.json, fr.json
```

### New Page
```bash
# In apps/web/src/app/[locale]
# Create folder with page.tsx
```

## Questions?

Open an issue for discussion!
