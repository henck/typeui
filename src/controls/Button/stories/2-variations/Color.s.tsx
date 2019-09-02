import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase';
import { color } from '@storybook/addon-knobs/react';
import { Button } from '../../../Button';

storiesOf('Controls/Button/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A button can have a different \`color\`.
    `
  })
  .addWithJSX(
    'Color', () => (
    <div>
      <Button color={color('color', 'orange', 'Variations')}>Orange</Button>
      <Button color="brown">Brown</Button>
    </div>
  ));  
