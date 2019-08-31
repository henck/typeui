import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { select, text, boolean } from '@storybook/addon-knobs/react';
import { Dropzone } from '../../../';

storiesOf('Dropzone/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A Dropzone accepts files, either by dragging them into the zone or by clicking the
    zone and selection files. Multiple files may be dragged or selected at the same
    time. 

    When files are selected, Dropzone fires \`onAddFiles\` with a \`Files[]\` argument.
    `
  })
  .addWithJSX(
    'Dropzone',
  () => (
    <Dropzone
    onAddFiles={(files: File[]) => console.log("Files dropped", files)}
    />
  ));  
