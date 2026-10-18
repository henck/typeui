import { Image } from '../Image';

const Template = (args) => <Image {...args} />;

export default {
  title: 'Controls/Image',

  subcomponents: {
    'Image.Group': Image.Group,
  },

  component: Image,
};

export const Properties = {
  render: Template.bind({}),
  name: 'Properties',

  args: {
    onClick: null,
    src: 'http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/image.png',
  },
};
