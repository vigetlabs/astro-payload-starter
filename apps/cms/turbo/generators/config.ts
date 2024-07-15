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
    actions: (data) => {
      const actions: any[] = []

      // Add the configuration file
      actions.push({
        type: 'add',
        path: 'src/{{lowerCase type}}s/{{pascalCase name}}.ts',
        templateFile: 'templates/{{lowerCase type}}.hbs',
      })

      // Conditionally add collection configurations to the Payload config
      if (data.type === 'Collection') {
        // First import the collection configuration
        actions.push({
          type: 'append',
          path: 'src/payload.config.ts',
          pattern: /from '\.\/collections\/Users'(?<insertion>)/g,
          template:
            "import { {{pascalCase name}} } from './collections/{{pascalCase name}}'",
        })

        // Then add it to the collections array
        actions.push({
          type: 'append',
          path: 'src/payload.config.ts',
          pattern: /collections: \[(?<insertion>)/,
          separator: '',
          template: '{{pascalCase name}}, ',
        })
      }

      return actions
    },
  })
}
