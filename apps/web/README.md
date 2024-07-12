# Astro App

## Development

1. First follow the installation instructions in the repo [README](../../README.md).
1. Then run `turbo dev` from the root directory to run all apps in dev mode. Note that running `turbo dev` from the app/web directory will only run dev mode for the Astro app, but some routes use `getStaticPaths`, which relies on data from Payload CMS. So the cms app also needs to be running locally in dev mode.
1. Browse to http://localhost:4321/` to access the site.

If using VS Code, be sure to install the recommended [Astro extension](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode), which provides language support for `.astro` files.

## Astro Resources

- [Documentation](https://docs.astro.build)
- [GitHub Repo](https://github.com/withastro/astro)
- [Discord](https://astro.build/chat)
