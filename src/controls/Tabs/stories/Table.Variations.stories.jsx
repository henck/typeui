import { Segment } from '../../Segment';
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

const ScrollableTemplate = (args) => (
  <Tabs {...args}>
    <Tabs.Pane label="One">
      <Segment>Content for first tab.</Segment>
    </Tabs.Pane>
    <Tabs.Pane label="Two">
      <Segment>Content for second tab.</Segment>
    </Tabs.Pane>
    <Tabs.Pane label="Three">
      <Segment>Content for third tab.</Segment>
    </Tabs.Pane>
    <Tabs.Pane label="Four">
      <Segment>Content for fourth tab.</Segment>
    </Tabs.Pane>
    <Tabs.Pane label="Five">
      <Segment>Content for fifth tab.</Segment>
    </Tabs.Pane>
    <Tabs.Pane label="Six">
      <Segment>Content for sixth tab.</Segment>
    </Tabs.Pane>
    <Tabs.Pane label="Seven">
      <Segment>Content for seventh tab.</Segment>
    </Tabs.Pane>
    <Tabs.Pane label="Eight">
      <Segment>Content for eighth tab.</Segment>
    </Tabs.Pane>
    <Tabs.Pane label="Nine">
      <Segment>Content for ninth tab.</Segment>
    </Tabs.Pane>
    <Tabs.Pane label="Ten">
      <Segment>Content for tenth tab.</Segment>
    </Tabs.Pane>
    <Tabs.Pane label="Eleven">
      <Segment>Content for eleventh tab.</Segment>
    </Tabs.Pane>
    <Tabs.Pane label="Twelve">
      <Segment>Content for twelfth tab.</Segment>
    </Tabs.Pane>
    <Tabs.Pane label="Thirteen">
      <Segment>Content for thirteenth tab.</Segment>
    </Tabs.Pane>
    <Tabs.Pane label="Fourteen">
      <Segment>Content for fourteenth tab.</Segment>
    </Tabs.Pane>
    <Tabs.Pane label="Fifteen">
      <Segment>Content for fifteenth tab.</Segment>
    </Tabs.Pane>
  </Tabs>
);

export default {
  title: 'Controls/Tabs/Variations',
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

export const Nohiddenrender = {
  render: Template.bind({}),
  name: 'nohiddenrender',

  args: {
    nohiddenrender: true,
  },
};

export const Scrollable = {
  render: ScrollableTemplate.bind({}),
  name: 'scrollable',
  args: {},
};

export const Underlined = {
  render: Template.bind({}),
  name: 'underlined',

  args: {
    underlined: true,
  },
};
