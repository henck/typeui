import { LabelledValue } from '../LabelledValue';

const Template = (args) => <LabelledValue {...args} />;

const WidthTemplate = (args) => (
  <div style={{ display: 'flex' }}>
    <LabelledValue {...args} />
    <LabelledValue onClick={null} width={1} label="Depth" hint="Depth in meters">
      3.0 m
    </LabelledValue>
  </div>
);

export default {
  title: 'Controls/LabelledValue/Variations',
  component: LabelledValue,

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const Nobackground = {
  render: Template.bind({}),
  name: 'nobackground',

  args: {
    onClick: null,
    nobackground: true,
    label: 'A label',
    children: 'Some value',
  },
};

export const Hint = {
  render: Template.bind({}),
  name: 'hint',

  args: {
    onClick: null,
    hint: 'Concentration of oxygen in sample',
    label: 'Oxygen',
    children: '5.3 mmol/m3',
  },
};

export const Width = {
  render: WidthTemplate.bind({}),
  name: 'width',

  args: {
    onClick: null,
    width: 2,
    hint: 'Concentration of oxygen in sample',
    label: 'Oxygen',
    children: '5.3 mmol/m3',
  },
};
