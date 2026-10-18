import { Markdown } from '../Markdown';

const Template = (args) => <Markdown {...args} />;

const template =
  '# Heading 1\n' +
  '## Heading 2\n' +
  '### Heading 3\n' +
  '#### Heading 4\n' +
  '##### Heading 5\n' +
  '###### Heading 6\n' +
  '\n' +
  '### List support\n' +
  '\n' +
  '* There once was a wonderful star\n' +
  '* Who thought she would go very far\n' +
  '* Until she fell down\n' +
  '* And looked like a clown\n' +
  '* She knew she would never go far.\n' +
  '\n' +
  '### Table support\n' +
  '\n' +
  '| Syntax | Description |\n' +
  '| ----------- | ----------- |\n' +
  '| Header | Title |\n' +
  '| Paragraph | Text |\n' +
  '\n' +
  '### Image support\n' +
  '\n' +
  '![Joe](https://react.semantic-ui.com/images/avatar/large/elliot.jpg)\n' +
  '\n';

export default {
  title: 'Formatters/Markdown',
  component: Markdown,

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const Properties = {
  render: Template.bind({}),
  name: 'Properties',

  args: {
    source: template,
  },
};
