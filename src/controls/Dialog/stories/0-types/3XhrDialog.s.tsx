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

  handleRetry = () =>  {
    //this.setState({ open: false });
  }

  render() {
    return (
      <React.Fragment>
        <Button onClick={this.handleClick}>Open dialog</Button>
        <Dialog.Xhr error={{response:{status:404}}} open={this.state.open} onClose={this.handleClose} onRetry={this.handleRetry}>
        </Dialog.Xhr>
      </React.Fragment>
    )
  }
}

storiesOf('Dialog/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: [Dialog.Xhr], propTablesExclude: [DemoDialog]}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    The \`Dialog\` component offers a pre-built \`Dialog.Xhr\` type, with an "OK" and a "Retry" button.
    This dialog can be used when an XHR request fails. It takes an \`error\` attribute with an Axios response object,
    and reports it to the user.
    `
  })
  .addWithJSX(
    'Xhr Dialog',
  () => (
    <DemoDialog/>
  ));  
