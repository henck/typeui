import { Table } from '../Table';

const Template = (args) => (
  <Table {...args}>
    <thead>
      <tr>
        <th>Column One</th>
        <th>Column Two</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Value One</td>
        <td>Value Two</td>
      </tr>
      <tr>
        <td>Value Three</td>
        <td>Value Four</td>
      </tr>
      <tr>
        <td>Value Five</td>
        <td>Value Six</td>
      </tr>
      <tr>
        <td>Value Seven</td>
        <td>Value Eight</td>
      </tr>
      <tr>
        <td>Value Nine</td>
        <td>Value Ten</td>
      </tr>
    </tbody>
  </Table>
);

const HeaderlessTemplate = (args) => (
  <Table {...args}>
    <tbody>
      <tr>
        <td>Value One</td>
        <td>Value Two</td>
      </tr>
      <tr>
        <td>Value Three</td>
        <td>Value Four</td>
      </tr>
      <tr>
        <td>Value Five</td>
        <td>Value Six</td>
      </tr>
      <tr>
        <td>Value Seven</td>
        <td>Value Eight</td>
      </tr>
      <tr>
        <td>Value Nine</td>
        <td>Value Ten</td>
      </tr>
    </tbody>
  </Table>
);

export default {
  title: 'Controls/Table/Variations',
  component: Table,

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const Striped = {
  render: Template.bind({}),
  name: 'striped',

  args: {
    striped: true,
  },
};

export const Transparent = {
  render: Template.bind({}),
  name: 'transparent',

  args: {
    transparent: true,
  },
};

export const Headerless = {
  render: HeaderlessTemplate.bind({}),
  name: 'Headerless',
  args: {},
};
