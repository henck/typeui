import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase.s';
import { select, text, boolean } from '@storybook/addon-knobs/react';
import { Dropzone } from '../../Dropzone';

storiesOf('Controls/Dropzone', module)
  .addDecorator(withInfo(withInfoSettings))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    All Dropzone properties.
    `
  })
  .addWithJSX(
    'Properties',
  () => (
  <Dropzone
    onAddFiles={(files: File[]) => {}}
    />
  ));  
