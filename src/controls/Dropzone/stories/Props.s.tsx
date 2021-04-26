import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase.s';
import { Dropzone } from '../../Dropzone';

storiesOf('Controls/Dropzone', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: [Dropzone]}))
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
