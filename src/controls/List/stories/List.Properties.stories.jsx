import { List } from '../List';

const Template = (args) => <List {...args} />;

export default {
  title: 'Controls/List',
  component: List,

  subcomponents: {
    'List.Item': List.Item,
    'List.Content': List.Content,
    'List.Description': List.Description,
    'List.Header': List.Header,
    'List.Icon': List.Icon,
  },

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
    children: [
      <List.Item key="apples">
        Red Delicious is a clone of apple cultigen, now comprising more than 50 cultivars, first
        recognized in Madison County, Iowa, in 1880. According to the US Apple Association website,
        it is one of the fifteen most popular apple cultivars in the United States.
      </List.Item>,
      <List.Item key="pears">Pears</List.Item>,
      <List.Item key="oranges">Oranges</List.Item>,
    ],
  },
};
