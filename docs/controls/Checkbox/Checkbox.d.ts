import * as React from 'react';
import { CheckboxType } from '../Types';
interface ICheckboxProps {
    /** @ignore */
    className?: string;
    /** Checkbox name. */
    name?: string;
    /** Radio value */
    value?: any;
    /** Is the Checkbox currently checked? */
    checked?: boolean;
    /** Checkbox label. Appears to the right of the box. Can be JSX. */
    label?: React.ReactNode;
    /** Is this a radio button? */
    radio?: boolean;
    /**
     * Checkbox visual style: `check`, `toggle`, `slider` or `circle`. Default is `check`.
     * @default check
     */
    type?: CheckboxType;
    /**
     * A disabled checkbox cannot be interacted with.
     * @default false
     */
    disabled?: boolean;
    /**
     * If set, show an error state.
     * @default false
     */
    error?: boolean;
    /** Listeners are notified whenever the user interacts with the input. */
    onChange?: (value: any) => void;
}
/**
 * A Checkbox can be used to create either a HTML checkbox or a HTML radio button.
 *
 * @example
 * <Checkbox label="One" name="myradio" radio value={1}/>
 * <Checkbox label="Two" name="myradio" radio value={2}/>
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-checkbox--properties
 */
declare class Checkbox extends React.Component<ICheckboxProps> {
    render: () => JSX.Element;
}
export { Checkbox };
