import { Panel } from '../Panel';
import { Button } from '../../Button';

export default {
  title: 'Controls/Panel/Variations',
  component: Panel,
  subcomponents: {},
};

export const Noanimation = {
  render: (args) => (
    <div
      style={{
        position: 'relative',
      }}
    >
      <Panel.Icon {...args}>
        <p>This is some panel text.</p>
      </Panel.Icon>
    </div>
  ),

  name: 'noanimation',

  args: {
    open: true,
    padded: true,
    icon: 'layers',
    noanimation: true,
  },
};

export const Padded = {
  render: (args) => (
    <div
      style={{
        position: 'relative',
      }}
    >
      <Panel.Icon {...args}>Padded content.</Panel.Icon>
    </div>
  ),

  name: 'padded',

  args: {
    open: true,
    padded: true,
    icon: 'layers',
  },
};

export const Width = {
  render: (args) => (
    <div
      style={{
        position: 'relative',
      }}
    >
      <Panel.Icon {...args}>Panel of 600px.</Panel.Icon>
    </div>
  ),

  name: 'width',

  args: {
    open: true,
    width: 600,
    icon: 'layers',
  },
};
