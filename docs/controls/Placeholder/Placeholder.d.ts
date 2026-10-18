import * as React from 'react';
interface IPlaceholderProps {
    /** @ignore */
    className?: string;
    /** @ignore */
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
declare const Placeholder: {
    (props: IPlaceholderProps): React.JSX.Element;
    Paragraph: (props: import("./PlaceholderParagraph").IPlaceholderParagraphProps) => React.JSX.Element;
    Image: (props: import("./PlaceholderImage").IPlaceholderImageProps) => React.JSX.Element;
    Header: (props: import("./PlaceholderHeader").IPlaceholderHeaderProps) => React.JSX.Element;
    Line: (props: import("./PlaceholderLine").IPlaceholderLineProps) => React.JSX.Element;
};
export { Placeholder };
