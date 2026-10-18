import { Segment } from '../Segment';

const AttachedTemplate = (args) => (
  <div>
    <Segment {...args}>
      <p>
        Marooned rum capstan galleon fathom yard American Main Admiral of the Black grog blossom
        lee. Square-rigged gabion to go on account piracy wench line sheet poop deck squiffy Gold
        Road. Hang the jib tender coffer to go on account fore brigantine jury mast poop deck long
        clothes heave to.
      </p>
      <p>
        Lugger clap of thunder grapple gally sheet heave to come about Jolly Roger ballast poop
        deck. Chandler Jack Tar black spot transom pillage haul wind lugsail tender lugger list.
        Yardarm snow tackle lee trysail keel cable scuppers avast matey.
      </p>
    </Segment>
    <Segment attached>
      <p>
        Marooned rum capstan galleon fathom yard American Main Admiral of the Black grog blossom
        lee. Square-rigged gabion to go on account piracy wench line sheet poop deck squiffy Gold
        Road. Hang the jib tender coffer to go on account fore brigantine jury mast poop deck long
        clothes heave to.
      </p>
      <p>
        Lugger clap of thunder grapple gally sheet heave to come about Jolly Roger ballast poop
        deck. Chandler Jack Tar black spot transom pillage haul wind lugsail tender lugger list.
        Yardarm snow tackle lee trysail keel cable scuppers avast matey.
      </p>
    </Segment>
    <Segment secondary attached="bottom">
      <p>
        Marooned rum capstan galleon fathom yard American Main Admiral of the Black grog blossom
        lee. Square-rigged gabion to go on account piracy wench line sheet poop deck squiffy Gold
        Road. Hang the jib tender coffer to go on account fore brigantine jury mast poop deck long
        clothes heave to.
      </p>
      <p>
        Lugger clap of thunder grapple gally sheet heave to come about Jolly Roger ballast poop
        deck. Chandler Jack Tar black spot transom pillage haul wind lugsail tender lugger list.
        Yardarm snow tackle lee trysail keel cable scuppers avast matey.
      </p>
    </Segment>
  </div>
);

export default {
  title: 'Controls/Segment/Groups',
  component: Segment,

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const Attached = {
  render: AttachedTemplate.bind({}),
  name: 'attached',

  args: {
    attached: 'top',
    tertiary: true,
  },
};
