import { Panel } from '../Panel';
import { Button } from '../../Button';

export default {
  title: 'Controls/Panel',
  component: Panel,

  subcomponents: {
    'Panel.Header': Panel.Header,
    'Panel.Content': Panel.Content,
    'Panel.Footer': Panel.Footer,
    'Panel.Icon': Panel.Icon,
  },

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const Properties = {
  render: (args) => (
    <div
      style={{
        position: 'relative',
        background: 'gray',
      }}
    >
      Anchor
      <Panel {...args} />
    </div>
  ),

  name: 'Properties',

  args: {
    open: true,
    padded: true,
    children: 'Panel content.',
  },
};
