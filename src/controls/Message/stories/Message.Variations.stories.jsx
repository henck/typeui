import { Message } from '../Message';
import { Icon } from '../../Icon';

const Template = (args) => <Message {...args} />;

const AlignTemplate = (args) => (
  <div>
    <Message align="left">
      <Message.Header>Left</Message.Header>
      <p>
        Marooned rum capstan galleon fathom yard American Main Admiral of the Black grog blossom
        lee. Square-rigged gabion to go on account piracy wench line sheet poop deck squiffy Gold
        Road. Hang the jib tender coffer to go on account fore brigantine jury mast poop deck long
        clothes heave to.
      </p>
    </Message>
    <Message align="right">
      <Message.Header>Right</Message.Header>
      <p>
        Marooned rum capstan galleon fathom yard American Main Admiral of the Black grog blossom
        lee. Square-rigged gabion to go on account piracy wench line sheet poop deck squiffy Gold
        Road. Hang the jib tender coffer to go on account fore brigantine jury mast poop deck long
        clothes heave to.
      </p>
    </Message>
    <Message align="center">
      <Message.Header>Center</Message.Header>
      <p>
        Marooned rum capstan galleon fathom yard American Main Admiral of the Black grog blossom
        lee. Square-rigged gabion to go on account piracy wench line sheet poop deck squiffy Gold
        Road. Hang the jib tender coffer to go on account fore brigantine jury mast poop deck long
        clothes heave to.
      </p>
    </Message>
  </div>
);

const ColorTemplate = (args) => (
  <div>
    <Message color="SteelBlue">
      <Message.Header>Steel Blue</Message.Header>
      <p>A nice shade of blue.</p>
    </Message>
    <Message color="HotPink">
      <Message.Header>Hot Pink</Message.Header>
      <p>Attractive, isn't it?</p>
    </Message>
    <Message color="Brown">
      <Message.Header>Brown</Message.Header>
      <p>Brown is not attractive.</p>
    </Message>
  </div>
);

const CompactTemplate = (args) => (
  <div>
    <Message compact>
      <Message.Header>Changes in Service</Message.Header>
      <p>We updated our privacy policy.</p>
    </Message>
    <Message compact icon>
      <Icon name="circle" size="big" loading />
      <Message.Content>
        <Message.Header>Changes in Service</Message.Header>
        <p>We updated our privacy policy.</p>
      </Message.Content>
    </Message>
  </div>
);

const RaisedTemplate = (args) => (
  <div>
    <Message raised>
      <Message.Header>Raised</Message.Header>
      <p>A raised message box attracts more attention.</p>
    </Message>
    <Message raised color="HotPink">
      <Message.Header>Hot Pink</Message.Header>
      <p>Attractive, isn't it?</p>
    </Message>
  </div>
);

const TypeTemplate = (args) => (
  <div>
    <Message type="info">
      <Message.Header>Was this what you wanted?</Message.Header>
      <p>Did you know it's been a while?</p>
    </Message>
    <Message type="warning">
      <Message.Header>You must register before you can do that!</Message.Header>
      <p>Visit our registration page, then try again.</p>
    </Message>
    <Message type="success">
      <Message.Header>You are eligible for a reward</Message.Header>
      <p>Go to your special offers page to see how.</p>
    </Message>
    <Message type="error">
      <Message.Header>We're sorry we can't apply that discount</Message.Header>
      <p>That offer has expired.</p>
    </Message>
  </div>
);

export default {
  title: 'Controls/Message/Variations',
  component: Message,

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
  name: 'align',
  args: {},
};

export const Color = {
  render: ColorTemplate.bind({}),
  name: 'color',
  args: {},
};

export const Compact = {
  render: CompactTemplate.bind({}),
  name: 'compact',
  args: {},
};

export const Raised = {
  render: RaisedTemplate.bind({}),
  name: 'raised',
  args: {},
};

export const Type = {
  render: TypeTemplate.bind({}),
  name: 'type',
  args: {},
};
