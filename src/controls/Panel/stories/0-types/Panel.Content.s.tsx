import * as React from 'react';
import styled from '../../../../styles/Theme';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
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
        <Panel open={this.state.open} onClose={this.handleClose}>
          <Panel.Header>
            Header
          </Panel.Header>
          <Panel.Content>
            <p>This is some panel text.</p>
          </Panel.Content>
          <Panel.Footer>
            <Button secondary onClick={this.handleClose}>Close</Button>
          </Panel.Footer>
        </Panel>      
      </div>
    )
  }
}

storiesOf('Panel/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: [Panel.Header, Panel.Content, Panel.Footer], propTablesExclude: [DemoPanel]}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    The standard \`Panel\` has no padding. Padding can be added, or you can use the \`Panel.Header\`, 
    \`Panel.Content\` and \`Panel.Footer\` components. These add padding, and different background colors.

    The components also take care of applying rounded borders to their content so as not to interfere with
    the Panel's own rounded borders.
    `
  })
  .addWithJSX(
    'Panel.Header, Panel.Content, Panel.Footer',
  () => (
  <DemoPanel/>
  ));  

  