import { Placeholder } from '../Placeholder';
import { Divider } from '../../Divider';
import { Flex } from '../../Flex';
import { Segment } from '../../Segment';

const FluidTemplate = (args) => (
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
);

export default {
  title: 'Controls/Placeholder/Variations',
  component: Placeholder,

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const Fluid = {
  render: FluidTemplate.bind({}),
  name: 'fluid',

  args: {
    fluid: true,
  },
};
