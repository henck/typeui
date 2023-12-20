import * as React from 'react';
import { Size } from './../Types';
interface IButtonGroupProps {
    /** @ignore */
    className?: string;
    /** @ignore */
    children?: React.ReactNode;
    /**
     * Aligns buttons in a vertical list. Default is horizontal.
     * @default horizontal
     */
    vertical?: boolean;
    /**
     * Sets size for buttons in group: `mini`, `tiny`, `small`, `medium` (default), `large`, `big`, `huge` or `massive`.
     * @default medium
     */
    size?: Size;
    /**
     * Sets color for all buttons in group, e.g. `#aa3311`.
     */
    color?: string;
    /**
     * Gives all buttons in group reduced padding.
     * @default false
     */
    compact?: boolean;
    /**
     * Sets all buttons in group to be basic buttons, which are less pronounced.
     * @default false
     */
    basic?: boolean;
    /**
     * Sets all buttons in group to be icon buttons that have no margin, to center icons.
     * @default false
    */
    icon?: boolean;
}
declare const ButtonGroup: (props: IButtonGroupProps) => JSX.Element;
export { ButtonGroup, IButtonGroupProps };
