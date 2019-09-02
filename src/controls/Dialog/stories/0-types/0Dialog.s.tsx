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

  handleOK = () =>  {
    this.setState({ open: false });
  }

  render() {
    return (
      <React.Fragment>
        <Button onClick={this.handleClick}>Open dialog</Button>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <Dialog.Header>Welcome</Dialog.Header>
          <Dialog.Content>Good day!</Dialog.Content>
          <Dialog.Footer>
            <Button onClick={this.handleOK}>OK</Button>
          </Dialog.Footer>
        </Dialog>      
      </React.Fragment>
    )
  }
}

storiesOf('Controls/Dialog/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A standard \`Dialog\`.
    `
  })
  .addWithJSX(
    'Standard Dialog',
  () => (
    <DemoDialog/>
  ));  
