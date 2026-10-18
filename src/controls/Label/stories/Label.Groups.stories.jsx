import { Label } from '../Label';
import { Image } from '../../Image';
import { Divider } from '../../Divider';

const GroupTemplate = (args) => (
  <div>
    <Label.Group tag>
      <Label>One</Label>
      <Label>Two</Label>
      <Label>Three</Label>
    </Label.Group>
    <Divider hidden />
    <Label.Group basic>
      <Label>One</Label>
      <Label>Two</Label>
      <Label>Three</Label>
    </Label.Group>
    <Divider hidden />
    <Label.Group size="large">
      <Label>One</Label>
      <Label>Two</Label>
      <Label>Three</Label>
    </Label.Group>
    <Divider hidden />
    <Label.Group color="cornflowerblue">
      <Label>Group color</Label>
      <Label color="green">Overridden color</Label>
      <Label>Group color</Label>
    </Label.Group>
    <Divider hidden />
    <Label.Group pointing="top" color="LightCoral">
      <Label>One</Label>
      <Label>Two</Label>
      <Label>Three</Label>
    </Label.Group>
  </div>
);

export default {
  title: 'Controls/Label/Groups',
  component: Label.Group,

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const LabelGroup = {
  render: GroupTemplate.bind({}),
  name: 'Label.Group',
  args: {},
};
