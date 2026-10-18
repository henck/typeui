import { Accordion } from '../Accordion';
import { Icon } from '../../Icon';
import { Segment } from '../../Segment';
import { Flex } from '../../Flex';
import { Message } from '../../Message';

const AttachedTemplate = (args) => (
  <div>
    <Segment attached="top">Information about dogs</Segment>
    <Accordion {...args}>
      <Accordion.Tab title="What is a dog?">
        A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be
        found as a welcome guest in many households across the world.
      </Accordion.Tab>
      <Accordion.Tab title="What kinds of dogs are there?">
        There are many breeds of dogs. Each breed varies in size and temperament. Owners often
        select a breed of dog that they find to be compatible with their own lifestyle and desires
        from a companion.
      </Accordion.Tab>
      <Accordion.Tab title="How do you acquire a dog?">
        Three common ways for a prospective owner to acquire a dog is from pet shops, private
        owners, or shelters. A pet shop may be the most convenient way to buy a dog. Buying a dog
        from a private owner allows you to assess the pedigree and upbringing of your dog before
        choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to
        a dog who may not find one so readily.
      </Accordion.Tab>
    </Accordion>
    <Message type="warning" attached="bottom">
      End of information.
    </Message>
  </div>
);

export default {
  title: 'Controls/Accordion/Groups',
  component: Accordion,

  subcomponents: {
    'Accordion.Tab': Accordion.Tab,
  },
};

export const Attached = {
  render: AttachedTemplate.bind({}),
  name: 'attached',

  args: {
    styled: true,
    raised: true,
    multiple: true,
    attached: true,
  },
};
