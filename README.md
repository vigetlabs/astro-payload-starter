# Astro + Payload CMS Starter

This is a project starter for Astro + Payload CMS using Turborepo.

## Create Project

TODO: Instructions for _creating_ a new project with this starter.

## Requirements

- Node
- MongoDB - You need to either have MongoDB running locally, or have signed up for a free MongoDB Atlas server in order to test this repo locally.

## Installation

Run the following commands:

```sh
pnpm install
cp apps/cms/.env.example apps/cms/.env
```

## What's included?

This project starter includes the following apps and packages:

### Apps and Packages

- `cms`: a [Payload CMS](https://payloadcms.com/) app
- `web`: an [Astro](https://astro.build/) app
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

### Utilities

This Turborepo has some additional tools already set up:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```sh
turbo build
```

### Develop

To develop all apps and packages, run the following command:

```sh
turbo dev
```

Browse to http://localhost:3000/admin for Payload CMS and http://localhost:4321 for the Astro site!

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
