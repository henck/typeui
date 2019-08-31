import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Button } from '../../../Button';
import { Dialog } from '../../Dialog';

interface IDemoDialogState {
  open: boolean;
}

class DemoDialog extends React.Component<{}, IDemoDialogState> {
  constructor(props: any) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleClick = () => {
    this.setState({ open: true });
  }
  
  handleClose = () => {
    this.setState({ open: false });
  }

  handleConfirm = () =>  {
    this.setState({ open: false });
  }

  render() {
    return (
      <React.Fragment>
        <Button onClick={this.handleClick}>Open dialog</Button>
        <Dialog.Confirm title="Ice cream" open={this.state.open} onClose={this.handleClose} onConfirm={this.handleConfirm}>
          Would you like <i>ice cream</i>?
        </Dialog.Confirm>
      </React.Fragment>
    )
  }
}

storiesOf('Dialog/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: [Dialog.Confirm], propTablesExclude: [DemoDialog]}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    The \`Dialog\` component offers a pre-built \`Dialog.Confirm\` type, with a "Yes" and a "No" button.
    The caller provides a \`title\`, and any JSX inside the component is used as dialog content.
    `
  })
  .addWithJSX(
    'Confirm Dialog',
  () => (
    <DemoDialog/>
  ));  
