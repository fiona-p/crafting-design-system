## Frontend – Design System

This project started as a take-home test, which I have continued to develop into a personal playground for building my own reusable components.

The repository is built with **Vite** and uses:

- **React**
- **TypeScript**
- **Storybook**
- **Vitest**

The initial test required **raw CSS**, which is why I have not used Sass, CSS Modules, or Tailwind.  
I may extend this in the future, but for now it serves as good practice in writing clean, maintainable vanilla CSS.

## Aim of this project

I'm building:

- reusable, self-contained UI components (`Tabs`, `TabList`)
- with clear public APIs (`variant`, `orientation`, etc.)
- with internal state managed by a shared context (`TabsProvider`)
- with accessibility features (`role="tablist"`, arrow key handling, orientation awareness)
- with theming / variants (`styles[variant]`)
- with a predictable component hierarchy
- built in a toolchain designed for component libraries (**React**, **TypeScript**, **Storybook**, **Vitest**)

## Install and Run

```bash
# Install dependencies
# This project uses `pnpm` as the package manager,
# but you can also use `npm` or `yarn`.
pnpm install

# Run the project
pnpm dev

# Optional: Run Storybook
pnpm storybook

# Run test
pnpm test
```

## Design decisions

I’ve added a document discussing some of the architectural and design decisions I made:
[here](./docs/ADR.md).

## Figma file

The original Figma design used in the challenge can be found in the assets folder: [here](./src/assets).
