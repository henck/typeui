import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase';
import { boolean } from '@storybook/addon-knobs/react';
import { Button } from '../../../Button';

storiesOf('Controls/Button/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`fluid\` button fills the width of its container.
    `
  })
  .addWithJSX(
    'Fluid', () => (
    <Button fluid={boolean('fluid', true, 'Variations')}>Button</Button>
  ));  
