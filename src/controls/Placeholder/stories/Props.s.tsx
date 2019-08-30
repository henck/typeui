import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../StorybookBase';
import { text, boolean } from '@storybook/addon-knobs/react';
import { Placeholder } from '../../';

storiesOf('Controls/Placeholder', module)
  .addDecorator(withInfo({...withInfoSettings, propTablesExclude: [ Placeholder.Header, Placeholder.Paragraph, Placeholder.Line ]}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    All placeholder properties.
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
