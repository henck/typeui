import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Header } from '../../../Header'
import { Icon } from '../../../Icon'

storiesOf('Header/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A header can contain an icon.
    `
  })
  .addWithJSX(
    'With icon',
  () => (
  <div>
    <Header size="h1"><Icon name="code"/> Header with icon</Header>
  </div>
  ));  
