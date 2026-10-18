import { Dialog } from '../Dialog';
import { Button } from '../../Button';

const Template = (args) => (
  <div style={{ height: '300px' }}>
    <Dialog {...args}>
      <Dialog.Header>Welcome</Dialog.Header>
      <Dialog.Content>Good day!</Dialog.Content>
      <Dialog.Footer>
        <Button>OK</Button>
      </Dialog.Footer>
    </Dialog>
  </div>
);

export default {
  title: 'Controls/Dialog',
  component: Dialog,
};

export const Properties = {
  render: Template.bind({}),
  name: 'Properties',

  args: {
    open: true,
  },
};
