import { Dropdown } from '../Dropdown';
import { Icon } from '../../Icon';
import { Form } from '../../Form';
import { Label } from '../../Label';
import { Divider } from '../../Divider';

export default {
  title: 'Controls/Dropdown/Groups',
  component: Dropdown,
};

export const Attached = {
  render: (args) => (
    <div>
      <Dropdown
        value={null}
        placeholder="No label"
        label={(item) => item.name}
        data={[
          {
            id: 1,
            name: 'Hello',
          },
          {
            id: 2,
            name: 'World',
          },
        ]}
      >
        <Dropdown.Column>{(item) => item.name}</Dropdown.Column>
      </Dropdown>
      <Divider hidden />
      <Dropdown
        value={null}
        placeholder="Right label"
        label={(item) => item.name}
        data={[
          {
            id: 1,
            name: 'Hello',
          },
          {
            id: 2,
            name: 'World',
          },
        ]}
      >
        <Dropdown.Column>{(item) => item.name}</Dropdown.Column>
        <Label attached="right" color="rebeccapurple">
          Right
        </Label>
      </Dropdown>
      <Divider hidden />
      <Dropdown
        value={null}
        placeholder="Right label (basic)"
        label={(item) => item.name}
        data={[
          {
            id: 1,
            name: 'Hello',
          },
          {
            id: 2,
            name: 'World',
          },
        ]}
      >
        <Dropdown.Column>{(item) => item.name}</Dropdown.Column>
        <Label attached="right" basic color="rebeccapurple">
          Right
        </Label>
      </Dropdown>
      <Divider hidden />
      <Dropdown
        value={null}
        placeholder="Right tag"
        label={(item) => item.name}
        data={[
          {
            id: 1,
            name: 'Hello',
          },
          {
            id: 2,
            name: 'World',
          },
        ]}
      >
        <Dropdown.Column>{(item) => item.name}</Dropdown.Column>
        <Label attached="right" tag>
          Tag
        </Label>
      </Dropdown>
      <Divider hidden />
      <Dropdown
        value={null}
        placeholder="Right pointing label"
        label={(item) => item.name}
        data={[
          {
            id: 1,
            name: 'Hello',
          },
          {
            id: 2,
            name: 'World',
          },
        ]}
      >
        <Dropdown.Column>{(item) => item.name}</Dropdown.Column>
        <Label attached="right" basic pointing>
          Pointing
        </Label>
      </Dropdown>
    </div>
  ),

  name: 'attached',
  args: {},
};
