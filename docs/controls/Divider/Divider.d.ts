import * as React from 'react';
interface IDividerProps {
    className?: string;
    children?: React.ReactNode;
    /** A fitted Divider has no space above or below it. */
    fitted?: boolean;
    /** A hidden Divider divides content without a dividing line. */
    hidden?: boolean;
    /** A section Divider creates more margin between blocks of content. */
    section?: boolean;
}
/**
 * A Divider is used to separate blocks of contents vertically. Dividers
 * can be invisible or contain a horizontal line. Dividers can also contain
 * content.
 *
 * @example
 * <Divider>OR</Divider>
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-divider--properties
 */
declare class Divider extends React.PureComponent<IDividerProps, {}> {
    static displayName: string;
    render(): JSX.Element;
}
export { Divider };
