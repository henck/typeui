import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { boolean, select } from '@storybook/addon-knobs/react';
import { Header } from '../../../Header';
import { HeaderSize } from '../../Header';

storiesOf('Controls/Header/States', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`disabled\` header shows as inactive.
    `
  })
  .addWithJSX(
    'Disabled',
  () => (
  <div>
    <Header 
      size={(select('size', ['h1', 'h2', 'h3', 'h4', 'h5'], 'h1', 'Types') as HeaderSize)}
      disabled={boolean('disabled', true, 'States')}>
        Disabled header
      </Header>
  </div>
  ));  
