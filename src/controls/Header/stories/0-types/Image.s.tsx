import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Header, Image } from '../../../';

storiesOf('Header/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A header may contain an \`Image\`.
    `
  })
  .addWithJSX(
    'Image',
  () => (
  <div>
    <Header size="h1">
      <Image size="mini" circular src="https://react.semantic-ui.com/images/avatar/large/patrick.png"/>
      Image header
    </Header>
    <Header size="h1" icon>
      <Image size="tiny" circular src="https://react.semantic-ui.com/images/avatar/large/patrick.png"/>
      Image header
    </Header>                
  </div>
  ));  
