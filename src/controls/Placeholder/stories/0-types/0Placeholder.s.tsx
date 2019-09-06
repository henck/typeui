import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { Placeholder } from '../../../Placeholder'
import { Flex } from '../../../Flex'
import { Segment } from '../../../Segment'
import { Divider } from '../../../Divider'

storiesOf('Controls/Placeholder/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`Placeholder\` can contain a \`Placeholder.Header\` as well as \`Placeholder.Paragraph\` elements. 
    Any \`PlaceHolder.Line\` elements have random lengths by default, unless a \`length\` is specified. 
    The background animation is done using CSS transforms so that it can be smooth and GPU-accelerated.
    `
  })
  .addWithJSX(
    'Placeholder',
  () => (
  <div>
    <Placeholder>
      <Placeholder.Header image>
        <Placeholder.Line tall/>
        <Placeholder.Line tall/>
      </Placeholder.Header>
      <Placeholder.Paragraph>
        <Placeholder.Line/>
        <Placeholder.Line/>
        <Placeholder.Line/>
        <Placeholder.Line/>
      </Placeholder.Paragraph>
      <Placeholder.Paragraph>
        <Placeholder.Line/>
        <Placeholder.Line/>
        <Placeholder.Line/>
        <Placeholder.Line/>
      </Placeholder.Paragraph>                
    </Placeholder>
    <Divider hidden section/>
    <Flex>
      <Flex.Row>
        <Flex.Column>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line tall length="long"/>
                <Placeholder.Line tall length="medium"/>
              </Placeholder.Header>                        
              <Placeholder.Paragraph>
                <Placeholder.Line  length="medium"/>
                <Placeholder.Line  length="short"/>
              </Placeholder.Paragraph>                             
            </Placeholder>
          </Segment>
        </Flex.Column>
        <Flex.Column>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line tall length="long"/>
                <Placeholder.Line tall length="medium"/>
              </Placeholder.Header>                        
              <Placeholder.Paragraph>
                <Placeholder.Line  length="medium"/>
                <Placeholder.Line  length="short"/>
              </Placeholder.Paragraph>                             
            </Placeholder>
          </Segment>
        </Flex.Column>
        <Flex.Column>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line tall length="long"/>
                <Placeholder.Line tall length="medium"/>
              </Placeholder.Header>                        
              <Placeholder.Paragraph>
                <Placeholder.Line  length="medium"/>
                <Placeholder.Line  length="short"/>
              </Placeholder.Paragraph>                             
            </Placeholder>
          </Segment>
        </Flex.Column>                                          
      </Flex.Row>
    </Flex>
  </div>
  ));  
