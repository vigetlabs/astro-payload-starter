import type { PlopTypes } from '@turbo/gen'

// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // A simple generator to add a new Astro component to the internal UI library
  plop.setGenerator('astro-component', {
    description: 'Adds a new primitive UI component for Astro',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the component?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{pascalCase name}}.astro',
        templateFile: 'templates/component.hbs',
      },
    ],
  })
}
