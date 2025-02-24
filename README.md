# React18 + TypeScript5 + Vite6 + TailwindCSS

This is the sample setup, created with [Vite](https://vitejs.dev/guide/) and for the purposes of showing the bare minimum required for the React application.

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
- TypeScript type checking

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

## Troubleshooting

### Common Issues and Solutions

1. **ESLint Conflicts**

   ```bash
   npm run lint:fix
   ```

2. **Git Hooks Issues**

   ```bash
   npm run prepare
   ```

3. **Clear ESLint Cache**
   ```bash
   npm run lint -- --cache-location .eslintcache
   ```

## License

[Specify your license]
