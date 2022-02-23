import * as React from 'react';
import { PlaceholderParagraph } from './PlaceholderParagraph';
import { PlaceholderImage } from './PlaceholderImage';
import { PlaceholderHeader } from './PlaceholderHeader';
import { PlaceholderLine } from './PlaceholderLine';
interface IPlaceholderProps {
    /** @ignore */
    className?: string;
    children?: React.ReactNode;
    /**
     * A fluid placeholder fills the width of its container.
     * @default false
     */
    fluid?: boolean;
}
/**
 * A Placeholder can contain a Placeholder.Header as well as Placeholder.Paragraph elements.
 * Any PlaceHolder.Line elements have random lengths by default, unless a length is specified.
 * The background animation is done using CSS transforms so that it can be smooth and
 * GPU-accelerated.
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-placeholder--properties
 */
declare class Placeholder extends React.Component<IPlaceholderProps> {
    static Paragraph: typeof PlaceholderParagraph;
    static Image: typeof PlaceholderImage;
    static Header: typeof PlaceholderHeader;
    static Line: typeof PlaceholderLine;
    render: () => JSX.Element;
}
export { Placeholder };
