import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase';
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

  render() {
    return (
      <React.Fragment>
        <Button onClick={this.handleClick}>Open dialog</Button>
        <Dialog.Alert title="Lunch" open={this.state.open} onClose={this.handleClose}>
          It's <b>lunch</b> time!
        </Dialog.Alert>
      </React.Fragment>
    )
  }
}

storiesOf('Controls/Dialog/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: [Dialog.Confirm], propTablesExclude: [DemoDialog]}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    The \`Dialog\` component offers a pre-built \`Dialog.Alert\` type, with an "OK" button.
    The caller provides a \`title\`, and any JSX inside the component is used as dialog content.
    `
  })
  .addWithJSX(
    'Alert Dialog',
  () => (
    <DemoDialog/>
  ));  
