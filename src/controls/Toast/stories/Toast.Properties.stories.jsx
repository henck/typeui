import { ToastService } from '../ToastService';
import { ToastContainer } from '../ToastContainer';
import { Toast } from '../Toast';
import { Button } from '../../Button';

const Template = (args) => (
  <div>
    <ToastContainer maxToasts={3} />
    <Button onClick={() => ToastService.toast('hello, world')}>Create Toast</Button>
  </div>
);

export default {
  title: 'Controls/Toast',
  component: Toast,

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
  args: {},
};
