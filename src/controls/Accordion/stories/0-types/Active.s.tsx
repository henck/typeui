import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { select, boolean } from '@storybook/addon-knobs/react';
import { Accordion } from '../../../Accordion';
import { Float } from '../../../Types'

storiesOf('Controls/Accordion/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    The default active tab of an \`Accordion\` can be specified with the \`active\` property. This 
    is actually an *array* of currently active tabs. The indices are 0-based.
    `
  })
  .addWithJSX(
    'Active',
  () => (
  <Accordion 
    styled={boolean('styled', false, 'Variations')} 
    raised={boolean('raised', false, 'Variations')} 
    multiple={boolean('multiple', false, 'Types')} 
    align={select('align', ['', 'left', 'right'], '', 'Variations') as Float}
    active={[1]}>
    <Accordion.Tab title="What is a dog?">
      <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
    </Accordion.Tab>
    <Accordion.Tab title="What kinds of dogs are there?">
      <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
    </Accordion.Tab>
    <Accordion.Tab title="How do you acquire a dog?">
      <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>
      <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>
    </Accordion.Tab>
  </Accordion>
  ));  
