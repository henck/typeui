import * as React from 'react';
interface ISliderProps {
    className?: string;
    children?: React.ReactNode;
    heightInItems: number;
}
declare class SliderBase extends React.Component<ISliderProps, {}> {
    render(): JSX.Element;
}
declare const Slider: import("styled-components").StyledComponent<typeof SliderBase, import("../../styles/Theme").IThemeInterface, {}, never>;
export { Slider };
