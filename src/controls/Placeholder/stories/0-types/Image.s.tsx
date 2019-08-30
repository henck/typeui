import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Placeholder, Flex, Segment, Divider } from '../../../';

storiesOf('Controls/Placeholder/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A placeholder can contain a \`Placeholder.Image\`.
    
    Using \`rectangular\` will use a 4:3 aspect ratio. The default aspect ratio is 1:1.
    `
  })
  .addWithJSX(
    'Image',
  () => (
  <div>
    <Placeholder>
      <Placeholder.Image/>
    </Placeholder>
    <Divider hidden/>
    <Flex>
      <Flex.Row>
        <Flex.Column> 
          <Segment> 
            <Placeholder>
              <Placeholder.Image/>
            </Placeholder>
          </Segment>
        </Flex.Column>
        <Flex.Column> 
          <Segment> 
            <Placeholder>
              <Placeholder.Image/>
            </Placeholder>
          </Segment>
        </Flex.Column>
        <Flex.Column> 
          <Segment> 
            <Placeholder>
              <Placeholder.Image/>
            </Placeholder>
          </Segment>
        </Flex.Column>
      </Flex.Row>
    </Flex>
    <Divider hidden/>
    <Flex>
      <Flex.Row>
        <Flex.Column> 
          <Segment> 
            <Placeholder>
              <Placeholder.Image rectangular/>
            </Placeholder>
          </Segment>
        </Flex.Column>
        <Flex.Column> 
          <Segment> 
            <Placeholder>
              <Placeholder.Image rectangular/>
            </Placeholder>
          </Segment>
        </Flex.Column>
        <Flex.Column> 
          <Segment> 
            <Placeholder>
              <Placeholder.Image rectangular/>
            </Placeholder>
          </Segment>
        </Flex.Column>
      </Flex.Row>
    </Flex>                
  </div>
  ));  
