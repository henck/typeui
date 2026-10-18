import { Label } from '../Label';
import { Image } from '../../Image';

const Template = (args) => <Label {...args} />;

const ImageTemplate = (args) => (
  <div>
    <Label {...args} />
    <Label size="small">
      <Image src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
      Two
    </Label>
    <Label size="huge">
      <Image src="https://react.semantic-ui.com/images/avatar/small/stevie.jpg" />
      Three
    </Label>
  </div>
);

export default {
  title: 'Controls/Label/General',
  component: Label,

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const Properties = {
  render: Template.bind({}),
  name: 'Properties',

  args: {
    onClick: null,
    children: ['Dogs', <Label.Detail key="detail">22</Label.Detail>],
  },
};

export const OnClick = {
  render: Template.bind({}),
  name: 'onClick',

  args: {
    onClick: () => {},
    children: 'Clickable',
  },
};

export const ImageStory = {
  render: ImageTemplate.bind({}),
  name: 'Image',

  args: {
    onClick: () => {},

    children: [<Image key="image" src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />, 'One'],
  },
};
