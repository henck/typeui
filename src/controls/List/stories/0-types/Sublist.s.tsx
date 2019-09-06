import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { List } from '../../../List'
import { Icon } from '../../../Icon'

storiesOf('Controls/List/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`List.Item\` can contain another \`List\`. The sublist will be indented automatically. The sublist must _not_ be inside \`List.Content\`.
    `
  })
  .addWithJSX(
    'Sublist',
  () => (
  <List>
    <List.Item>
      <Icon name='code' />
      <List.Content>
        <List.Header>src</List.Header>
        <List.Description>Source files for project</List.Description>
      </List.Content>
      <List>
        <List.Item>
          <Icon name='code' />
          <List.Content>
            <List.Header>site</List.Header>
            <List.Description>Your site's theme</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <Icon name='code' />
          <List.Content>
            <List.Header>themes</List.Header>
            <List.Description>Packaged theme files</List.Description>
          </List.Content>
          <List>
            <List.Item>
              <Icon name='code' />
              <List.Content>
                <List.Header>default</List.Header>
                <List.Description>Default packaged theme</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <Icon name='code' />
              <List.Content>
                <List.Header>my_theme</List.Header>
                <List.Description>
                  Packaged themes are also available in this folder
                </List.Description>
              </List.Content>
            </List.Item>
          </List>
        </List.Item>
        <List.Item>
          <Icon name='circle' />
          <List.Content>
            <List.Header>theme.config</List.Header>
            <List.Description>Config file for setting packaged themes</List.Description>
          </List.Content>
        </List.Item>
      </List>
    </List.Item>
    <List.Item>
      <Icon name='code' />
      <List.Content>
        <List.Header>dist</List.Header>
        <List.Description>Compiled CSS and JS files</List.Description>
        <List>
          <List.Item>
            <Icon name='code' />
            <List.Content>
              <List.Header>components</List.Header>
              <List.Description>Individual component CSS and JS</List.Description>
            </List.Content>
          </List.Item>
        </List>
      </List.Content>
    </List.Item>
    <List.Item>
      <Icon name='circle' />
      <List.Content>
        <List.Header>gulp.json</List.Header>
        <List.Description>Contains build settings for gulp</List.Description>
      </List.Content>
    </List.Item>
  </List>  
  ));  

