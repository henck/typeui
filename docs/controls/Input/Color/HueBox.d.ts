import * as React from 'react';
interface IProps {
    /** @ignore */
    className?: string;
    hue: number;
    onMouseDown: (data: {
        mouseY: number;
        offsetY: number;
        height: number;
    }) => void;
}
declare const HueBox: import("styled-components/dist/types").IStyledComponentBase<"web", IProps> & string & Omit<(props: IProps) => React.JSX.Element, keyof React.Component<any, {}, any>>;
export { HueBox };
