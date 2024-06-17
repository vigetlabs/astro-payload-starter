import type { PlopTypes } from '@turbo/gen'

// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // A simple generator to add new Payload CMS configuration files
  plop.setGenerator('payload-configuration', {
    description: 'Adds a new configuration file for Payload CMS',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'What type of configuration are you adding?',
        choices: ['Block', 'Collection'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the configuration?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{lowerCase type}}s/{{pascalCase name}}.ts',
        templateFile: 'templates/{{lowerCase type}}.hbs',
      },
    ],
  })
}
