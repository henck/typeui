import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { boolean } from '@storybook/addon-knobs/react';
import { Button } from '../../../Button';

storiesOf('Controls/Button/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A button with the \`noripple\` attribute does not show the ripple effect. 
    `
  })
  .addWithJSX(
    'Noripple', () => (
    <>
      <Button noripple={boolean('noripple', true, 'Variations')}>Button</Button>
    </>
  ));  
