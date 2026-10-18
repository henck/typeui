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

export default {
  title: 'Controls/Divider/Variations',
  component: Divider,

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const Fitted = {
  render: Template.bind({}),
  name: 'fitted',

  args: {
    fitted: true,
  },
};

export const Hidden = {
  render: Template.bind({}),
  name: 'hidden',

  args: {
    hidden: true,
  },
};

export const Section = {
  render: Template.bind({}),
  name: 'section',

  args: {
    section: true,
  },
};

export const Narrow = {
  render: Template.bind({}),
  name: 'narrow',

  args: {
    narrow: true,
  },
};
