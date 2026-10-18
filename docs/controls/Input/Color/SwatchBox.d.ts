import * as React from 'react';
import { ISwatch } from './ISwatch';
interface IProps {
    className?: string;
    swatches: ISwatch[];
    onClick: (idx: number) => void;
    onToggle: (idx: number) => void;
}
declare const SwatchBox: import("styled-components/dist/types").IStyledComponentBase<"web", IProps> & string & Omit<(props: IProps) => React.JSX.Element, keyof React.Component<any, {}, any>>;
export { SwatchBox };
