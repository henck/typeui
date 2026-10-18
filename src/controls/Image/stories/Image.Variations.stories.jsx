import { Divider } from '../../Divider';
import { Image } from '../Image';
import { Label } from '../../Label';
import { Icon } from '../../Icon';
import { Segment } from '../../Segment';

const Template = (args) => <Image {...args} />;

const AlignTemplate = (args) => (
  <div>
    <p>
      Aligned{' '}
      <Image
        inline
        size="mini"
        align="top"
        src="http://deelay.me/1000/https://react.semantic-ui.com/images/avatar/small/joe.jpg"
      />{' '}
      to top.
    </p>
    <p>
      Aligned{' '}
      <Image
        inline
        size="mini"
        align="center"
        src="http://deelay.me/1000/https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
      />{' '}
      to center.
    </p>
    <p>
      Aligned{' '}
      <Image
        inline
        size="mini"
        align="bottom"
        src="http://deelay.me/1000/https://react.semantic-ui.com/images/avatar/small/stevie.jpg"
      />{' '}
      to bottom.
    </p>
  </div>
);

const CenteredTemplate = (args) => (
  <div>
    <p>
      Marooned rum capstan galleon fathom yard American Main Admiral of the Black grog blossom lee.
      Square-rigged gabion to go on account piracy wench line sheet poop deck squiffy Gold Road.
      Hang the jib tender coffer to go on account fore brigantine jury mast poop deck long clothes
      heave to.
    </p>
    <p>
      Lugger clap of thunder grapple gally sheet heave to come about Jolly Roger ballast poop deck.
      Chandler Jack Tar black spot transom pillage haul wind lugsail tender lugger list. Yardarm
      snow tackle lee trysail keel cable scuppers avast matey.
    </p>
    <Image {...args} />
    <p>
      Marooned rum capstan galleon fathom yard American Main Admiral of the Black grog blossom lee.
      Square-rigged gabion to go on account piracy wench line sheet poop deck squiffy Gold Road.
      Hang the jib tender coffer to go on account fore brigantine jury mast poop deck long clothes
      heave to.
    </p>
    <p>
      Lugger clap of thunder grapple gally sheet heave to come about Jolly Roger ballast poop deck.
      Chandler Jack Tar black spot transom pillage haul wind lugsail tender lugger list. Yardarm
      snow tackle lee trysail keel cable scuppers avast matey.
    </p>
  </div>
);

const FloatTemplate = (args) => (
  <Segment>
    <p>
      <Image {...args} />
      Marooned rum capstan galleon fathom yard American Main Admiral of the Black grog blossom lee.
      Square-rigged gabion to go on account piracy wench line sheet poop deck squiffy Gold Road.
      Hang the jib tender coffer to go on account fore brigantine jury mast poop deck long clothes
      heave to.
    </p>
    <p>
      <Image
        float="right"
        size="tiny"
        src="http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/image.png"
      />
      Lugger clap of thunder grapple gally sheet heave to come about Jolly Roger ballast poop deck.
      Chandler Jack Tar black spot transom pillage haul wind lugsail tender lugger list. Yardarm
      snow tackle lee trysail keel cable scuppers avast matey.
    </p>
  </Segment>
);

const InlineTemplate = (args) => (
  <p>
    Marooned rum capstan galleon fathom yard American Main Admiral of the Black grog{' '}
    <Image {...args} /> jib square-rigged gabion to go on account piracy wench line sheet poop deck
    squiffy Gold Road. Hang the jib tender coffer to go on account fore brigantine jury mast poop
    deck long clothes heave to.
  </p>
);

const SizeTemplate = (args) => (
  <div>
    <Image
      size="mini"
      src="http://deelay.me/3000/https://react.semantic-ui.com/images/wireframe/image.png"
    />
    <Divider hidden />
    <Image
      size="tiny"
      src="http://deelay.me/3000/https://react.semantic-ui.com/images/wireframe/image.png"
    />
    <Divider hidden />
    <Image
      size="small"
      src="http://deelay.me/3000/https://react.semantic-ui.com/images/wireframe/image.png"
    />
    <Divider hidden />
    <Image
      size="medium"
      src="http://deelay.me/3000/https://react.semantic-ui.com/images/wireframe/image.png"
    />
    <Divider hidden />
    <Image
      size="large"
      src="http://deelay.me/3000/https://react.semantic-ui.com/images/wireframe/image.png"
    />
    <Divider hidden />
    <Image
      size="big"
      src="http://deelay.me/3000/https://react.semantic-ui.com/images/wireframe/image.png"
    />
    <Divider hidden />
    <Image
      size="huge"
      src="http://deelay.me/3000/https://react.semantic-ui.com/images/wireframe/image.png"
    />
    <Divider hidden />
    <Image
      size="massive"
      src="http://deelay.me/3000/https://react.semantic-ui.com/images/wireframe/image.png"
    />
  </div>
);

const SpacedTemplate = (args) => (
  <div>
    <p>
      Marooned rum capstan galleon fathom yard American Main Admiral of the Black grog blossom{' '}
      <Image
        spaced
        size="mini"
        src="http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/image.png"
      />{' '}
      lee. Square-rigged gabion to go on account piracy wench line sheet poop deck squiffy Gold
      Road. Hang the jib tender coffer to go on account fore brigantine jury mast poop deck long
      clothes heave to.
    </p>
    <p>
      <Image
        spaced="right"
        size="mini"
        src="http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/image.png"
      />
      Lugger clap of thunder grapple gally sheet heave to come about Jolly Roger ballast poop deck.
      Chandler Jack Tar black spot transom pillage haul wind lugsail tender lugger list. Yardarm
      snow tackle lee trysail keel cable scuppers avast matey.
      <Image
        spaced="left"
        size="mini"
        src="http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/image.png"
      />
    </p>
  </div>
);

export default {
  title: 'Controls/Image/Variations',
  component: Image,
};

export const Align = {
  render: AlignTemplate.bind({}),
  name: 'align',
  args: {},
};

export const Avatar = {
  render: Template.bind({}),
  name: 'avatar',

  args: {
    avatar: true,
    onClick: null,
    src: 'http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/square-image.png',
  },
};

export const Bordered = {
  render: Template.bind({}),
  name: 'bordered',

  args: {
    bordered: true,
    size: 'small',
    onClick: null,
    src: 'http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/white-image.png',
  },
};

export const Centered = {
  render: CenteredTemplate.bind({}),
  name: 'centered',

  args: {
    centered: true,
    size: 'medium',
    onClick: null,
    src: 'http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/square-image.png',
  },
};

export const Circular = {
  render: Template.bind({}),
  name: 'circular',

  args: {
    circular: true,
    size: 'small',
    onClick: null,
    src: 'http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/square-image.png',
  },
};

export const Float = {
  render: FloatTemplate.bind({}),
  name: 'float',

  args: {
    float: 'left',
    size: 'tiny',
    onClick: null,
    src: 'http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/image.png',
  },
};

export const Fluid = {
  render: Template.bind({}),
  name: 'fluid',

  args: {
    fluid: true,
    onClick: null,
    src: 'http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/image.png',
  },
};

export const Inline = {
  render: InlineTemplate.bind({}),
  name: 'inline',

  args: {
    inline: true,
    size: 'tiny',
    onClick: null,
    src: 'http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/square-image.png',
  },
};

export const Rounded = {
  render: Template.bind({}),
  name: 'rounded',

  args: {
    rounded: true,
    size: 'small',
    onClick: null,
    src: 'http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/image.png',
  },
};

export const Size = {
  render: SizeTemplate.bind({}),
  name: 'size',
  args: {},
};

export const Spaced = {
  render: SpacedTemplate.bind({}),
  name: 'spaced',
  args: {},
};
