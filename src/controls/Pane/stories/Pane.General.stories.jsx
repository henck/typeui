import { Pane } from '../Pane';

const PaneIconTemplate = (args) => (
  <div style={{ position: 'relative', display: 'inline-block' }}>
    <Pane.Icon icon="layers" padded>
      <p>This is some pane text.</p>
    </Pane.Icon>
  </div>
);

export default {
  title: 'Controls/Pane/General',
  component: Pane,
  subcomponents: {},

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const PaneIcon = {
  render: PaneIconTemplate.bind({}),
  name: 'Pane.Icon',
  args: {},
};
