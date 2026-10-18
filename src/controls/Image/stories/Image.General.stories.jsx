import { Image } from '../Image';
import { Label } from '../../Label';
import { Icon } from '../../Icon';

const Template = (args) => <Image {...args} />;

const ErrorTemplate = (args) => (
  <Image {...args}>
    <Label>
      <Icon name="code" />
      Loading error
    </Label>
  </Image>
);

export default {
  title: 'Controls/Image/General',
  component: Image,
};

export const Alt = {
  render: Template.bind({}),
  name: 'alt',

  args: {
    alt: 'A wireframe',
    size: 'tiny',
    onClick: null,
    src: 'http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/image.png',
  },
};

export const Title = {
  render: Template.bind({}),
  name: 'title',

  args: {
    title: 'A wireframe',
    size: 'tiny',
    onClick: null,
    src: 'http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/image.png',
  },
};

export const Disabled = {
  render: Template.bind({}),
  name: 'disabled',

  args: {
    disabled: true,
    size: 'tiny',
    onClick: null,
    src: 'http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/image.png',
  },
};

export const Error = {
  render: ErrorTemplate.bind({}),
  name: 'error',

  args: {
    size: 'small',
    onClick: null,
    src: 'http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/image.png-does-not-exist',
  },
};

export const OnClick = {
  render: Template.bind({}),
  name: 'onClick',

  args: {
    size: 'tiny',
    onClick: () => {},
    src: 'http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/image.png',
  },
};
