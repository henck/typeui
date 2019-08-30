import * as React from 'react';
import styled from '../../../styles/Theme';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../StorybookBase';
import { Panel, Button } from '../../';

interface IDemoPanelState {
  open: boolean;
}

class DemoPanelBase extends React.Component<{ className?: string }, IDemoPanelState> {
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
    // Clicking the trigger control toggles the
    // panel's open state.
    this.setState((prevState) => { return {
      open: !prevState.open
    }});
  }
  
  handleClose() {
    // Close simply closes the panel. Since this will 
    // also trigger handleClick, the Panel control
    // adds a 100ms timeout so that handleClick runs first.
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
    let p = this.props;
    return (
      <div className={p.className}>
        <Button onClick={this.handleClick}>Open panel</Button>
        <Panel open={this.state.open} onClose={this.handleClose}>
          <p>This is some panel text.</p>
          <div>
            <Button secondary onClick={this.handleClose}>Close</Button>
          </div>
        </Panel>      
      </div>
    )
  }
}

const DemoPanel = styled(DemoPanelBase)`
  position: relative;
  display: inline-block;
  margin: 500px 500px;
`

storiesOf('Controls/Panel', module)
  .addDecorator(withInfo(withInfoSettings))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    All panel properties.

    Note that a panel determines its position from the position of its direct parent.
    The parent therefore MUST have \`position: relative\`.
    
    Extra spacing was given to this story in order to illustrate how a panel will
    appear above or below, or left or right, of its parent based on the screen 
    location.
    `
  })
  .addWithJSX(
    'Properties',
  () => (
  <DemoPanel/>
  ));  

  