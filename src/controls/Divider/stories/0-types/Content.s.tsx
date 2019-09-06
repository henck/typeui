import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { Divider } from '../../../Divider'
import { Header } from '../../../Header'
import { Icon } from '../../../Icon'


storiesOf('Controls/Divider/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`Divider\` can have some content.
    `
  })
  .addWithJSX(
    'Content',
  () => (
  <div>
    <Divider>
      <Header size="h4"><Icon name="circle"/> Description</Header>
    </Divider>
  </div>
  ));  
