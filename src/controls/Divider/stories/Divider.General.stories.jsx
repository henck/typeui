import { Divider } from '../Divider';
import { Icon } from '../../Icon';
import { Header } from '../../Header';

const Template = (args) => (
  <div>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis
      eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit,
      posuere a, pede.
    </p>
    <Divider {...args} />
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis
      eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit,
      posuere a, pede.
    </p>
  </div>
);

const ClearTemplate = (args) => (
  <div>
    <Header size="h4" float="right">
      Floated content
    </Header>
    <Divider {...args} />
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis
      eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit,
      posuere a, pede.
    </p>
  </div>
);

export default {
  title: 'Controls/Divider/General',
  component: Divider,

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const Clearing = {
  render: ClearTemplate.bind({}),
  name: 'Clearing',
  args: {},
};

export const Content = {
  render: Template.bind({}),
  name: 'Content',

  args: {
    children: (
      <Header size="h4">
        <Icon name="circle" />
        Description
      </Header>
    ),
  },
};
