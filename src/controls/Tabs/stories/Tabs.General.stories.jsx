import { Tabs } from '../Tabs';
import { Label } from '../../Label';
import { Flex } from '../../Flex';
import { Icon } from '../../Icon';

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

const LabelContentTemplate = (args) => (
  <Tabs {...args}>
    <Tabs.Pane
      label={
        <Flex.Quick>
          <Icon name="code" /> Hello
        </Flex.Quick>
      }
    >
      <p>Content for first tab.</p>
      <p>Additional line of content.</p>
    </Tabs.Pane>
    <Tabs.Pane
      label={
        <span>
          Messages <Label>15</Label>
        </span>
      }
    >
      Content for second tab.
    </Tabs.Pane>
    <Tabs.Pane label="Three">Content for third tab.</Tabs.Pane>
  </Tabs>
);

export default {
  title: 'Controls/Tabs/General',
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

export const Active = {
  render: Template.bind({}),
  name: 'active',

  args: {
    active: 1,
  },
};

export const LabelStory = {
  render: LabelContentTemplate.bind({}),
  name: 'label',
  args: {},
};
