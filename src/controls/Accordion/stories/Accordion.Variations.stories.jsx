import { Accordion } from '../Accordion';
import { Icon } from '../../Icon';
import { Segment } from '../../Segment';
import { Flex } from '../../Flex';
import { Message } from '../../Message';

const DefaultTemplate = (args) => (
  <Accordion {...args}>
    <Accordion.Tab title="What is a dog?">
      A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be
      found as a welcome guest in many households across the world.
    </Accordion.Tab>
    <Accordion.Tab title="What kinds of dogs are there?">
      There are many breeds of dogs. Each breed varies in size and temperament. Owners often select
      a breed of dog that they find to be compatible with their own lifestyle and desires from a
      companion.
    </Accordion.Tab>
    <Accordion.Tab title="How do you acquire a dog?">
      Three common ways for a prospective owner to acquire a dog is from pet shops, private owners,
      or shelters. A pet shop may be the most convenient way to buy a dog. Buying a dog from a
      private owner allows you to assess the pedigree and upbringing of your dog before choosing to
      take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may
      not find one so readily.
    </Accordion.Tab>
  </Accordion>
);

export default {
  title: 'Controls/Accordion/Variatons',
  component: Accordion,

  subcomponents: {
    'Accordion.Tab': Accordion.Tab,
  },

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const Align = {
  render: DefaultTemplate.bind({}),
  name: 'align',

  args: {
    align: 'right',
  },
};

export const Noanimate = {
  render: DefaultTemplate.bind({}),
  name: 'noanimate',

  args: {
    noanimate: true,
    styled: true,
  },
};

export const Styled = {
  render: DefaultTemplate.bind({}),
  name: 'styled',

  args: {
    styled: true,
  },
};

export const Raised = {
  render: DefaultTemplate.bind({}),
  name: 'raised',

  args: {
    raised: true,
    styled: true,
  },
};
