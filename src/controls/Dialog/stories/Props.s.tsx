import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../StorybookBase';
import { Dialog, Button } from '../../';

interface IDemoDialogState {
  open: boolean;
}

class DemoDialog extends React.Component<{}, IDemoDialogState> {
  constructor(props: any) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleYes = this.handleYes.bind(this);
    this.handleNo = this.handleNo.bind(this);
    this.state = {
      open: false
    };
  }

  handleClick() {
    this.setState({ open: true });
  }
  
  handleClose() {
    this.setState({ open: false });
  }

  handleYes() {
    this.setState({ open: false });
    alert('Clicked Yes.');
  }

  handleNo() {
    this.setState({ open: false });
    alert('Clicked No.');
  }


  render() {
    return (
      <React.Fragment>
        <Button onClick={this.handleClick}>Open dialog</Button>
        <Dialog open={this.state.open} onClose={this.handleClose}>
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

storiesOf('Controls/Dialog', module)
  .addDecorator(withInfo(withInfoSettings))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    All dialog properties.
    `
  })
  .addWithJSX(
    'Properties',
  () => (
  <DemoDialog/>
  ));  

  