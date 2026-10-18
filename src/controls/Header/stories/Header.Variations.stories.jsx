import { Header } from '../Header';
import { Icon } from '../../Icon';
import { Image } from '../../Image';
import { Segment } from '../../Segment';
import { Message } from '../../Message';

const Template = (args) => <Header {...args}>Header</Header>;

const AlignTemplate = (args) => (
  <div>
    <Header {...args}>Left header</Header>
    <Header size="h1" align="center">
      Center header
    </Header>
    <Header size="h1" align="right">
      Right header
    </Header>
  </div>
);

const FloatTemplate = (args) => (
  <Segment>
    <Header {...args}>Float Left</Header>
    <Header size="h1" float="right">
      Float right
    </Header>
  </Segment>
);

const AttachedTemplate = (args) => (
  <div>
    <Header {...args}>Header 2</Header>
    <Segment attached>
      <p>
        Marooned rum capstan galleon fathom yard American Main Admiral of the Black grog blossom
        lee. Square-rigged gabion to go on account piracy wench line sheet poop deck squiffy Gold
        Road. Hang the jib tender coffer to go on account fore brigantine jury mast poop deck long
        clothes heave to.
      </p>
    </Segment>
    <Message attached="bottom" type="warning">
      This is a message.
    </Message>
  </div>
);

export default {
  title: 'Controls/Header/Variations',
  component: Header,

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const Align = {
  render: AlignTemplate.bind({}),
  name: 'Align',

  args: {
    size: 'h1',
    align: 'left',
  },
};

export const Block = {
  render: Template.bind({}),
  name: 'Block',

  args: {
    size: 'h1',
    block: true,
  },
};

export const Color = {
  render: Template.bind({}),
  name: 'Color',

  args: {
    size: 'h1',
    color: 'goldenrod',
  },
};

export const Dividing = {
  render: Template.bind({}),
  name: 'Dividing',

  args: {
    size: 'h1',
    dividing: true,
  },
};

export const Float = {
  render: FloatTemplate.bind({}),
  name: 'Float',

  args: {
    size: 'h1',
    float: 'left',
  },
};

export const Attached = {
  render: AttachedTemplate.bind({}),
  name: 'Attached',

  args: {
    size: 'h2',
    attached: 'top',
  },
};
