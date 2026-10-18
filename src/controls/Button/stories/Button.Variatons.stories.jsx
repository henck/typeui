import { Button } from '../Button';
import { Icon } from '../../Icon';
import { Segment } from '../../Segment';
import { Divider } from '../../Divider';
import { Label } from '../../Label';

const Template = (args) => <Button {...args}>Button</Button>;

const EmphasisTemplate = (args) => (
  <div>
    <Button {...args}>Primary</Button>
    <Button secondary>Secondary</Button>
  </div>
);

const PositiveTemplate = (args) => (
  <div>
    <Button {...args}>Positive</Button>
    <Button negative>Negative</Button>
  </div>
);

const CircularTemplate = (args) => (
  <div>
    <Button {...args}>
      <Icon name="circle" />
    </Button>
    <Button circular color="tan">
      <Icon name="unlock" />
    </Button>
    <Button basic circular icon>
      <Icon name="bullhorn" />
    </Button>
  </div>
);

const ColorTemplate = (args) => (
  <div>
    <Button {...args}>Orange</Button>
    <Button color="brown">Brown</Button>
    <Button color="skyblue">Sky blue</Button>
  </div>
);

const SizeTemplate = (args) => (
  <div>
    <Button {...args}>Button</Button>
    <br />
    <Button size="mini">Mini</Button>
    <Button size="tiny">Tiny</Button>
    <Button size="small">Small</Button>
    <Button size="medium">Medium (default)</Button>
    <Button size="large">Large</Button>
    <Button size="big">Big</Button>
    <Button size="huge">Huge</Button>
    <Button size="massive">Massive</Button>
  </div>
);

const CompactTemplate = (args) => (
  <div>
    <Button {...args}>Button</Button>
    <br />
    <Button compact size="mini">
      Mini
    </Button>
    <Button compact size="tiny">
      Tiny
    </Button>
    <Button compact size="small">
      Small
    </Button>
    <Button compact size="medium">
      Medium (default)
    </Button>
    <Button compact size="large">
      Large
    </Button>
    <Button compact size="big">
      Big
    </Button>
    <Button compact size="huge">
      Huge
    </Button>
    <Button compact size="massive">
      Massive
    </Button>
  </div>
);

const FloatTemplate = (args) => (
  <Segment>
    <Button {...args}>Button</Button>
    <Button basic float="right">
      <Icon name="circle" /> Button
    </Button>
  </Segment>
);

export default {
  title: 'Controls/Button/Variations',
  component: Button,

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },

    grouped: {
      table: {
        disable: true,
      },
    },
  },
};

export const Emphasis = {
  render: EmphasisTemplate.bind({}),
  name: 'Emphasis',

  args: {
    primary: true,
  },
};

export const PositiveAndNegative = {
  render: PositiveTemplate.bind({}),
  name: 'Positive and negative',

  args: {
    positive: true,
  },
};

export const Circular = {
  render: CircularTemplate.bind({}),
  name: 'circular',

  args: {
    circular: true,
  },
};

export const Color = {
  render: ColorTemplate.bind({}),
  name: 'color',

  args: {
    color: 'orange',
  },
};

export const Size = {
  render: SizeTemplate.bind({}),
  name: 'size',

  args: {
    size: 'medium',
  },
};

export const Compact = {
  render: CompactTemplate.bind({}),
  name: 'compact',

  args: {
    size: 'medium',
    compact: true,
  },
};

export const Float = {
  render: FloatTemplate.bind({}),
  name: 'float',

  args: {
    float: 'left',
  },
};

export const Fluid = {
  render: Template.bind({}),
  name: 'fluid',

  args: {
    fluid: true,
  },
};

export const Noripple = {
  render: Template.bind({}),
  name: 'noripple',

  args: {
    noripple: true,
  },
};
