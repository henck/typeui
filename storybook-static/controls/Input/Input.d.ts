import * as React from 'react';
import { Float } from '../Types';
import { IIconProps, IconType } from '../Icon/';
interface IInputProps {
    className?: string;
    children?: any;
    /** Input name. */
    name?: string;
    /** Input value. */
    value?: any;
    /** Input type, `text`, `password`, `date`, `time` or `color`. Defaults to `text`. */
    type?: 'date' | 'time' | 'text' | 'password' | 'color';
    /** Placeholder to show when the Input is empty. */
    placeholder?: string;
    /** Marks input as disabled. */
    disabled?: boolean;
    /** Removes input border. */
    transparent?: boolean;
    /** A fluid Input takes up all available horizontal space available to it. */
    fluid?: boolean;
    /** An input can show an error state. */
    error?: boolean;
    /** Icon props (optional). */
    icon?: IconType | IIconProps;
    /** Icon position. */
    iconPosition?: Float;
    /** If set, Input's value can be cleared. */
    clearable?: boolean;
    /** If set, dates and times (in inputs of type `date` or `time`) are shown in this format
     * (refer to date-fns/format for format options).
     */
    format?: string;
    /** If set, date pickers do not allow picking future dates (beyond today). */
    nofuture?: boolean;
    /** If set, time pickers have a "seconds" field. */
    hasSeconds?: boolean;
    /** If set, time pickers use a 24h clock. */
    is24h?: boolean;
    /** If set, time pickers show a clock face. */
    clock?: boolean;
    /** Optional input maxlength */
    maxLength?: number;
    /** Listeners are notified whenever the user interacts with the Input. */
    onChange?: (value: any) => void;
    /** Listeners ar enotified when the Input receives focus. */
    onFocus?: () => void;
}
/**
 * Replacement for standard HTML input.
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-input--properties
 */
declare class Input extends React.Component<IInputProps, {}> {
    render(): JSX.Element;
}
export { Input, IInputProps };
