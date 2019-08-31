import * as React from 'react';
import styled from '../../../../styles/Theme';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Pane } from '../../';
import { Button } from '../../../Button';

interface IDemoPaneState {
  open: boolean;
}

class DemoPane extends React.Component<{ className?: string }, IDemoPaneState> {
  constructor(props: any) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleClick = () => {
    // Clicking the trigger control toggles the
    // panel's open state.
    this.setState((prevState) => { return {
      open: !prevState.open
    }});
  }
  
  handleClose = () => {
    // Close simply closes the panel. Since this will 
    // also trigger handleClick, the Panel control
    // adds a 100ms timeout so that handleClick runs first.
    this.setState({ open: false });
  }

  render() {
    return (
      <div style={{position: 'relative', display: 'inline-block'}}>
        <Button onClick={this.handleClick}>Open pane</Button>
        <Pane padded open={this.state.open} onClose={this.handleClose}>
          <p>This is some pane text.</p>
        </Pane>      
      </div>
    )
  }
}

storiesOf('Pane/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A standard \`Pane\`. 
    `
  })
  .addWithJSX(
    'Standard Pane',
  () => (
  <DemoPane/>
  ));  

  