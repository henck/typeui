import { Divider } from '../Divider';
import { Segment } from '../../Segment';
import { Input } from '../../Input';
import { Button } from '../../Button';
import { Label } from '../../Label';
import { Icon } from '../../Icon';

const Template = (args) => (
  <div>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis
      eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit,
      posuere a, pede.
    </p>
    <Divider {...args} />
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis
      eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit,
      posuere a, pede.
    </p>
  </div>
);

export default {
  title: 'Controls/Divider',
  component: Divider,

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const Properties = {
  render: Template.bind({}),
  name: 'Properties',
  args: {},
};

export const Sample = {
  render: (args) => (
    <Segment align="center">
      <Input name="search" type="text">
        <Label attached="right" color="SteelBlue" onClick={() => {}}>
          Search
        </Label>
      </Input>
      <Divider {...args}>OR</Divider>
      <Button color="DarkCyan" onClick={() => {}}>
        <Label color="Teal">
          <Icon name="code" color="white" />
        </Label>
        Create New Order
      </Button>
    </Segment>
  ),

  name: 'Sample',
  args: {},
};
