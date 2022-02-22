import * as React from 'react';
import { Content } from './Content';
import { Header } from './Header';
import { Meta } from './Meta';
interface ICardProps {
    className?: string;
    children?: React.ReactNode;
    /** A fluid card occupies all width available to it. */
    fluid?: boolean;
    /** A raised card will have an extra-strong dropshadow. */
    raised?: boolean;
    /** A card can be clickable. If an event handler is set, then the card will respond to mouse hover. */
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
declare class Card extends React.Component<ICardProps, {}> {
    static displayName: string;
    /** A Card can have a Card.Header element. */
    static Header: typeof Header;
    /** A Card can have a Card.Meta element. */
    static Meta: typeof Meta;
    /** A Card can have any number of Card.Content elements inside it. */
    static Content: typeof Content;
    render(): JSX.Element;
}
export { Card };
