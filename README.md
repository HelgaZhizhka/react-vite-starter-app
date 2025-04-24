# React19 + TypeScript5.8 + Vite6 + Vitest + pnpm

This is a modern React starter setup built with [Vite](https://vitejs.dev/), using **pnpm** as a package manager.  
It includes strict linting, formatting, testing setup, and environment variables support.

## 🚀 Tech Stack

- **React 19**
- **TypeScript 5.8**
- **Vite 6**
- **pnpm**
- **Vitest** for unit testing
- **Husky** + **lint-staged** for Git hooks
- **ESLint**, **Prettier**, **StyleLint** for code quality
- `.env` support for configuration

## Linting and Formatting

The project uses strict linting configuration:

### ESLint

- typescript-eslint for TypeScript
- eslint-plugin-react for React
- eslint-plugin-react-hooks for hooks
- eslint-plugin-import for imports
- eslint-plugin-jsx-a11y for accessibility
- eslint-plugin-unicorn for additional rules

### StyleLint

- stylelint-config-standard
- stylelint-config-clean-order for CSS properties ordering

### Prettier

- Automatic formatting on commit
- ESLint integration

## Git Hooks

Project uses husky and lint-staged for:

- Automatic code formatting on commit
- Linting before commit
- Prettier before commit
- TypeScript type checking
- Running tests before pushing

## Development Guidelines

1. **TypeScript**

   - Always use strict typing
   - Avoid using `any`
   - Use explicit return types for functions

2. **React**

   - Follow hooks rules
   - Use functional components
   - Follow component naming conventions

3. **Styles**
   - Follow established CSS properties order
   - Use CSS variables for repeated values

## 📦 Installation

```bash
pnpm install
```

## 🏗️ Development

```bash
pnpm run dev
```

## 🧪 Testing

```bash
pnpm run test
```

## 🏗️ Build

```bash
pnpm run build
```

## 🧪 Test Coverage

```bash
pnpm run test:coverage
```

## Setup Git hooks

```bash
pnpm run prepare
```

## ESLint

```bash
pnpm run lint:fix
```

## Environment Variables

- Create a `.env` file in the root directory
- Add your environment variables in the format `VITE_YOUR_VARIABLE=value`
- Access them in your code using `import.meta.env.VITE_YOUR_VARIABLE`

## Troubleshooting

- If you encounter issues with ESLint or Prettier, try deleting the `.eslintcache` file and re-running the linting command.
- If you encounter issues with Husky, try re-installing it using `pnpm prepare`.

## Clear ESLint Cache

```bash
pnpm run lint -- --cache-location .eslintcache
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
