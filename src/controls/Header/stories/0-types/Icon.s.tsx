import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase';
import { Header } from '../../../Header'
import { Icon } from '../../../Icon'

storiesOf('Controls/Header/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    An \`icon\` header emphasizes its icon.
    `
  })
  .addWithJSX(
    'Icon',
  () => (
  <div>
    <Header size="h1" icon><Icon name="code"/> Icon header</Header>
    <Header size="h1" icon><Icon name="at" circular/> Icon header</Header>
  </div>
  ));  
