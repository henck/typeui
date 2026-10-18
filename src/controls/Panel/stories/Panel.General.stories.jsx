import { Panel } from '../Panel';
import { Button } from '../../Button';

export default {
  title: 'Controls/Panel/General',
  component: Panel,
  subcomponents: {},
};

export const PanelIcon = {
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

  name: 'Panel.Icon',

  args: {
    open: true,
    padded: true,
    icon: 'layers',
  },
};

export const PanelContent = {
  render: (args) => (
    <div
      style={{
        position: 'relative',
      }}
    >
      <Panel.Icon {...args}>
        <Panel.Header>Header</Panel.Header>
        <Panel.Content>
          <p>This is some panel text.</p>
        </Panel.Content>
        <Panel.Footer>
          <Button secondary>Close</Button>
        </Panel.Footer>
      </Panel.Icon>
    </div>
  ),

  name: 'Panel.Content',

  args: {
    open: true,
    icon: 'layers',
  },
};
