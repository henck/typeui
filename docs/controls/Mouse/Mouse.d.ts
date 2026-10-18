import * as React from 'react';
interface IProps {
    /** @ignore */
    className?: string;
    /** Is left button depressed? */
    left?: boolean;
    /** Is right button depressed? */
    right?: boolean;
    /** Is mouse wheel highlighted? */
    wheel?: boolean;
}
/**
 * The `Mouse` displays a mouse icon. Its buttons and mouse wheel can be
 * highlighted.
 */
declare const Mouse: (props: IProps) => React.JSX.Element;
export { Mouse };
