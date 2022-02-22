import * as React from 'react';
import { IInputProps } from '../../controls/Input';
interface IPasswordState {
    visible: boolean;
}
declare class Password extends React.Component<IInputProps, IPasswordState> {
    constructor(props: IInputProps);
    handleClick: () => void;
    render(): JSX.Element;
}
export { Password };
