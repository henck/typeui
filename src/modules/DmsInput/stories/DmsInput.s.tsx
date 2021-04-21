import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase.s';
import { Form } from '../../../controls/Form';
import { DmsInput } from '../../../modules/DmsInput';

storiesOf('Modules/DmsInput', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    The \'DmsInput\' module provides a way to input latitudes or longitudes
    either through degrees, minutes and seconds, or through a floating-point number. 
    One format is converted into the other.
    `
  })
  .addWithJSX(
    'DmsInput',
  () => (
    <Form data={{}} onChange={() => {}} onValidate={() => {}}>
    <Form.Field
      name="latitude"
      value={null}
      control={
        <DmsInput isLatitude={true}/>
      }
    />
  </Form>   
  ));  
