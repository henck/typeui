import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase';
import { text } from '@storybook/addon-knobs/react';
import { Form } from '../../../Form';
import { Divider } from '../../../Divider';
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
        control={<Input icon="search" type="text"/>}
        hint="Please enter a search string."/>
      <Form.Field
        label="Country"
        name="country"
        value={null}
        control={<Dropdown name="dropdown" data={[]} label={(item) => item.name}/>}/>
      <Form.Field
        label="Date"
        name="date"
        value={null}
        control={<Input type="date" dateformat="E d MMMM, yyyy"/>}
        hint="Please select a date."/>
      <Form.Field
        label="Color"
        name="color"
        value={null}
        control={<Input type="color"/>}
        hint="Please pick a color."/>
    </Form>
  </div>
  ));  
