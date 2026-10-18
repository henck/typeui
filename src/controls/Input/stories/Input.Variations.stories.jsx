import { Input } from '../Input';
import { Form } from '../../Form';
import { Flex } from '../../Flex';
import { Icon } from '../../Icon';

const Template = (args) => (
  <Form data={{}} onChange={() => {}} onValidate={() => {}}>
    <Form.Field name="name" value={null} control={<Input {...args} />} />
  </Form>
);

export default {
  title: 'Controls/Input/Variations',
  component: Input,

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const Fluid = {
  render: Template.bind({}),
  name: 'fluid',

  args: {
    fluid: true,
    placeholder: 'Fluid',
  },
};

export const IconStory = {
  render: (args) => (
    <Form data={{}} onChange={() => {}} onValidate={() => {}}>
      <Flex.Columns count={2}>
        <Form.Field
          name="code"
          value={null}
          control={<Input type="text" icon="code" placeholder="Icon name" />}
        />
        <Form.Field
          name="code"
          value={null}
          control={
            <Input
              type="text"
              icon={{
                name: 'code',
                circular: true,
                inverted: true,
                color: 'grey',
              }}
              placeholder="Icon props"
            >
              <Icon name="code" />
            </Input>
          }
        />
        <Form.Field
          name="code"
          value={null}
          control={
            <Input type="text" placeholder="Icon element">
              <Icon name="code" />
            </Input>
          }
        />
        <Form.Field
          name="code"
          value={null}
          control={
            <Input type="text" fluid placeholder="Icon element w/ props">
              <Icon name="code" circular inverted color="grey" />
            </Input>
          }
        />
        <Form.Field
          name="code"
          value={null}
          control={<Input type="date" icon="code" placeholder="Date" />}
        />
        <Form.Field
          name="code"
          value={null}
          control={<Input type="color" icon="code" placeholder="Color" />}
        />
      </Flex.Columns>
    </Form>
  ),

  name: 'icon',
  args: {},
};

export const IconPosition = {
  render: Template.bind({}),
  name: 'iconPosition',

  args: {
    type: 'text',
    icon: 'bullhorn',
    iconPosition: 'right',
    placeholder: 'Code....',
  },
};

export const IconProps = {
  render: Template.bind({}),
  name: 'iconProps',

  args: {
    type: 'text',

    icon: {
      name: 'bullhorn',
      circular: true,
      inverted: true,
      color: 'grey',
    },

    placeholder: 'Your name',
  },
};

export const Placeholder = {
  render: Template.bind({}),
  name: 'placeholder',

  args: {
    type: 'text',
    placeholder: 'My placeholder',
  },
};

export const Transparent = {
  render: Template.bind({}),
  name: 'transparent',

  args: {
    type: 'text',
    placeholder: 'Transparent',
    transparent: true,
  },
};
