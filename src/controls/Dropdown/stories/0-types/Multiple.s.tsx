import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Dropdown } from '../../../Dropdown'

interface IDomain {
  id: number;
  name: string;
}

interface IState {
  domains: IDomain[]
}

class MultipleDropdown extends React.Component<{}, IState> {

  constructor(props:any) {
    super(props);
    this.state = {
      domains: [
        {id: 1, name: '.com domain'}
      ]
    }
  }

  private handleChange = (value: any) => {
    console.log("onChange", value);
  }

  render() {
    return (
      <Dropdown fluid name="domains" placeholder="Select domain" value={this.state.domains} multiple label={(item:any) => item.name} data={[{id: 1, name: '.com domain'}, {id: 2, name:'.net domain'}, {id: 3, name:'.org domain'}]} onChange={this.handleChange}>
        <Dropdown.Column>{(item) => item.name}</Dropdown.Column>
      </Dropdown>
    );
  }
}

storiesOf('Dropdown/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
      A dropdown can allow \`multiple\` selection. Items can be removed from the selection set by clicking them.
    `
  })
  .addWithJSX(
    'Multiple',
  () => (
    <MultipleDropdown/>
  ));  
