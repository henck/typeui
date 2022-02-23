import * as React from 'react';
interface IDividerProps {
    /** @ignore */
    className?: string;
    children?: React.ReactNode;
    /**
     * A fitted Divider has no space above or below it.
     * @default false
     */
    fitted?: boolean;
    /**
     * A hidden Divider divides content without a dividing line.
     * @default false
     */
    hidden?: boolean;
    /**
     * A section Divider creates more margin between blocks of content.
     * @default false
     */
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
declare class Divider extends React.PureComponent<IDividerProps> {
    render: () => JSX.Element;
}
export { Divider };
