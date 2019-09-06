import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { text, boolean } from '@storybook/addon-knobs/react';
import { Input } from '../../../Input'
import { Icon } from '../../../Icon'
import { Flex } from '../../../Flex'
import { Form } from '../../../Form'

storiesOf('Controls/Input/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    An input can be formatted with an \`Icon\`.
    `
  })
  .addWithJSX(
    'Icon',
  () => (
  <Form data={{}} onChange={() => {}} onValidate={() => {}}>
    <Flex.Columns count={2}>
      <Form.Field
        name="code"
        value={null}
        control={
          <Input 
            type="text" 
            icon="code"
            placeholder="Icon name"/>}/>
      <Form.Field
        name="code"
        value={null}
        control={
          <Input 
            type="text" 
            icon={{name: 'code', circular: true, inverted: true, color: 'grey'}}
            placeholder="Icon props">
            <Icon name="code"/>
          </Input>}/>
      <Form.Field
        name="code"
        value={null}
        control={
          <Input 
            type="text" 
            placeholder="Icon element">
            <Icon name="code"/>
          </Input>}/>
      <Form.Field
        name="code"
        value={null}
        control={
          <Input 
            type="text" 
            fluid
            placeholder="Icon element w/ props">
            <Icon 
              name="code" circular inverted color="grey"/>
          </Input>}/>
      <Form.Field
        name="code"
        value={null}
        control={
          <Input 
            type="date" 
            icon="code"
            placeholder="Date"/>}/>
      <Form.Field
        name="code"
        value={null}
        control={
          <Input 
            type="color" 
            icon="code"
            placeholder="Color"/>}/>
    </Flex.Columns>
  </Form>
  ));  
