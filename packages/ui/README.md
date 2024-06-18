# `@repo/ui`

A stub component library for providing primitive UI components for use by Astro apps in this repo.

## Instructions

### Adding new components

Use the included generator to scaffold a new component in the `src` directory.

```
turbo gen astro-component
```

### Using components

Open any `.astro` file in `apps/web/src`, and import a component from the `@repo/ui` package:

```astro
---
import Button from '@repo/ui/Button.astro'
---

<p>Hello world!</p>
<Button>My Button</Button>
```

## Tailwind CSS

Tailwind CSS is included in this package should you want to use it for your UI components. Just add any customizations to the `tailwind.config.ts` file.

## Blueprint UI Components

If adding primitive UI components from Blueprint, just copy and paste them into the `src` directory, along with any necessary SVGs assets.

If using Tailwind styles as-is from Blueprint, be sure to add any customizations to the `tailwind.config.ts` file, along with any necessary Tailwind plugins from Blueprint.

Modify the components as needed, and follow the _using components_ instructions above to use them in your Astro site. Be sure to import the styles from this UI package in your base layout.

```astro
---
import '@repo/ui/styles.css'
// other imports and component scripts here
---

<html>
  <head>...</head>
  <body>...</body>
</html>
```
