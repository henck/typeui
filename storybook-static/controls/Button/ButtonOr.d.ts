import * as React from 'react';
import { Size } from '../Types';
interface IButtonOrProps {
    className?: string;
    /** Sets button size: `mini`, `tiny`, `small`, `medium` (default), `large`, `big`, `huge` or `massive`. */
    size?: Size;
}
declare class ButtonOr extends React.Component<IButtonOrProps, {}> {
    render(): JSX.Element;
}
export { ButtonOr };
