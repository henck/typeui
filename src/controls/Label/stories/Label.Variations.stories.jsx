import { Icon } from '../../Icon';
import { Label } from '../Label';
import { Image } from '../../Image';
import { Segment } from '../../Segment';
import { Input } from '../../Input';
import { Divider } from '../../Divider';

const Template = (args) => <Label {...args} />;

const BasicTemplate = (args) => (
  <div>
    <Label {...args} />
    <Label basic color="teal" onClick={() => {}}>
      One
    </Label>
    <Label basic color="rebeccapurple" onClick={() => {}}>
      <Image src="https://react.semantic-ui.com/images/avatar/small/stevie.jpg" />
      Three
    </Label>
  </div>
);

const ColorTemplate = (args) => (
  <div>
    <Label {...args} />
    <Label color="teal" onClick={() => {}}>
      One
    </Label>
    <Label color="rebeccapurple" onClick={() => {}}>
      <Image src="https://react.semantic-ui.com/images/avatar/small/stevie.jpg" />
      Three
    </Label>
  </div>
);

const PositiveTemplate = (args) => (
  <div>
    <Label {...args} />
  </div>
);

const NegativeTemplate = (args) => (
  <div>
    <Label {...args} />
  </div>
);

const FloatingTemplate = (args) => (
  <Segment compact>
    <Label {...args} />
    Some segment content.
  </Segment>
);

const PointingTemplate = (args) => (
  <div>
    <Input name="firstname" type="text" placeholder="First name" fluid />
    <Label {...args} />
    <Divider hidden />
    <Label pointing="bottom">Please enter a value</Label>
    <Input name="lastname" type="text" placeholder="Last name" fluid />
    <Divider hidden />
    <Input name="username" type="text" placeholder="Username" />
    <Label pointing>That name is taken!</Label>
    <Divider hidden />
    <Label pointing="right">Your password must be 6 characters or more</Label>
    <Input name="password" type="password" placeholder="Password" />
  </div>
);

const SizeTemplate = (args) => (
  <div>
    <Label size="mini">
      <Image src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
      Mini
    </Label>
    <Label size="tiny">
      <Image src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
      Tiny
    </Label>
    <Label size="small">
      <Image src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
      Small
    </Label>
    <Label {...args} />
    <Label size="large">
      <Image src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
      Large
    </Label>
    <Label size="big">
      <Image src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
      Big
    </Label>
    <Label size="huge">
      <Image src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
      Huge
    </Label>
    <Label size="massive">
      <Image src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
      Massive <Icon name="code" />
    </Label>
  </div>
);

const TagTemplate = (args) => (
  <div>
    <Label
      tag
      onClick={() => {
        alert('Clicked');
      }}
    >
      One
    </Label>
    <Label
      basic
      tag
      color="cornflowerblue"
      onClick={() => {
        alert('Clicked');
      }}
    >
      One
    </Label>
    <Label
      tag
      color="rgb(0, 156, 149)"
      onClick={() => {
        alert('Clicked');
      }}
    >
      Two
    </Label>
    <Label
      tag
      color="rebeccapurple"
      onClick={() => {
        alert('Clicked');
      }}
    >
      <Image src="https://react.semantic-ui.com/images/avatar/small/stevie.jpg" />
      Three
    </Label>
  </div>
);

export default {
  title: 'Controls/Label/Variations',
  component: Label,

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const Basic = {
  render: BasicTemplate.bind({}),
  name: 'basic',

  args: {
    basic: true,
    onClick: () => {},
    children: 'One',
  },
};

export const Color = {
  render: ColorTemplate.bind({}),
  name: 'color',

  args: {
    onClick: () => {},
    children: 'One',
  },
};

export const Positive = {
  render: PositiveTemplate.bind({}),
  name: 'positive',

  args: {
    children: 'Positive',
    positive: true,
  },
};

export const Negative = {
  render: PositiveTemplate.bind({}),
  name: 'negative',

  args: {
    children: 'Negative',
    negative: true,
  },
};

export const Floating = {
  render: FloatingTemplate.bind({}),
  name: 'floating',

  args: {
    floating: true,
    children: '22',
  },
};

export const Pointing = {
  render: PointingTemplate.bind({}),
  name: 'pointing',

  args: {
    onClick: () => {},
    pointing: 'top',
    children: 'Please enter a value',
  },
};

export const Size = {
  render: SizeTemplate.bind({}),
  name: 'size',

  args: {
    onClick: () => {},
    color: 'rebeccapurple',
    size: 'medium',

    children: [<Image src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />, 'Medium'],
  },
};

export const Tag = {
  render: TagTemplate.bind({}),
  name: 'tag',

  args: {
    onClick: () => {},
    children: 'One',
  },
};
