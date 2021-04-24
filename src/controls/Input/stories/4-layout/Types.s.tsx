import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { Form } from '../../../Form';
import { Dropdown } from '../../../Dropdown';
import { Input } from '../../../Input'

storiesOf('Controls/Input/Layout', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    All types should be of equal width.
    `
  })
  .addWithJSX(
    'Types',
  () => (
  <div>
    <Form data={{}} onChange={() => {}} onValidate={() => {}}>
      <Form.Field
        label="Search"
        name="search"
        value={null}
        control={<Input icon="search" placeholder="Search..." type="text"/>}
        hint="Please enter a search string."/>
      <Form.Field
        label="Country"
        name="country"
        value={null}
        control={
          <Dropdown placeholder="Country" data={[{id: 1, name: 'Netherlands'}, {id: 2, name:'Germany'}, {id: 3, name:'United Kingdom'}]} label={(item:any) => item.name}>
            <Dropdown.Column>{(item) => item.name}</Dropdown.Column>
          </Dropdown>}/>
      <Form.Field
        label="Date"
        name="date"
        value={null}
        control={<Input type="date" placeholder="Date" format="E d MMMM, yyyy"/>}
        hint="Please select a date."/>
      <Form.Field
        label="Time"
        name="time"
        value={null}
        control={<Input type="time" placeholder="Time" format="HH:mm" clock/>}
        hint="Please select a time."/>      
      <Form.Field
        label="Color"
        name="color"
        value={null}
        control={<Input type="color" placeholder="Color"/>}
        hint="Please pick a color."/>
    </Form>
  </div>
  ));  
