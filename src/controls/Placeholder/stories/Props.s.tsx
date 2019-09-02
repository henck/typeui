import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../StorybookBase';
import { text, boolean } from '@storybook/addon-knobs/react';
import { Placeholder } from '../../Placeholder'

storiesOf('Placeholder', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: [ Placeholder, Placeholder.Header, Placeholder.Image, Placeholder.Paragraph, Placeholder.Line ]}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    All \`Placeholder\` properties.
    `
  })
  .addWithJSX(
    'Properties',
  () => (
  <div>
    <Placeholder      
      fluid={boolean('disabled', false)}>
      <Placeholder.Header image>
        <Placeholder.Line tall/>
        <Placeholder.Line tall/>
      </Placeholder.Header>
      <Placeholder.Paragraph>
        <Placeholder.Line/>
        <Placeholder.Line/>
        <Placeholder.Line/>
        <Placeholder.Line/>
      </Placeholder.Paragraph>
      <Placeholder.Paragraph>
        <Placeholder.Line/>
        <Placeholder.Line/>
        <Placeholder.Line/>
        <Placeholder.Line/>
      </Placeholder.Paragraph>    
    </Placeholder>
  </div>
  ));  
