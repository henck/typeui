import { Input } from '../Input';
import { Form } from '../../Form';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../../../styles';

const Template = (args) => (
  <div style={{ height: '600px', padding: '30px', background: '#406A8C' }}>
    <ThemeProvider
      theme={{ ...Theme, normalColor: '#aaa', background: '#305A7C', fontColor: '#fff' }}
    >
      <Form data={{}} onChange={() => {}} onValidate={() => {}}>
        <Form.Field
          name="text"
          value={null}
          control={<Input type="text" placeholder="Text" {...args} />}
        />
        <Form.Field
          name="color"
          value={null}
          control={<Input type="color" placeholder="Color" {...args} />}
        />
        <Form.Field
          name="date"
          value={null}
          control={<Input type="date" placeholder="Date" {...args} />}
        />
        <Form.Field
          name="time"
          value={null}
          control={<Input type="time" clock placeholder="Time" {...args} />}
        />
      </Form>
    </ThemeProvider>
  </div>
);

export default {
  title: 'Controls/Input/Theming',
  component: Input,

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const Theming = {
  render: Template.bind({}),
  name: 'theming',

  args: {
    clearable: true,
  },
};
