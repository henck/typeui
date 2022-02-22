import * as React from 'react';
import { IInputProps } from '../Input';
interface ITimeInputProps {
    onKeyDown: (e: React.KeyboardEvent) => void;
    /**
     * Default date/time format to use if `format` is not specified.
     * e.g. `dd-MM-yyyy` or `HH:mm:ss`.
     */
    defaultFormat: string;
}
declare class InputBoxBase extends React.Component<IInputProps & ITimeInputProps, {}> {
    render(): JSX.Element;
}
declare const InputBox: import("styled-components").StyledComponent<typeof InputBoxBase, import("../../../styles/Theme").IThemeInterface, {
    iconPos: import("../../Types").Float;
}, "iconPos">;
export { InputBox };
