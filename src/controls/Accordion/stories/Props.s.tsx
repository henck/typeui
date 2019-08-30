import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../StorybookBase';
import { text, boolean } from '@storybook/addon-knobs/react';
import { Size, Float } from '../../Types';
import { Accordion } from '../../';

storiesOf('Controls/Accordion', module)
  .addDecorator(withInfo(withInfoSettings))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    All accordion properties.
    `
  })
  .addWithJSX(
    'Properties',
  () => (
  <div>
    <Accordion styled={boolean('styled', true)} multiple={boolean('multiple', true)}>
      <Accordion.Tab title="One">
        <p>Content of first tab.</p>
        <Accordion styled>
          <Accordion.Tab title="Sub-One">
            <p>Content of subtab one.</p>
          </Accordion.Tab>
          <Accordion.Tab title="Sub-Two">
            <p>Content of subtab two.</p>
          </Accordion.Tab>
        </Accordion>
      </Accordion.Tab>
      <Accordion.Tab title="Two">
       <p>Content of second tab.</p>
      </Accordion.Tab>
    </Accordion>
  </div>
  ));  
