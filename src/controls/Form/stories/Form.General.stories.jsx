import { Form } from '../Form';
import { Input } from '../../Input';
import { Dropdown } from '../../Dropdown';
import { Theme, ThemeProvider } from '../../../styles/Theme';

const Template = (args) => <Form {...args}></Form>;

const types = [
  { id: 1, name: 'Developer' },
  { id: 2, name: 'Quality assurance' },
];

const FieldTemplate = (args) => (
  <>
    <ThemeProvider
      theme={{
        divBackground: '#406A8C',
        background: '#ffffff',
        normalColor: '#aaaaaa',
        primaryColor: '#33ace3', // "#2185d0",
        secondaryColor: '#1b1c1d',
        positiveColor: '#21ba45',
        negativeColor: '#db2828',
        infoColor: {
          color: 'rgb(39, 111, 134)',
          background: 'rgb(248, 255, 255)',
          border: 'rgb(169, 213, 222)',
        },
        warningColor: {
          color: 'rgb(87, 58, 8)',
          background: 'rgb(255, 250, 243)',
          border: 'rgb(201, 186, 155)',
        },
        successColor: {
          color: 'rgb(44, 102, 45)',
          background: 'rgb(252, 255, 245)',
          border: 'rgb(163, 194, 147)',
        },
        // errorColor:      { color: "rgb(159, 58, 56)",  background: "rgb(255, 246, 246)", border: "rgb(224, 180, 180)" },
        errorColor: { color: 'rgb(159, 58, 56)', background: '#ffffff', border: '#c18787' },
        fontURL: 'https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i&subset=latin',
        fontName: 'Roboto',
        fontSize: 16,
        fontColor: '#333333',
        fontLineHeight: 24,
        radius: 12,
        darken: 0.05,
      }}
    >
      <div style={{ padding: '30px', background: '#406A8C' }}>
        <Form {...args}>
          <Form.Field
            required={{ message: 'Employee first name is required.' }}
            width={1}
            label="FIRST NAME"
            name="employee_firstname"
            boxed
            value={'First name'}
            control={<Input transparent type="text" placeholder="First name" fluid />}
            hint={
              <span>
                Please provide the employee's first name, e.g. <kbd>John</kbd>
              </span>
            }
          />
          <Form.Field
            required={{ message: 'Employee first name is required.' }}
            width={1}
            label="FIRST NAME (UNBOXED)"
            name="employee_firstname_unboxed"
            value={'First name'}
            control={<Input type="text" placeholder="First name" fluid />}
            hint={
              <span>
                Please provide the employee's first name, e.g. <kbd>John</kbd>
              </span>
            }
          />
          <div style={{ display: 'flex' }}>
            <Form.Field
              required={{ message: '' }}
              width={1}
              label="FIRST NAME (NO HINT)"
              name="employee_firstname_2"
              boxed
              value={'First name'}
              control={<Input transparent type="text" placeholder="First name" fluid />}
            />
            <Form.Field
              required={{ message: 'Employee type is required' }}
              width={1}
              label="TYPE"
              name="employee_type"
              boxed
              value={null}
              control={
                <Dropdown
                  clearable
                  inline
                  onSearch={() => {}}
                  data={types}
                  placeholder="Type"
                  fluid
                  label={(item) => item.name}
                >
                  <Dropdown.Column>{(item) => item.name}</Dropdown.Column>
                </Dropdown>
              }
              hint="Please select an employee type"
            />
            <Form.Field
              required={{ message: '' }}
              width={1}
              label="DATE"
              name="employee_date"
              boxed
              value={null}
              control={<Input transparent type="date" placeholder="Date" fluid />}
            />
          </div>
        </Form>
      </div>
    </ThemeProvider>
    <div style={{ padding: '30px', background: '#ffffff' }}>
      <Form {...args}>
        <Form.Field
          required={{ message: 'Employee first name is required.' }}
          width={1}
          label="FIRST NAME"
          name="employee_firstname"
          boxed
          value={'First name'}
          control={<Input transparent type="text" placeholder="First name" fluid />}
          hint={
            <span>
              Please provide the employee's first name, e.g. <kbd>John</kbd>
            </span>
          }
        />
        <Form.Field
          required={{ message: 'Employee first name is required.' }}
          width={1}
          label="FIRST NAME (UNBOXED)"
          name="employee_firstname_unboxed"
          value={'First name'}
          control={<Input type="text" placeholder="First name" fluid />}
          hint={
            <span>
              Please provide the employee's first name, e.g. <kbd>John</kbd>
            </span>
          }
        />
        <Form.Field
          required={{ message: '' }}
          width={1}
          label="FIRST NAME (NO HINT)"
          name="employee_firstname_2"
          boxed
          value={'First name'}
          control={<Input transparent type="text" placeholder="First name" fluid />}
        />
        <Form.Field
          required={{ message: 'Employee type is required' }}
          width={1}
          label="TYPE"
          name="employee_type"
          boxed
          value={null}
          control={
            <Dropdown
              clearable
              inline
              onSearch={() => {}}
              data={types}
              placeholder="Type"
              fluid
              label={(item) => item.name}
            >
              <Dropdown.Column>{(item) => item.name}</Dropdown.Column>
            </Dropdown>
          }
          hint="Please select an employee type"
        />
      </Form>
    </div>
  </>
);

const UncontrolledTemplate = (args) => (
  <Form {...args}>
    <Form.Uncontrolled
      width={1}
      label="First name"
      hint={
        <span>
          Please provide the employee's first name, e.g. <kbd>John</kbd>
        </span>
      }
    >
      <Input type="text" placeholder="First name" fluid />
    </Form.Uncontrolled>
    <Form.Uncontrolled
      width={1}
      label="FIRST NAME (BOXED)"
      boxed
      hint={
        <span>
          Please provide the employee's first name, e.g. <kbd>John</kbd>
        </span>
      }
    >
      <Input type="text" transparent placeholder="First name" fluid />
    </Form.Uncontrolled>
  </Form>
);

export default {
  title: 'Controls/Form/General',
  component: Form,

  subcomponents: {
    'Form.Field': Form.Field,
    'Form.Uncontrolled': Form.Uncontrolled,
  },
};

export const Field = {
  render: FieldTemplate.bind({}),
  name: 'Field',

  args: {
    data: {},
    onChange: () => {},
    onValidate: () => {},
  },
};

export const Uncontrolled = {
  render: UncontrolledTemplate.bind({}),
  name: 'Uncontrolled',

  args: {
    data: {},
    onChange: () => {},
    onValidate: () => {},
  },
};
