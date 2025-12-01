# React19 + TypeScript5.9 + Vite7 + Vitest + pnpm

This is a modern React starter setup built with [Vite](https://vitejs.dev/), using **pnpm** as a package manager.
It includes strict linting, formatting, testing setup, and environment variables support.

Perfect for student team projects and learning modern React development.

## Tech Stack

- **React 19.2** - Latest React with new compiler
- **TypeScript 5.9** - Type-safe JavaScript
- **Vite 7** - Lightning fast build tool
- **Vitest 4** - Modern unit testing
- **pnpm** - Fast, disk space efficient package manager
- **Husky** + **lint-staged** - Git hooks for code quality
- **ESLint**, **Prettier**, **StyleLint** - Code quality tools
- `.env.example` for configuration

## Installation

```bash
pnpm install
```

## Available Commands

```bash
# Development
pnpm run dev              # Start dev server with hot reload
pnpm run build            # Build for production
pnpm run preview          # Preview production build locally

# Code Quality
pnpm run lint             # Run ESLint
pnpm run lint:fix         # Fix ESLint errors automatically
pnpm run format           # Format code with Prettier
pnpm run format:check     # Check if code is formatted
pnpm run lint:styles      # Lint CSS files
pnpm run lint:styles:fix  # Fix CSS linting issues

# Testing
pnpm run test             # Run tests once
pnpm run test:watch       # Run tests in watch mode
pnpm run test:ui          # Run tests with UI
pnpm run test:coverage    # Run tests with coverage report

# Git Hooks
pnpm run prepare          # Setup Husky git hooks
```

## Project Structure

```
react-vite-starter-app/
├── src/
│   ├── components/      # React components
│   │   ├── app/         # Main App component
│   │   └── button/      # Example Button component
│   ├── pages/           # Page components (for routing)
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Utility functions
│   ├── types/           # TypeScript type definitions
│   ├── constants/       # Constants and enums
│   ├── api/             # API clients and services
│   ├── assets/          # Images, fonts, etc.
│   ├── styles/          # Global styles
│   └── __tests__/       # Test files
├── public/              # Static assets
├── .husky/             # Git hooks
└── dist/               # Production build (generated)
```

### Component Structure Recommendations

You can organize components in different ways depending on your project needs:

#### Option 1: Flat Structure (Recommended for Small Projects)

```
src/components/
├── button/
│   ├── index.tsx
│   ├── button.module.css
│   └── button.test.tsx
├── header/
├── footer/
└── card/
```

#### Option 2: Grouped by Type (Recommended for Medium Projects)

```
src/components/
├── ui/              # Reusable UI components
│   ├── button/
│   ├── input/
│   └── card/
├── layout/          # Layout components
│   ├── header/
│   ├── footer/
│   └── sidebar/
└── features/        # Feature-specific components
    ├── login-form/
    └── user-profile/
```

#### Option 3: FSD (for Larger Projects)

**Choose the structure that fits your team's needs!**

## Component Examples

### Creating a New Component

Example of a properly structured component:

```typescript
// src/components/card/index.tsx
import type { ReactNode } from 'react';

interface CardProps {
  title: string;
  children: ReactNode;
  onAction?: () => void;
}

export const Card = ({ title, children, onAction }: CardProps): React.JSX.Element => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-content">{children}</div>
      {onAction && (
        <button onClick={onAction}>Action</button>
      )}
    </div>
  );
};
```

## Git Workflow

1. **Clone the repository**

   ```bash
   git clone git@github.com:HelgaZhizhka/react-vite-starter-app.git
   cd react-vite-starter-app
   pnpm install
   ```

2. **Create a feature branch**

   ```bash
   git checkout -b feat/your-feature-name
   ```

3. **Make your changes and commit**

   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

   **Commit message format (enforced by commitlint):**
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation changes
   - `style:` - Code style changes (formatting)
   - `refactor:` - Code refactoring
   - `test:` - Adding tests
   - `chore:` - Maintenance tasks

4. **Push your branch**

   ```bash
   git push origin feat/your-feature-name
   ```

5. **Create a Pull Request**
   - Go to GitHub/GitLab
   - Create a PR from your branch to `main`
   - Wait for code review
   - Address review comments
   - After approved, merge your PR

### Code Review Checklist

Before requesting a review, make sure:

- [ ] Code follows the project structure
- [ ] All tests pass (`pnpm run test`)
- [ ] No linting errors (`pnpm run lint`)
- [ ] Code is formatted (`pnpm run format`)
- [ ] TypeScript types are correct (no `any`)
- [ ] Components are properly typed
- [ ] Tests are added for new features
- [ ] README is updated if needed

### Git Hooks (Automatic Checks)

The project uses Husky to run automatic checks:

- **Pre-commit**: Runs Prettier, ESLint, and StyleLint on staged files
- **Commit-msg**: Validates commit message format
- **Pre-push**: You can add test runs here

## Environment Variables

1. Copy `.env.example` to `.env`:

   ```bash
   cp .env.example .env
   ```

2. Add your variables:

   ```env
   VITE_API_URL=http://localhost:3000/api
   VITE_APP_NAME=My Student Project
   ```

3. Use in code:
   ```typescript
   const apiUrl = import.meta.env.VITE_API_URL;
   ```

**Important**: All environment variables must be prefixed with `VITE_` to be exposed to the client.

## Testing

### Running Tests

```bash
# Run once
pnpm run test

# Watch mode (recommended during development)
pnpm run test:watch

# With UI
pnpm run test:ui

# With coverage
pnpm run test:coverage
```

### Test File Naming

- Place tests in `__tests__` folders or next to the file
- Name: `*.test.ts` or `*.test.tsx`
- Example: `button.test.tsx`

## Linting and Formatting

The project uses strict linting configuration to maintain code quality:

### ESLint Plugins

- `typescript-eslint` - TypeScript-specific rules
- `eslint-plugin-react` - React best practices
- `eslint-plugin-react-hooks` - React Hooks rules
- `eslint-plugin-react-compiler` - React 19 compiler rules
- `eslint-plugin-import` - Import/export conventions
- `eslint-plugin-jsx-a11y` - Accessibility rules
- `eslint-plugin-unicorn` - Additional code quality rules

### StyleLint

- `stylelint-config-standard` - Standard CSS rules
- `stylelint-config-clean-order` - Enforces CSS property order

### Prettier

Automatic code formatting on commit. Configuration in `.prettierrc`.

## Recommended Tools & Extensions

### Browser Extensions

- **React DevTools** - Debug React components
- **Redux DevTools** - If you add Redux later

## Advanced Tools (Optional)

### Storybook - Component Development Environment

[Storybook](https://storybook.js.org/) is a tool for developing UI components in isolation.

**Why use Storybook:**

- Develop components independently
- Visual testing
- Documentation for your components
- Great for team collaboration

**Installation:**

```bash
pnpx storybook@latest init
```

**Usage:**

```typescript
// src/components/button/button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './index';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Click me',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Click me',
  },
};
```

### Code Quality Analysis - SonarCloud

For learning clean code best practices, we recommend checking out our repository [Clean-Code](https://github.com/HelgaZhizhka/mentor-resources/blob/master/clean-code/index.md), which contains all the practices for students.

You can also use [SonarCloud](https://sonarcloud.io/) in your project, which automatically analyzes code for bugs, vulnerabilities, and code smells, providing coverage of the main recommendations from our repository.

**Why use SonarCloud:**

- Automatic code quality checks
- Security vulnerability detection
- Code smell detection
- Technical debt tracking
- Free for open-source projects

## Troubleshooting

### ESLint Issues

```bash
# Clear ESLint cache
pnpm run lint -- --cache-location .eslintcache

# Or delete cache manually
rm -rf .eslintcache
```

### Husky Issues

```bash
# Reinstall Husky
pnpm run prepare
```

### Port Already in Use

```bash
# Change port in vite.config.ts or use:
pnpm run dev -- --port 3000
```

### Type Errors After Package Update

```bash
# Clear TypeScript cache
rm -rf node_modules/.vite
pnpm install
```

## FAQ

**Q: Do I need to configure routing?**
A: No, this starter doesn't include routing. Add [React Router](https://reactrouter.com/) when you need it:

```bash
pnpm add react-router-dom
pnpm add -D @types/react-router-dom
```

**Q: Can I use CSS frameworks like Tailwind?**
A: Yes! The StyleLint config already supports Tailwind. Install it:

```bash
pnpm add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Q: Should I use Redux/Zustand for state management?**
A: Start with React Context and hooks. Add state management libraries only when needed.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

**Happy coding!**
