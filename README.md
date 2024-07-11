# Astro + Payload CMS Starter

This is a project starter for Astro + Payload CMS using Turborepo.

## Requirements

- Node.js 20+
- [Turborepo](https://turbo.build/repo/docs/getting-started/installation#global-installation)
- [pnpm](https://pnpm.io/installation) (recommended)
- MongoDB - [Installed and running locally](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/), or you can sign up for a free [MongoDB Atlas server](https://www.mongodb.com/cloud/atlas/register).

## Create Project

To create a new project using this starter repo as an example, run the following command:

```bash
npx create-turbo@latest -e https://github.com/vigetlabs/astro-payload-starter
```

Follow the prompts and choose a package manager. `pnpm` is recommended. The project will be set up with all dependencies installed.

Next, copy the environment variable files for the cms and web apps.

```bash
cp apps/cms/.env.example apps/cms/.env
cp apps/web/.env.example apps/web/.env
```

After your project is created, be sure to remove this "create project" section from your new project's readme file.

## Setup

```bash
pnpm install
cp apps/cms/.env.example apps/cms/.env
cp apps/web/.env.example apps/web/.env
```

Tip: `pnpm` might be hard to type, so you may want to use a [shorter alias](https://pnpm.io/installation#using-a-shorter-alias) like `p` or `pn` instead.

## What's included?

This Turborepo includes the following apps and packages:

### Apps

- `@repo/cms`: a [Payload CMS](https://payloadcms.com/) app
- `@repo/web`: an [Astro](https://astro.build/) app

### Packages

- `@repo/eslint-config`: shared ESLint configurations
- `@repo/typescript-config`: shared `tsconfig.json`s used throughout the monorepo
- `@repo/ui`: a stub Astro component library used by the `web` app above

### Utilities

This Turborepo has some additional tools already set up:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Develop

To develop all apps and packages, run the following command:

```bash
turbo dev
```

Browse to http://localhost:3000/admin for Payload CMS and http://localhost:4321 for the Astro site!

## Build

To build all apps and packages, run the following command:

```bash
turbo build
```

## Code Generators

Several custom generators are available for extending the cms app and the ui package in a structured way.

- payload-configuration: Adds a new configuration file for Payload CMS
- astro-component: Adds a new primitive UI component for Astro

To generate new source code using one of these custom generators, run the following command from anywhere within the monorepo:

```bash
turbo gen
```

Select a generator from the list, and follow the prompts to provide the requested information.

For more info on code generators, see the [generating code](https://turbo.build/repo/docs/guides/generating-code) guide, as well as the API reference for the [generate command](https://turbo.build/repo/docs/reference/generate).

## Useful Links

- [Astro](https://docs.astro.build)
- [Payload CMS](https://payloadcms.com/docs)
- [Turborepo](https://turbo.build/repo/docs)
