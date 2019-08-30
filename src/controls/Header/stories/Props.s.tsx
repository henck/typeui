import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../StorybookBase';
import { text, boolean } from '@storybook/addon-knobs/react';
import { Header } from '../../';
import { Float, HorizontalAlignment } from '../../Types';

storiesOf('Controls/Header', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: [Header.Subheader, Header.Content], propTablesExclude: []}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    All header properties.
    `
  })
  .addWithJSX(
    'Properties',
  () => (
  <div>
    <Header      
      size={(text('size', 'h1') as any)}
      relative={boolean('relative', false)}
      disabled={boolean('disabled', false)}
      float={(text('float', '')as Float)}
      block={boolean('block', false)}
      attached={boolean('attached', false)}
      align={text('align', '') as HorizontalAlignment}
      color={text('color', '')}
      dividing={boolean('dividing', false)}
      icon={boolean('icon', false)}>
      Header text
    </Header>
  </div>
  ));  
