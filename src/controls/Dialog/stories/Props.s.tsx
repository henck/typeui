import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../StorybookBase';
import { Dialog } from '../../Dialog';
import { Button } from '../../Button'

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

storiesOf('Dialog', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: [Dialog, Dialog.Header, Dialog.Content, Dialog.Footer], propTablesExclude: [DemoDialog]}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`Dialog\` is an overlay window that is triggered when the Dialog's \`open\` attribute is set 
    to \`true\`. The calling code is responsible for setting \`open\` to \`false\` when the Dialog
    should close.

    The \`Dialog\` also calls \`onClose\` when the user clicks outside the Dialog.
    `
  })
  .addWithJSX(
    'Properties',
  () => (
  <DemoDialog/>
  ));  

  