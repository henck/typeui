import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Divider, Header, Icon} from '../../../';

storiesOf('Controls/Divider/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A divider can have some content.
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