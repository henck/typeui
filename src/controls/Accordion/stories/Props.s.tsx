import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase.s';
import { select, boolean } from '@storybook/addon-knobs/react';
import { Float } from '../../Types';
import { Accordion } from '../../Accordion';

storiesOf('Controls/Accordion', module)
  .addDecorator(withInfo({... withInfoSettings, propTables: [Accordion, Accordion.Tab]}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    An \`Accordion\` is used to group content in panes that can be expanded individually. 
    By default, an Accordion only allows one pane to be open at any time. A \`multiple\` Accordion allows
    users to expand multiple panes. 
    `
  })
  .addWithJSX(
    'Properties',
  () => (
  <div>
    <Accordion
      styled={boolean('styled', false, 'Variations')} 
      raised={boolean('raised', false, 'Variations')} 
      multiple={boolean('multiple', false, 'Type')}
      align={select('align', ['', 'left', 'right'], '', 'Variations') as Float}>
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
