import * as React from 'react'
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase.s'
import { CircularProgress } from '../CircularProgress'

storiesOf('Controls/CircularProgress', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: [CircularProgress]}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    All \`CircularProgress\` properties. All properties are optional, except \`value\`.
    `
  })
  .addWithJSX(
    'Properties',
  () => (
    <React.Fragment>
      <CircularProgress padded value={15} color="hotpink" raised animated/>
      <CircularProgress padded value={90} raised background animated/>
      <CircularProgress padded value={48} color="crimson" raised background animated rounded/>
    </React.Fragment>
  ));  
