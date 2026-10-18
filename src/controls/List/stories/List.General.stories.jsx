import { List } from '../List';
import { Icon } from '../../Icon';
import { Image } from '../../Image';

const IconTemplate = (args) => (
  <List>
    <List.Item>
      <Icon name="code" />
      <List.Content>
        Red Delicious is a clone of apple cultigen, now comprising more than 50 cultivars, first
        recognized in Madison County, Iowa, in 1880. According to the US Apple Association website,
        it is one of the fifteen most popular apple cultivars in the United States.
      </List.Content>
    </List.Item>
    <List.Item>
      <Icon name="code" />
      <List.Content>Pears</List.Content>
    </List.Item>
    <List.Item>
      <Icon name="code" />
      <List.Content>Oranges</List.Content>
    </List.Item>
  </List>
);

const ImageTemplate = (args) => (
  <List {...args}>
    <List.Item>
      <Image avatar src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
      <List.Content>
        <List.Header>Joe Smith</List.Header>
        <List.Description>All-around cool guy</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src="https://react.semantic-ui.com/images/avatar/small/veronika.jpg" />
      <List.Content>
        <List.Header>Veronika Ossi</List.Header>
        <List.Description>Blue in the face</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" />
      <List.Content>
        <List.Header>Jenny Hess</List.Header>
        <List.Description>Matrix shades</List.Description>
      </List.Content>
    </List.Item>
  </List>
);

const ListHeaderTemplate = (args) => (
  <List {...args}>
    <List.Item>
      <Icon name="code" size="large" color="teal" inverted circular />
      <List.Content>
        <List.Header>
          <a href="http://www.google.com">Link 1</a>
        </List.Header>
        <List.Description>Updated 10 mins ago</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Icon name="code" size="large" color="teal" inverted circular />
      <List.Content>
        <List.Header>
          <a href="http://www.google.com">Link 2</a>
        </List.Header>
        <List.Description>Updated 18 mins ago</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Icon name="code" size="large" color="teal" inverted circular />
      <List.Content>
        <List.Header>
          <a href="http://www.google.com">Link 3</a>
        </List.Header>
        <List.Description>Updated 25 mins ago</List.Description>
      </List.Content>
    </List.Item>
  </List>
);

const OnClickTemplate = (args) => (
  <List {...args}>
    <List.Item
      onClick={() => {
        alert('Item 1 clicked.');
      }}
    >
      <Icon name="code" size="large" color="teal" inverted circular />
      <List.Content>
        <List.Header>Item 1</List.Header>
        <List.Description>Updated 10 mins ago</List.Description>
      </List.Content>
    </List.Item>
    <List.Item
      onClick={() => {
        alert('Item 2 clicked.');
      }}
    >
      <Icon name="code" size="large" color="teal" inverted circular />
      <List.Content>
        <List.Header>Item 2</List.Header>
        <List.Description>Updated 12 mins ago</List.Description>
      </List.Content>
    </List.Item>
    <List.Item
      onClick={() => {
        alert('Item 3 clicked.');
      }}
    >
      <Icon name="code" size="large" color="teal" inverted circular />
      <List.Content>
        <List.Header>Item 3</List.Header>
        <List.Description>Updated 45 mins ago</List.Description>
      </List.Content>
    </List.Item>
  </List>
);

export default {
  title: 'Controls/List/General',
  component: List,

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const Icons = {
  render: IconTemplate.bind({}),
  name: 'Icons',
  args: {},
};

export const Images = {
  render: ImageTemplate.bind({}),
  name: 'Images',

  args: {
    align: 'center',
  },
};

export const ListHeader = {
  render: ListHeaderTemplate.bind({}),
  name: 'List.Header',

  args: {
    divided: true,
    align: 'top',
  },
};

export const Sublists = {
  render: (args) => (
    <List {...args}>
      <List.Item>
        <Icon name="code" />
        <List.Content>
          <List.Header>src</List.Header>
          <List.Description>Source files for project</List.Description>
        </List.Content>
        <List>
          <List.Item>
            <Icon name="code" />
            <List.Content>
              <List.Header>site</List.Header>
              <List.Description>Your site's theme</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <Icon name="code" />
            <List.Content>
              <List.Header>themes</List.Header>
              <List.Description>Packaged theme files</List.Description>
            </List.Content>
            <List>
              <List.Item>
                <Icon name="code" />
                <List.Content>
                  <List.Header>default</List.Header>
                  <List.Description>Default packaged theme</List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <Icon name="code" />
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
            <Icon name="circle" />
            <List.Content>
              <List.Header>theme.config</List.Header>
              <List.Description>Config file for setting packaged themes</List.Description>
            </List.Content>
          </List.Item>
        </List>
      </List.Item>
      <List.Item>
        <Icon name="code" />
        <List.Content>
          <List.Header>dist</List.Header>
          <List.Description>Compiled CSS and JS files</List.Description>
          <List>
            <List.Item>
              <Icon name="code" />
              <List.Content>
                <List.Header>components</List.Header>
                <List.Description>Individual component CSS and JS</List.Description>
              </List.Content>
            </List.Item>
          </List>
        </List.Content>
      </List.Item>
      <List.Item>
        <Icon name="circle" />
        <List.Content>
          <List.Header>gulp.json</List.Header>
          <List.Description>Contains build settings for gulp</List.Description>
        </List.Content>
      </List.Item>
    </List>
  ),

  name: 'Sublists',
  args: {},
};

export const OnClick = {
  render: OnClickTemplate.bind({}),
  name: 'onClick',

  args: {
    divided: true,
    align: 'center',
  },
};
