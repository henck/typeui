import * as React from 'react';
interface ISliderProps {
    /** @ignore */
    className?: string;
    /** @ignore */
    children?: React.ReactNode;
    heightInItems: number;
}
declare const Slider: import("styled-components/dist/types").IStyledComponentBase<"web", ISliderProps> & string & Omit<(props: ISliderProps) => React.JSX.Element, keyof React.Component<any, {}, any>>;
export { Slider };
