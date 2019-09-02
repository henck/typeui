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

  handleYes = () => {
    this.setState({ open: false });
  }

  handleNo = () => {
    this.setState({ open: false });
  }


  render() {
    return (
      <React.Fragment>
        <Button onClick={this.handleClick}>Open dialog</Button>
        <Dialog width={1024} open={this.state.open} onClose={this.handleClose}>
          <Dialog.Header>Delete all items</Dialog.Header>
          <Dialog.Content>You are about to permanently delete all items. Are you sure you wish to continue?</Dialog.Content>
          <Dialog.Footer>
            <Button negative onClick={this.handleYes}>Yes</Button>
            <Button onClick={this.handleNo}>No</Button>
          </Dialog.Footer>
        </Dialog>      
      </React.Fragment>
    )
  }
}

storiesOf('Controls/Dialog/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A Dialog has a default width in pixels, but the \`width\` attribute can be used to override that.
    `
  })
  .addWithJSX(
    'Width',
  () => (
    <DemoDialog/>
  ));  
