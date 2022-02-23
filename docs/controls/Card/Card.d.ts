import * as React from 'react';
import { Content } from './Content';
import { Header } from './Header';
import { Meta } from './Meta';
interface ICardProps {
    /** @ignore */
    className?: string;
    children?: React.ReactNode;
    /**
     * A fluid Card occupies all width available to it.
     * @default false
     */
    fluid?: boolean;
    /**
     * A raised Card will have an extra-strong dropshadow.
     * @default false
     */
    raised?: boolean;
    /**
     * A Card can be clickable. If an event handler is set, then the Card will
     * respond to mouse hover.
     */
    onClick?: () => void;
}
/**
 * A Card groups information with an optional header and footer.
 *
 * @example
 * <Card fluid onClick={() => ...)}>
 *   <Card.Header>Card header</Card.Header>
 *   <Card.Meta>Meta content</Card.Meta>
 *   <Card.Content>
 *     Main content of the Card goes into a Card.Content element.
 *   </Card.Content>
 *   <Card.Content secondary>
 *     Secondary content has the secondary attribute set.
 *   </Card.Content>
 * </Card>
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-card--properties
 */
declare class Card extends React.Component<ICardProps> {
    /** A Card can have a Card.Header element. */
    static Header: typeof Header;
    /** A Card can have a Card.Meta element. */
    static Meta: typeof Meta;
    /** A Card can have any number of Card.Content elements inside it. */
    static Content: typeof Content;
    render: () => JSX.Element;
}
export { Card };
