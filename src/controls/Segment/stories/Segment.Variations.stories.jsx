import { Segment } from '../Segment';

const Template = (args) => <Segment {...args} />;

const AlignTemplate = (args) => (
  <div>
    <Segment {...args}>
      Left:{' '}
      <p>
        Marooned rum capstan galleon fathom yard American Main Admiral of the Black grog blossom
        lee. Square-rigged gabion to go on account piracy wench line sheet poop deck squiffy Gold
        Road. Hang the jib tender coffer to go on account fore brigantine jury mast poop deck long
        clothes heave to.
      </p>
      <p>
        Lugger clap of thunder grapple gally sheet heave to come about Jolly Roger ballast poop
        deck. Chandler Jack Tar black spot transom pillage haul wind lugsail tender lugger list.
        Yardarm snow tackle lee trysail keel cable scuppers avast matey.
      </p>
    </Segment>
    <Segment align="center">
      Center:{' '}
      <p>
        Marooned rum capstan galleon fathom yard American Main Admiral of the Black grog blossom
        lee. Square-rigged gabion to go on account piracy wench line sheet poop deck squiffy Gold
        Road. Hang the jib tender coffer to go on account fore brigantine jury mast poop deck long
        clothes heave to.
      </p>
      <p>
        Lugger clap of thunder grapple gally sheet heave to come about Jolly Roger ballast poop
        deck. Chandler Jack Tar black spot transom pillage haul wind lugsail tender lugger list.
        Yardarm snow tackle lee trysail keel cable scuppers avast matey.
      </p>
    </Segment>
    <Segment align="right">
      Right:{' '}
      <p>
        Marooned rum capstan galleon fathom yard American Main Admiral of the Black grog blossom
        lee. Square-rigged gabion to go on account piracy wench line sheet poop deck squiffy Gold
        Road. Hang the jib tender coffer to go on account fore brigantine jury mast poop deck long
        clothes heave to.
      </p>
      <p>
        Lugger clap of thunder grapple gally sheet heave to come about Jolly Roger ballast poop
        deck. Chandler Jack Tar black spot transom pillage haul wind lugsail tender lugger list.
        Yardarm snow tackle lee trysail keel cable scuppers avast matey.
      </p>
    </Segment>
  </div>
);

const EmphasisTemplate = (args) => (
  <div>
    <Segment {...args}>
      I'm here to tell you something, and you will probably read me first.
    </Segment>
    <Segment secondary>
      I am pretty noticeable but you might check out other content before you look at me.
    </Segment>
    <Segment tertiary>If you notice me you must be looking very hard.</Segment>
  </div>
);

const FloatTemplate = (args) => (
  <Segment>
    <p>This parent segment is self-clearing.</p>
    <Segment float="left">This segment will appear to the left.</Segment>
    <Segment float="right">This segment will appear to the right.</Segment>
  </Segment>
);

const PaddedTemplate = (args) => (
  <div>
    <Segment {...args}>
      <p>
        Marooned rum capstan galleon fathom yard American Main Admiral of the Black grog blossom
        lee. Square-rigged gabion to go on account piracy wench line sheet poop deck squiffy Gold
        Road. Hang the jib tender coffer to go on account fore brigantine jury mast poop deck long
        clothes heave to.
      </p>
      <p>
        Lugger clap of thunder grapple gally sheet heave to come about Jolly Roger ballast poop
        deck. Chandler Jack Tar black spot transom pillage haul wind lugsail tender lugger list.
        Yardarm snow tackle lee trysail keel cable scuppers avast matey.
      </p>
    </Segment>
    <Segment padded="very">
      <p>
        Marooned rum capstan galleon fathom yard American Main Admiral of the Black grog blossom
        lee. Square-rigged gabion to go on account piracy wench line sheet poop deck squiffy Gold
        Road. Hang the jib tender coffer to go on account fore brigantine jury mast poop deck long
        clothes heave to.
      </p>
      <p>
        Lugger clap of thunder grapple gally sheet heave to come about Jolly Roger ballast poop
        deck. Chandler Jack Tar black spot transom pillage haul wind lugsail tender lugger list.
        Yardarm snow tackle lee trysail keel cable scuppers avast matey.
      </p>
    </Segment>
  </div>
);

const StackedTemplate = (args) => (
  <div>
    <Segment {...args}>
      <p>
        Marooned rum capstan galleon fathom yard American Main Admiral of the Black grog blossom
        lee. Square-rigged gabion to go on account piracy wench line sheet poop deck squiffy Gold
        Road. Hang the jib tender coffer to go on account fore brigantine jury mast poop deck long
        clothes heave to.
      </p>
      <p>
        Lugger clap of thunder grapple gally sheet heave to come about Jolly Roger ballast poop
        deck. Chandler Jack Tar black spot transom pillage haul wind lugsail tender lugger list.
        Yardarm snow tackle lee trysail keel cable scuppers avast matey.
      </p>
    </Segment>
    <Segment tall stacked>
      <p>
        Marooned rum capstan galleon fathom yard American Main Admiral of the Black grog blossom
        lee. Square-rigged gabion to go on account piracy wench line sheet poop deck squiffy Gold
        Road. Hang the jib tender coffer to go on account fore brigantine jury mast poop deck long
        clothes heave to.
      </p>
      <p>
        Lugger clap of thunder grapple gally sheet heave to come about Jolly Roger ballast poop
        deck. Chandler Jack Tar black spot transom pillage haul wind lugsail tender lugger list.
        Yardarm snow tackle lee trysail keel cable scuppers avast matey.
      </p>
    </Segment>
  </div>
);

export default {
  title: 'Controls/Segment/Variations',
  component: Segment,

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

  args: {
    align: 'left',
  },
};

export const Compact = {
  render: Template.bind({}),
  name: 'compact',

  args: {
    compact: true,
    children: 'Enough said.',
  },
};

export const Emphasis = {
  render: EmphasisTemplate.bind({}),
  name: 'Emphasis',
  args: {},
};

export const Float = {
  render: FloatTemplate.bind({}),
  name: 'float',
  args: {},
};

export const Padded = {
  render: PaddedTemplate.bind({}),
  name: 'padded',

  args: {
    padded: true,
  },
};

export const Piled = {
  render: Template.bind({}),
  name: 'piled',

  args: {
    piled: true,
    children: 'This is a piled segment.',
  },
};

export const Raised = {
  render: Template.bind({}),
  name: 'raised',

  args: {
    raised: true,
    children: 'This is a raised segment.',
  },
};

export const Stacked = {
  render: StackedTemplate.bind({}),
  name: 'stacked',

  args: {
    stacked: true,
    children: 'This is a stacked segment.',
  },
};

export const Tight = {
  render: Template.bind({}),
  name: 'tight',

  args: {
    tight: true,
    children: 'This is a tight segment.',
  },
};
