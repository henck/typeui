import { Tabs } from '../Tabs';

const Template = (args) => (
  <Tabs {...args}>
    <Tabs.Pane label="One">
      <p>Content for first tab.</p>
      <p>Additional line of content.</p>
    </Tabs.Pane>
    <Tabs.Pane label="Two">Content for second tab.</Tabs.Pane>
    <Tabs.Pane label="Three">Content for third tab.</Tabs.Pane>
  </Tabs>
);

export default {
  title: 'Controls/Tabs',
  component: Tabs,

  subcomponents: {
    'Tabs.Pane': Tabs.Pane,
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
  args: {},
};
