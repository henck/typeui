import * as React from 'react';
interface IProps {
    /** @ignore */
    className?: string;
    /** @ignore */
    children?: React.ReactNode;
}
/**
 * A `Key` displays a keyboard key. The children are the key description,
 * e.g. "CTRL" or "ALT".
 */
declare const Key: (props: IProps) => React.JSX.Element;
export { Key };
