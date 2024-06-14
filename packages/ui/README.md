# `@repo/ui`

A stub component library for providing primitive UI components for use by Astro apps in this repo.

## Instructions

### Adding new components

Use the included generator to scaffold a new component in the `src` directory.

```
turbo gen astro-component
```

### Using components

Open any `.astro` file in `apps/web/src`, and import a component from this UI package:

```astro
---
// in apps/web/src/components/Footer.astro
import Button from '@repo/ui/Button.astro'
---

<footer>
  <Button>Text</Button>
</footer>
```
