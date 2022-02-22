import * as React from 'react';
import { IInputProps } from './Input';
declare class StandardInputBase extends React.Component<IInputProps, {}> {
    private handleChange;
    render(): JSX.Element;
}
declare const StandardInput: import("styled-components").StyledComponent<typeof StandardInputBase, import("../../styles/Theme").IThemeInterface, {
    iconPos: import("../Types").Float;
    borderColor: string;
    highBorderColor: string;
}, "borderColor" | "iconPos" | "highBorderColor">;
export { StandardInput };
