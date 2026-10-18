import { Placeholder } from '../Placeholder';
import { Divider } from '../../Divider';
import { Flex } from '../../Flex';
import { Segment } from '../../Segment';

const HeaderTemplate = (args) => (
  <Placeholder>
    <Placeholder.Header {...args}>
      <Placeholder.Line tall />
      <Placeholder.Line tall />
    </Placeholder.Header>
  </Placeholder>
);

const ImageTemplate = (args) => (
  <div>
    <Placeholder>
      <Placeholder.Image {...args} />
    </Placeholder>
    <Divider hidden />
    <Flex.Columns count={3}>
      <Segment>
        <Placeholder>
          <Placeholder.Image rectangular />
        </Placeholder>
      </Segment>
      <Segment>
        <Placeholder>
          <Placeholder.Image rectangular />
        </Placeholder>
      </Segment>
      <Segment>
        <Placeholder>
          <Placeholder.Image rectangular />
        </Placeholder>
      </Segment>
    </Flex.Columns>
  </div>
);

const LineTemplate = (args) => (
  <Placeholder>
    <Placeholder.Line {...args} />
    <Placeholder.Line />
    <Placeholder.Line length="short" />
    <Placeholder.Line length="medium" />
    <Placeholder.Line length="long" />
    <Placeholder.Line length="full" />
  </Placeholder>
);

const ParagraphTemplate = (args) => (
  <Placeholder>
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
  title: 'Controls/Placeholder/General',
  component: Placeholder,

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const PlaceholderHeader = {
  render: HeaderTemplate.bind({}),
  name: 'Placeholder.Header',

  args: {
    image: true,
  },
};

export const PlaceholderImage = {
  render: ImageTemplate.bind({}),
  name: 'Placeholder.Image',
  args: {},
};

export const PlaceholderLine = {
  render: LineTemplate.bind({}),
  name: 'Placeholder.Line',
  args: {},
};

export const PlaceholderParagraph = {
  render: ParagraphTemplate.bind({}),
  name: 'Placeholder.Paragraph',
  args: {},
};
