import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { boolean } from '@storybook/addon-knobs/react';
import { Button } from '../../../Button';
import { Icon } from '../../../Icon';

storiesOf('Controls/Button/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A button can be \`circular\`. Note that this implies the \`icon\` attribute.
    `
  })
  .addWithJSX(
    'Circular', () => (
    <div>
      <Button circular={boolean('circular', true, 'Variations')}><Icon name="circle"/></Button>
      <Button circular={boolean('circular', true, 'Variations')} color="tan"><Icon name="unlock"/></Button>
      <Button basic circular={boolean('circular', true, 'Variations')} icon><Icon name="bullhorn"/></Button>
    </div>
  ));  
