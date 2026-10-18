import { List } from '../List';
import { Icon } from '../../Icon';
import { Image } from '../../Image';
import { Button } from '../../Button';

const ListContentTemplate = (args) => (
  <List divided>
    <List.Item>
      <Image avatar src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
      <List.Content>Joe</List.Content>
      <List.Content>
        <Button>Add</Button>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src="https://react.semantic-ui.com/images/avatar/small/veronika.jpg" />
      <List.Content>Veronika</List.Content>
      <List.Content>
        <Button>Add</Button>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src="https://react.semantic-ui.com/images/avatar/small/daniel.jpg" />
      <List.Content>Daniel</List.Content>
      <List.Content>
        <Button>Add</Button>
      </List.Content>
    </List.Item>
  </List>
);

const VerticalAlignTemplate = (args) => (
  <List>
    <List.Item>
      <Image avatar src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
      <List.Content>
        <List.Header>Joe</List.Header>
        <List.Description>
          Professional software engineer. Likes bunnies and MSX crossbikes. Spend at least an hour a
          day at his PlayStation playing FIFA. Does not enjoy ravioli.
        </List.Description>
      </List.Content>
      <List.Content align="bottom">
        <Button>Add</Button>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src="https://react.semantic-ui.com/images/avatar/small/veronika.jpg" />
      <List.Content>
        <List.Header>Veronika</List.Header>
        <List.Description>
          Lip-gloss model. Has lifelong dream of appearing on the Jeremy Kyle show (or, at least,
          ever since the show first aired). Does not like Harry Potter movies.
        </List.Description>
      </List.Content>
      <List.Content align="bottom">
        <Button>Add</Button>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src="https://react.semantic-ui.com/images/avatar/small/daniel.jpg" />
      <List.Content>
        <List.Header>Daniel</List.Header>
        <List.Description>
          One of the first contestantes of Big Brother Ukraine. Never bothered to get a driver's
          license. Enjoys long walks on the beach, as long as he has a kitten to bring along. Is
          deeply interested in martial arts.
        </List.Description>
      </List.Content>
      <List.Content align="bottom">
        <Button>Add</Button>
      </List.Content>
    </List.Item>
  </List>
);

export default {
  title: 'Controls/List/Groups',
  component: List,

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const ListContent = {
  render: ListContentTemplate.bind({}),
  name: 'List.Content',
  args: {},
};

export const VerticalAlignment = {
  render: VerticalAlignTemplate.bind({}),
  name: 'Vertical Alignment',
  args: {},
};
