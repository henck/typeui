import * as React from 'react';
import { IInputProps } from '../Input';
interface IColorInputProps {
    onKeyDown: (e: React.KeyboardEvent) => void;
}
declare class InputBoxBase extends React.Component<IInputProps & IColorInputProps, {}> {
    render(): JSX.Element;
}
declare const InputBox: import("styled-components").StyledComponent<typeof InputBoxBase, import("../../../styles/Theme").IThemeInterface, {
    iconPos: import("../../Types").Float;
}, "iconPos">;
export { InputBox };
