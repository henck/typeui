import * as React from 'react'
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase'
import { select, boolean } from '@storybook/addon-knobs/react'
import { Float } from '../../../Types'
import { Accordion } from '../../../Accordion'
import { Icon } from '../../../Icon'
import { Flex } from '../../../Flex'

storiesOf('Controls/Accordion/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    The \`title\` attribute of an \`Accordion.Tab\` can be any JSX, so it's possible to include an icon in the title (or anything else).
    `
  })
  .addWithJSX(
    'Title',
  () => (
  <Accordion 
  styled={boolean('styled', false, 'Variations')} 
  multiple={boolean('multiple', false, 'Type')}
  align={select('align', ['', 'left', 'right'], '', 'Variations') as Float}>
    <Accordion.Tab title={<Flex.Quick><Icon name="code"/> What is a dog?</Flex.Quick>}>
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
