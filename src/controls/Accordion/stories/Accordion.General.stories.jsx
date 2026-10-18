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

const TitleTemplate = (args) => (
  <Accordion {...args}>
    <Accordion.Tab
      title={
        <Flex.Quick>
          <Icon name="code" /> What is a dog?
        </Flex.Quick>
      }
    >
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

const HiddenTemplate = (args) => (
  <Accordion {...args}>
    <Accordion.Tab title="What is a dog?">
      A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be
      found as a welcome guest in many households across the world.
    </Accordion.Tab>
    <Accordion.Tab hidden title="What kinds of dogs are there?">
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
  title: 'Controls/Accordion/General',
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

export const Active = {
  render: DefaultTemplate.bind({}),
  name: 'active',

  args: {
    active: [1],
  },
};

export const Multiple = {
  render: DefaultTemplate.bind({}),
  name: 'multiple',

  args: {
    raised: true,
    styled: true,
    multiple: true,
    active: [1],
  },
};

export const Title = {
  render: TitleTemplate.bind({}),
  name: 'title',

  args: {
    raised: true,
    styled: true,
    multiple: true,
    active: [1],
  },
};

export const Hidden = {
  render: HiddenTemplate.bind({}),
  name: 'hidden',

  args: {
    raised: true,
    styled: true,
    multiple: true,
    active: [1],
  },
};
