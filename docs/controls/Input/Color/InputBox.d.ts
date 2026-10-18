import * as React from 'react';
import { IInputProps } from '../Input';
interface IProps {
    onKeyDown: (e: React.KeyboardEvent) => void;
}
declare const InputBox: import("styled-components/dist/types").IStyledComponentBase<"web", Omit<import("styled-components/dist/types").Merged<IInputProps & IProps, {
    iconPos?: string;
}>, "className" | "children" | "onFocus" | "onChange" | "onKeyDown" | "name" | "type" | "direction" | "format" | "disabled" | "value" | "maxLength" | "placeholder" | "transparent" | "icon" | "error" | "fluid" | "iconPosition" | "clearable" | "nofuture" | "hasSeconds" | "is24h" | "clock" | "autocomplete" | "iconPos"> & Partial<Pick<import("styled-components/dist/types").Merged<IInputProps & IProps, {
    iconPos?: string;
}>, "className" | "children" | "onFocus" | "onChange" | "onKeyDown" | "name" | "type" | "direction" | "format" | "disabled" | "value" | "maxLength" | "placeholder" | "transparent" | "icon" | "error" | "fluid" | "iconPosition" | "clearable" | "nofuture" | "hasSeconds" | "is24h" | "clock" | "autocomplete" | "iconPos">>> & string & Omit<(props: IInputProps & IProps) => React.JSX.Element, keyof React.Component<any, {}, any>>;
export { InputBox };
