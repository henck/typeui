import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase';
import { boolean, text, select } from '@storybook/addon-knobs/react';
import { Size } from '../../../Types';
import { Gravatar } from '../../../Gravatar'

storiesOf('Controls/Gravatar/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A  gravatar may have a \`size\` prop. If not specified, it uses avatar size. 
    `
  })
  .addWithJSX(
    'Size',
  () => (
    <Gravatar 
      email="alex.vanoostenrijk@gmail.com" 
      size={select('size', ['', 'mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'], '') as Size} 
      />
  ));  
