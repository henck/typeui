import { Image } from '../Image';
import { Label } from '../../Label';
import { Icon } from '../../Icon';

const Template = (args) => <Image {...args} />;

const ImageGroupTemplate = (args) => (
  <Image.Group {...args}>
    <Image src="http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/image.png" />
    <Image src="http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/image.png" />
    <Image src="http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/image.png" />
    <Image src="http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/image.png" />
  </Image.Group>
);

export default {
  title: 'Controls/Image/Groups',
  component: Image,

  subcomponents: {
    'Image.Group': Image.Group,
  },
};

export const ImageGroup = {
  render: ImageGroupTemplate.bind({}),
  name: 'Image.Group',

  args: {
    size: 'small',
    onClick: null,
    bordered: false,
    rounded: true,
    circular: false,
  },
};
