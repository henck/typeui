import { Button } from '../Button';
import { Icon } from '../../Icon';
import { Segment } from '../../Segment';
import { Divider } from '../../Divider';
import { Label } from '../../Label';

const Template = (args) => <Button {...args}>Button</Button>;

const BasicTemplate = (args) => (
  <>
    <div style={{ background: 'white', padding: '20px' }}>
      <Button {...args}>Button</Button>
    </div>
    <div style={{ background: 'black', padding: '20px' }}>
      <Button positive {...args}>
        Button
      </Button>
    </div>
  </>
);

const IconTemplate = (args) => (
  <div>
    <div>
      <Button {...args}>
        <Icon name="circle" size="large" /> Button
      </Button>
    </div>
    <Divider hidden />
    <div>
      <Button>
        <Icon name="circle" size="large" /> Button
      </Button>
      <Button>
        <Icon name="circle" size="large" />
      </Button>
      <Button icon>
        <Icon name="circle" size="large" />
      </Button>
    </div>
    <Divider hidden />
    <div>
      <Button basic>
        <Icon name="circle" size="large" /> Button
      </Button>
      <Button basic>
        <Icon name="circle" size="large" />
      </Button>
      <Button basic icon>
        <Icon name="circle" size="large" />
      </Button>
    </div>
    <Divider hidden />
    <div>
      <Button color="crimson">
        <Icon name="circle" size="large" /> Button
      </Button>
      <Button basic color="skyblue">
        <Icon name="circle" size="large" />
      </Button>
      <Button color="DarkGoldenrod" icon>
        <Icon name="circle" size="large" />
      </Button>
    </div>
  </div>
);

export default {
  title: 'Controls/Button/General',
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

export const Basic = {
  render: BasicTemplate.bind({}),
  name: 'Basic',

  args: {
    basic: true,
  },
};

export const IconStory = {
  render: IconTemplate.bind({}),
  name: 'Icon',

  args: {
    icon: true,
  },
};

export const Labelled = {
  render: (args) => (
    <div>
      <Button>
        <Label>One</Label>Button
      </Button>
      <Divider hidden />
      <Button>
        <Label attached="left">
          <Icon name="circle" size="large" />
        </Label>
        Like
      </Button>
      <Divider hidden />
      <Button>
        <Icon name="circle" />
        <Label basic attached="right">
          2,048
        </Label>
        Like
      </Button>
      <Divider hidden />
      <Button>
        <Icon name="circle" />
        <Label basic attached="right">
          One
        </Label>
        <Label basic attached="right">
          Two
        </Label>
        Button
      </Button>
      <Divider hidden />
      <Button>
        <Icon name="circle" />
        <Label basic pointing attached="right">
          2,048
        </Label>
        Like
      </Button>
      <Divider hidden />
      <Button color="RoyalBlue">
        <Icon name="circle" />
        <Label basic pointing attached="right" color="RoyalBlue">
          42
        </Label>
        Like
      </Button>
      <Divider hidden />
      <Button basic color="crimson">
        <Icon name="circle" />
        <Label basic pointing attached="right" color="crimson">
          2,048
        </Label>
        Forks
      </Button>
    </div>
  ),

  name: 'Labelled',
};

export const Disabled = {
  render: Template.bind({}),
  name: 'Disabled',

  args: {
    disabled: true,
  },
};
