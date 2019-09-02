import * as React from 'react';
import styled from '../../../../styles/Theme';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase';
import { Panel } from '../../../Panel';
import { Button } from '../../../Button';

interface IDemoPanelState {
  open: boolean;
}

class DemoPanel extends React.Component<{ className?: string }, IDemoPanelState> {
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

  handleYes = () => {
    this.setState({ open: false });
    alert('Clicked Yes.');
  }

  handleNo = () => {
    this.setState({ open: false });
    alert('Clicked No.');
  }

  render() {
    let p = this.props;
    return (
      <div style={{position: 'relative', display: 'inline-block'}}>
        <Button onClick={this.handleClick}>Open panel</Button>
        <Panel padded width={800} open={this.state.open} onClose={this.handleClose}>
          <p>This is some panel text.</p>
          <div>
            <Button secondary onClick={this.handleClose}>Close</Button>
          </div>
        </Panel>      
      </div>
    )
  }
}

storiesOf('Controls/Panel/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`Panel\` has a width of 200px by default. This \`width\` can be overridden.
    `
  })
  .addWithJSX(
    'Width',
  () => (
  <DemoPanel/>
  ));  

  