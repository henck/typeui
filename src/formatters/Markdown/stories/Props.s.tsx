import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase.s';
import { number, text, boolean } from '@storybook/addon-knobs/react';
import { Markdown } from '../Markdown'

storiesOf('Formatters/Markdown', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: [Markdown], propTablesExclude: []}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    The \`Markdown\` formatter takes a markdown string (source) and renders
    HTML, with TypeUI components thrown in where necessary.
    `
  })
  .addWithJSX(
    'Properties',
  () => (
  <div>
    <Markdown source={`
### List support

* There once was a wonderful star
* Who thought she would go very far
* Until she fell down
* And looked like a clown
* She knew she would never go far.

### Image support

![Joe](https://react.semantic-ui.com/images/avatar/large/elliot.jpg)

### Table support
  
| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |      
    `}/>
  </div>
  ));  
