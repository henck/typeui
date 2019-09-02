import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../StorybookBase';
import { color, select, text, boolean } from '@storybook/addon-knobs/react';
import { Header } from '../../Header'
import { Float, HorizontalAlignment } from '../../Types';
import { HeaderSize } from '../Header';

storiesOf('Header', module)
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
      size={(select('size', ['h1', 'h2', 'h3', 'h4', 'h5'], 'h1', 'Types') as HeaderSize)}
      relative={boolean('relative', false, 'Types')}
      disabled={boolean('disabled', false, 'States')}
      float={(select('float', ['', 'left', 'right'], '', 'Variations') as Float)}
      block={boolean('block', false, 'Variations')}
      attached={boolean('attached', false, 'Groups')}
      align={select('align', ['', 'left', 'center', 'right'], '', 'Variations') as HorizontalAlignment}
      color={color('color', '', 'Variations')}
      dividing={boolean('dividing', false, 'Variations')}
      icon={boolean('icon', false, 'Types')}>
      {text('Label', 'Header text', 'Content')}
    </Header>
  </div>
  ));  
