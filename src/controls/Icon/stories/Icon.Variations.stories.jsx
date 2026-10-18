import { Divider } from '../../Divider';
import { Icon } from '../Icon';
import { Segment } from '../../Segment';

const Template = (args) => <Icon {...args} />;

const BorderedTemplate = (args) => (
  <div>
    <Icon {...args} />
    <Icon padded name="id-card" color="teal" bordered />
    <Icon padded name="lock" inverted bordered />
    <Icon padded name="plus" color="teal" inverted bordered />
  </div>
);

const CircularTemplate = (args) => (
  <div>
    <Icon {...args} />
    <Icon padded name="bullhorn" color="teal" circular />
    <Icon padded name="chevron-double" inverted circular />
    <Icon padded name="file-excel" color="teal" inverted circular />
  </div>
);

const ColorTemplate = (args) => (
  <div>
    <Icon {...args} />
    <Icon padded name="at" color="orange" />
    <Icon padded name="id-card" color="yellow" />
    <Icon padded name="chevron-double" color="olive" />
    <Icon padded name="envelope" color="green" />
    <Icon padded name="file-excel" color="teal" />
    <Icon padded name="download" color="blue" />
    <Icon padded name="edit" color="violet" />
    <Icon padded name="code" color="purple" />
    <Icon padded name="circle" color="pink" />
    <Icon padded name="layers" color="brown" />
    <Icon padded name="trash" color="grey" />
    <Icon padded name="tools" color="black" />
  </div>
);

const CorneredTemplate = (args) => (
  <div>
    <Icon {...args} />
    <Icon padded name="envelope" color="teal" cornered />
    <Icon padded name="exchange" inverted cornered />
    <Icon padded name="zoom-extents" color="teal" inverted cornered />
  </div>
);

const FloatTemplate = (args) => (
  <Segment>
    <Icon {...args} />
    <Icon padded name="bullhorn" float="right" />
  </Segment>
);

const LoadingTemplate = (args) => (
  <div>
    <Icon {...args} />
    <Icon padded name="envelope" bordered loading />
    <Icon padded name="download" circular inverted loading />
  </div>
);

const RotatedTemplate = (args) => (
  <div>
    <Icon {...args} />
    <Icon padded name="bullhorn" rotated={90} />
    <Icon padded name="bullhorn" rotated={180} />
    <Icon padded name="bullhorn" rotated={270} />
    <Icon padded name="bullhorn" rotated={45} />
  </div>
);

const SizeTemplate = (args) => (
  <div>
    <Icon {...args} />
    <Icon padded name="envelope" size="tiny" />
    <Icon padded name="envelope" size="small" />
    <Icon padded name="envelope" />
    <Icon padded name="envelope" size="large" />
    <Icon padded name="envelope" size="big" />
    <Icon padded name="envelope" size="huge" />
    <Icon padded name="envelope" size="massive" />
    <Divider hidden />
    <Icon padded name="bullhorn" circular size="mini" />
    <Icon padded name="bullhorn" circular size="tiny" />
    <Icon padded name="bullhorn" circular size="small" />
    <Icon padded name="bullhorn" circular />
    <Icon padded name="bullhorn" circular size="large" />
    <Icon padded name="bullhorn" circular size="big" />
    <Icon padded name="bullhorn" circular size="huge" />
    <Icon padded name="bullhorn" circular size="massive" />
  </div>
);

export default {
  title: 'Controls/Icon/Variations',
  component: Icon,

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const Bordered = {
  render: BorderedTemplate.bind({}),
  name: 'bordered',

  args: {
    name: 'bullhorn',
    padded: true,
    bordered: true,
    onClick: null,
  },
};

export const Circular = {
  render: CircularTemplate.bind({}),
  name: 'circular',

  args: {
    name: 'at',
    padded: true,
    circular: true,
    onClick: null,
  },
};

export const Color = {
  render: ColorTemplate.bind({}),
  name: 'color',

  args: {
    name: 'bullhorn',
    padded: true,
    color: 'red',
    onClick: null,
  },
};

export const Cornered = {
  render: CorneredTemplate.bind({}),
  name: 'cornered',

  args: {
    name: 'bullhorn',
    padded: true,
    cornered: true,
    onClick: null,
  },
};

export const Flipped = {
  render: Template.bind({}),
  name: 'flipped',

  args: {
    name: 'bullhorn',
    flipped: true,
    onClick: null,
  },
};

export const Float = {
  render: FloatTemplate.bind({}),
  name: 'float',

  args: {
    name: 'bullhorn',
    padded: true,
    float: 'left',
    onClick: null,
  },
};

export const Loading = {
  render: LoadingTemplate.bind({}),
  name: 'loading',

  args: {
    name: 'bullhorn',
    padded: true,
    loading: true,
    onClick: null,
  },
};

export const Mirrored = {
  render: Template.bind({}),
  name: 'mirrored',

  args: {
    name: 'bullhorn',
    mirrored: true,
    onClick: null,
  },
};

export const Rotated = {
  render: RotatedTemplate.bind({}),
  name: 'rotated',

  args: {
    name: 'bullhorn',
    padded: true,
    onClick: null,
  },
};

export const Size = {
  render: SizeTemplate.bind({}),
  name: 'size',

  args: {
    name: 'envelope',
    padded: true,
    size: 'mini',
    onClick: null,
  },
};

export const Title = {
  render: Template.bind({}),
  name: 'title',

  args: {
    name: 'bullhorn',
    padded: true,
    title: 'My title',
    onClick: null,
  },
};
