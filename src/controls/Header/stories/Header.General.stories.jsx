import { Header } from '../Header';
import { Icon } from '../../Icon';
import { Image } from '../../Image';
import { Segment } from '../../Segment';
import { Message } from '../../Message';

const Template = (args) => <Header {...args}>Header</Header>;

const SizeTemplate = (args) => (
  <div>
    <Header {...args}>My header</Header>
    <Header size="h1">Size h1</Header>
    <Header size="h2">Size h2</Header>
    <Header size="h3">Size h3</Header>
    <Header size="h4">Size h4</Header>
    <Header size="h5">Size h5</Header>
    <Header size="h6">Size h6</Header>
  </div>
);

const IconTemplate = (args) => (
  <div>
    <Header {...args}>
      <Icon name="code" /> Icon header
    </Header>
    <Header size="h1" icon>
      <Icon name="at" circular /> Icon header
    </Header>
  </div>
);

const ImageTemplate = (args) => (
  <div>
    <Header {...args}>
      <Image
        size="mini"
        circular
        src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
      />
      Image header
    </Header>
    <Header size="h1" icon>
      <Image
        size="tiny"
        circular
        src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
      />
      Image header
    </Header>
  </div>
);

const SubheaderTemplate = (args) => (
  <div>
    <Header size="h1">
      <Header.Content>
        Account Settings
        <Header.Subheader>Manage your account settings and set email preferences</Header.Subheader>
      </Header.Content>
    </Header>
    <Header size="h1">
      <Icon name="code" size="large" />
      <Header.Content>
        Header with icon
        <Header.Subheader>Subheader text</Header.Subheader>
      </Header.Content>
    </Header>
  </div>
);

export default {
  title: 'Controls/Header/General',
  component: Header,

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const Size = {
  render: SizeTemplate.bind({}),
  name: 'Size',

  args: {
    size: 'h3',
  },
};

export const IconStory = {
  render: IconTemplate.bind({}),
  name: 'Icon',

  args: {
    size: 'h3',
    icon: true,
  },
};

export const ImageStory = {
  render: ImageTemplate.bind({}),
  name: 'Image',

  args: {
    size: 'h1',
  },
};

export const Subheader = {
  render: SubheaderTemplate.bind({}),
  name: 'Subheader',
  args: {},
};

export const Disabled = {
  render: Template.bind({}),
  name: 'Disabled',

  args: {
    size: 'h1',
    disabled: true,
  },
};
