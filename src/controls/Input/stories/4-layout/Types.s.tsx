import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase';
import { text } from '@storybook/addon-knobs/react';
import { Divider } from '../../../Divider';
import { Dropdown } from '../../../Dropdown';
import { Input } from '../../../Input'

storiesOf('Controls/Input/Layout', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    All types should be of equal width.
    `
  })
  .addWithJSX(
    'Types',
  () => (
  <div>
    <Input icon="search" name="text" type="text"/>
    <Divider hidden/>
    <Dropdown name="dropdown" data={[]} label={(item) => item.name}/>
    <Divider hidden/>
    <Input name="date" type="date"/>
    <Divider hidden/>
    <Input name="color" type="color"/>
  </div>
  ));  
