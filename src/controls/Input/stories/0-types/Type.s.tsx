import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase';
import { text } from '@storybook/addon-knobs/react';
import { Input } from '../../../Input'
import { Header } from '../../../Header'

storiesOf('Controls/Input/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    An input must have a specific \`type\` (as defined by HTML). Supported types
    are \`text\`, \`password\`, \`date\` and \`color\`.
    `
  })
  .addWithJSX(
    'Type',
  () => (
  <div>
    <Header size="h4">Text</Header>
    <Input name="text" type="text"/>
    <Header size="h4">Password</Header>
    <Input name="password" type="password"/>
    <Header size="h4">Date</Header>
    <Input name="date" type="date"/>
    <Header size="h4">Color</Header>
    <Input name="color" type="color"/>
  </div>
  ));  
