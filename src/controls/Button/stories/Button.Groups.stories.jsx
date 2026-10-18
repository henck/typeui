import { Button } from '../Button';
import { Icon } from '../../Icon';
import { Segment } from '../../Segment';
import { Divider } from '../../Divider';
import { Label } from '../../Label';

const Template = (args) => <Button {...args}>Button</Button>;

const AttributesTemplate = (args) => (
  <div>
    <Button.Group color="brown" size="big" compact>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </Button.Group>
    <Divider hidden />
    <Button.Group basic>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </Button.Group>
    <Divider hidden />
    <Button.Group basic vertical color="brown">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </Button.Group>
  </div>
);

const ConditionalTemplate = (args) => (
  <div>
    <Button.Group>
      <Button>One</Button>
      <Button.Or />
      <Button positive>Two</Button>
    </Button.Group>
    <Divider hidden />
    <Button.Group>
      <Button>One</Button>
      <Button.Or />
      <Button>Two</Button>
      <Button.Or />
      <Button>Three</Button>
    </Button.Group>
  </div>
);

const HorizontalTemplate = (args) => (
  <div>
    <Button.Group>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </Button.Group>
    <Divider hidden />
    <Button.Group basic icon>
      <Button>
        <Icon name="code" />
      </Button>
      <Button>
        <Icon name="exchange" />
      </Button>
      <Button>
        <Icon name="circle" />
      </Button>
    </Button.Group>
  </div>
);

const VerticalTemplate = (args) => (
  <div>
    <Button.Group vertical>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </Button.Group>
  </div>
);

export default {
  title: 'Controls/Button/Groups',
  component: Button,

  subcomponents: {
    'Button.Group': Button.Group,
    'Button.Or': Button.Or,
  },

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

export const Attributes = {
  render: AttributesTemplate.bind({}),
  name: 'Attributes',
  args: {},
};

export const Conditionals = {
  render: ConditionalTemplate.bind({}),
  name: 'Conditionals',
  args: {},
};

export const Horizontal = {
  render: HorizontalTemplate.bind({}),
  name: 'Horizontal',
  args: {},
};

export const Vertical = {
  render: VerticalTemplate.bind({}),
  name: 'Vertical',
  args: {},
};
