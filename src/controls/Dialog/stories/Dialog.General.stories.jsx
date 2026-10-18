import { Dialog } from '../Dialog';
import { Button } from '../../Button';

const AlertTemplate = (args) => (
  <div style={{ height: '300px' }}>
    <Dialog.Alert {...args} />
  </div>
);

const ConfirmTemplate = (args) => (
  <div style={{ height: '300px' }}>
    <Dialog.Confirm {...args} />
  </div>
);

const XhrTemplate = (args) => (
  <div style={{ height: '300px' }}>
    <Dialog.Xhr {...args} />
  </div>
);

export default {
  title: 'Controls/Dialog/General',
  component: Dialog,
};

export const DialogAlert = {
  render: AlertTemplate.bind({}),
  name: 'Dialog.Alert',

  args: {
    open: true,
    title: 'Lunch',
    children: "It's lunchtime!",
  },
};

export const DialogConfirm = {
  render: ConfirmTemplate.bind({}),
  name: 'Dialog.Confirm',

  args: {
    open: true,
    title: 'Ice cream',
    children: 'Would you like ice cream?',
  },
};

export const DialogXhr = {
  render: XhrTemplate.bind({}),
  name: 'Dialog.Xhr',

  args: {
    open: true,
    onRetry: () => {},

    error: {
      response: {
        status: 404,
      },
    },
  },
};
