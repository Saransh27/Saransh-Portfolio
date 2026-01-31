# Portfolio Monorepo

A modern, full-stack portfolio website built with cutting-edge technologies showcasing enterprise-level architecture.

## 🚀 Tech Stack

### Core
- **Monorepo:** Turborepo with Bun workspaces
- **Framework:** Next.js 15 (App Router)
- **Runtime:** Bun 1.1+
- **Language:** TypeScript 5.7+ (strict mode)

### Frontend
- **Styling:** Tailwind CSS 3.4
- **Components:** shadcn/ui + Radix UI
- **Animations:** Framer Motion
- **State:** TanStack Query + Zustand

### Backend & APIs
- **API Layer:** Next.js Route Handlers + Server Actions
- **Validation:** Zod
- **Email:** Resend API
- **Database:** (Ready for Drizzle ORM + PostgreSQL)

### Features
- **i18n:** next-intl (English, Spanish, French)
- **Accessibility:** Font size controls, ARIA labels
- **SEO:** Next.js Metadata API, OpenGraph
- **Dark Mode:** System preference + manual toggle

### DevOps
- **CI/CD:** GitHub Actions
- **Linting:** ESLint 9 (flat config)
- **Formatting:** Prettier
- **Deployment:** AWS Amplify (configured)
- **Performance:** Lighthouse CI

## 📁 Project Structure

```
portfolio/
├── apps/
│   ├── web/              # Main portfolio app (port 3000)
│   └── blog/             # Blog microfrontend (port 3001)
├── packages/
│   ├── ui/               # Shared UI components
│   ├── i18n/             # Translation files
│   ├── config-typescript/# Shared TS config
│   ├── config-eslint/    # Shared ESLint config
│   └── config-tailwind/  # Shared Tailwind config
├── .github/
│   └── workflows/        # CI/CD pipelines
└── turbo.json           # Turborepo configuration
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 20+
- Bun 1.1+

### Installation

```bash
# Install Bun (if not installed)
curl -fsSL https://bun.sh/install | bash

# Add Bun to PATH
export PATH="$HOME/.bun/bin:$PATH"

# Install dependencies
bun install

# Run development servers
bun dev
```

### Development URLs
- Main app: http://localhost:3000
- Blog: http://localhost:3001

## 🌍 Internationalization

The app supports 3 languages:
- English: `/en/*`
- Spanish: `/es/*`
- French: `/fr/*`

Add translations in `packages/i18n/messages/`.

## ♿ Accessibility Features

- **Font Size Control:** A/A/A buttons in header
- **Dark Mode:** System preference + manual toggle
- **Keyboard Navigation:** Full keyboard support
- **Screen Readers:** Proper ARIA labels
- **Focus Management:** Visible focus indicators

## 🚀 Deployment

### AWS Amplify

1. **Setup AWS Amplify:**
   ```bash
   # Install AWS Amplify CLI
   npm install -g @aws-amplify/cli
   
   # Configure Amplify
   amplify init
   ```

2. **Environment Variables:**
   ```env
   # Add to AWS Amplify Console
   NEXT_PUBLIC_API_URL=your-api-url
   RESEND_API_KEY=your-resend-key
   ```

3. **Build Settings (amplify.yml):**
   ```yaml
   version: 1
   applications:
     - appRoot: apps/web
       frontend:
         phases:
           preBuild:
             commands:
               - bun install
           build:
             commands:
               - bun run build
         artifacts:
           baseDirectory: .next
           files:
             - '**/*'
   ```

### Alternative: Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## 🧪 Testing

```bash
# Unit tests (when configured)
bun test

# E2E tests (when configured)
bun test:e2e
```

## 📦 Adding New Packages

```bash
# Add to specific app
cd apps/web
bun add package-name

# Add to workspace root
bun add -D package-name
```

## 🎯 Features Roadmap

### Implemented ✅
- [x] Turborepo monorepo setup
- [x] Next.js 15 with App Router
- [x] Multi-language support (en, es, fr)
- [x] Dark mode
- [x] Font size controls
- [x] Shared UI component library
- [x] GitHub Actions CI/CD
- [x] AWS deployment configuration

### Planned 🚧
- [ ] Blog with MDX rendering
- [ ] Project showcase with filters
- [ ] Contact form with AWS SES
- [ ] Analytics dashboard
- [ ] GitHub activity integration
- [ ] Command palette (⌘K)
- [ ] 3D hero animation
- [ ] Search functionality
- [ ] RSS feed
- [ ] Sitemap generation

## 🏗️ Architecture Highlights

### Monorepo Benefits
- **Code Sharing:** Shared UI components, configs, and utilities
- **Consistent Tooling:** One ESLint, Prettier, and TS config
- **Atomic Changes:** Update multiple apps in single PR
- **Build Caching:** Turborepo caches builds across apps

### Microfrontend Strategy
- **Independent Deployment:** Each app can deploy separately
- **Shared Components:** UI package consumed by all apps
- **Isolated Concerns:** Blog separate from main portfolio
- **Scalable:** Easy to add new apps (admin, docs, etc.)

## 🤝 Contributing

1. Create feature branch: `git checkout -b feature/name`
2. Make changes and test: `bun dev`
3. Lint and format: `bun lint && bun format`
4. Commit: `git commit -m "feat: description"`
5. Push and create PR

## 📄 License

MIT License - feel free to use for your own portfolio!

## 🔗 Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Turborepo Documentation](https://turbo.build/repo/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)

---

Built with ❤️ using Next.js 15, Turborepo, and Bun
