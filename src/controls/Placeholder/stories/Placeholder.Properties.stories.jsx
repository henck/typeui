import { Placeholder } from '../Placeholder';
import { Divider } from '../../Divider';
import { Flex } from '../../Flex';
import { Segment } from '../../Segment';

const Template = (args) => (
  <div>
    <Placeholder {...args}>
      <Placeholder.Header image>
        <Placeholder.Line tall />
        <Placeholder.Line tall />
      </Placeholder.Header>
      <Placeholder.Paragraph>
        <Placeholder.Line />
        <Placeholder.Line />
        <Placeholder.Line />
        <Placeholder.Line />
      </Placeholder.Paragraph>
      <Placeholder.Paragraph>
        <Placeholder.Line />
        <Placeholder.Line />
        <Placeholder.Line />
        <Placeholder.Line />
      </Placeholder.Paragraph>
    </Placeholder>
    <Divider hidden section />
    <Flex.Columns count={3}>
      <Segment raised>
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line tall length="long" />
            <Placeholder.Line tall length="medium" />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line length="medium" />
            <Placeholder.Line length="short" />
          </Placeholder.Paragraph>
        </Placeholder>
      </Segment>
      <Segment raised>
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line tall length="long" />
            <Placeholder.Line tall length="medium" />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line length="medium" />
            <Placeholder.Line length="short" />
          </Placeholder.Paragraph>
        </Placeholder>
      </Segment>
      <Segment raised>
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line tall length="long" />
            <Placeholder.Line tall length="medium" />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line length="medium" />
            <Placeholder.Line length="short" />
          </Placeholder.Paragraph>
        </Placeholder>
      </Segment>
    </Flex.Columns>
  </div>
);

export default {
  title: 'Controls/Placeholder',
  component: Placeholder,

  subcomponents: {
    'Placeholder.Header': Placeholder.Header,
    'Placeholder.Line': Placeholder.Line,
    'Placeholder.Paragraph': Placeholder.Paragraph,
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
