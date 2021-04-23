import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { text } from '@storybook/addon-knobs/react';
import { Input } from '../../../Input'
import { Header } from '../../../Header'
import { Form } from '../../../Form'

storiesOf('Controls/Input/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    An input must have a specific \`type\` (as defined by HTML). Supported types
    are \`text\`, \`password\`, \`date\`, \`time\` and \`color\`.
    `
  })
  .addWithJSX(
    'Type',
  () => (
    <Form data={{}} onChange={() => {}} onValidate={() => {}}>
      <Header size="h4">Text</Header>
      <Form.Field
        name="search"
        value={null}
        control={<Input type="text"/>}/>
      <Header size="h4">Password</Header>
      <Form.Field
        name="password"
        value={null}
        control={<Input type="password"/>}/>
      <Header size="h4">Date</Header>
      <Form.Field
        name="date"
        value={null}
        control={<Input type="date"/>}/>
      <Header size="h4">Time</Header>
      <Form.Field
        name="time"
        value={null}
        control={<Input type="time"/>}/>        
      <Header size="h4">Color</Header>
      <Form.Field
        name="color"
        value={null}
        control={<Input type="color"/>}/>
    </Form>
  ));  
