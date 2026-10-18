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

const ScrollingTemplate = (args) => (
  <div style={{ height: '300px' }}>
    <Dialog {...args}>
      <Dialog.Header>Long content</Dialog.Header>
      <Dialog.Content maxHeight={15}>
        Line 1<br />
        Line 2<br />
        Line 3<br />
        Line 4<br />
        Line 5<br />
        Line 6<br />
        Line 7<br />
        Line 8<br />
        Line 9<br />
        Line 10
        <br />
        Line 11
        <br />
        Line 12
        <br />
        Line 13
        <br />
        Line 14
        <br />
        Line 15
        <br />
        Line 16
        <br />
        Line 17
        <br />
        Line 18
        <br />
        Line 19
        <br />
        Line 20
        <br />
        Line 21
        <br />
        Line 22
        <br />
        Line 23
        <br />
        Line 24
        <br />
        Line 25
        <br />
        Line 26
        <br />
        Line 27
        <br />
        Line 28
        <br />
      </Dialog.Content>
      <Dialog.Footer>
        <Button>OK</Button>
      </Dialog.Footer>
    </Dialog>
  </div>
);

const FooterTemplate = (args) => (
  <div style={{ height: '300px' }}>
    <Dialog {...args}>
      <Dialog.Header>Welcome</Dialog.Header>
      <Dialog.Content>Good day!</Dialog.Content>
      <Dialog.Footer align="space-between">
        <Button primary>OK</Button>
        <Button secondary>Another button</Button>
      </Dialog.Footer>
    </Dialog>
  </div>
);

export default {
  title: 'Controls/Dialog/Variations',
  component: Dialog,
};

export const Width = {
  render: Template.bind({}),
  name: 'Width',

  args: {
    open: true,
    width: 200,
  },
};

export const Scrolling = {
  render: ScrollingTemplate.bind({}),
  name: 'Scrolling',

  args: {
    open: true,
  },
};

export const FooterAlignment = {
  render: FooterTemplate.bind({}),
  name: 'Footer alignment',

  args: {
    open: true,
  },
};
