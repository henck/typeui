import * as React from 'react';
import { IInputProps } from '../Input';
interface IDateInputProps {
    onKeyDown: (e: React.KeyboardEvent) => void;
    /**
     * Default date/time format to use if `format` is not specified.
     * e.g. `dd-MM-yyyy` or `HH:mm:ss`.
     */
    defaultFormat: string;
}
declare const InputBox: import("styled-components/dist/types").IStyledComponentBase<"web", Omit<import("styled-components/dist/types").Merged<IInputProps & IDateInputProps, {
    iconPos?: string;
}>, "className" | "children" | "onFocus" | "onChange" | "onKeyDown" | "name" | "type" | "direction" | "format" | "disabled" | "value" | "maxLength" | "placeholder" | "transparent" | "icon" | "error" | "fluid" | "iconPosition" | "clearable" | "nofuture" | "hasSeconds" | "is24h" | "clock" | "autocomplete" | "iconPos" | "defaultFormat"> & Partial<Pick<import("styled-components/dist/types").Merged<IInputProps & IDateInputProps, {
    iconPos?: string;
}>, "className" | "children" | "onFocus" | "onChange" | "onKeyDown" | "name" | "type" | "direction" | "format" | "disabled" | "value" | "maxLength" | "placeholder" | "transparent" | "icon" | "error" | "fluid" | "iconPosition" | "clearable" | "nofuture" | "hasSeconds" | "is24h" | "clock" | "autocomplete" | "iconPos" | "defaultFormat">>> & string & Omit<(props: IInputProps & IDateInputProps) => React.JSX.Element, keyof React.Component<any, {}, any>>;
export { InputBox };
