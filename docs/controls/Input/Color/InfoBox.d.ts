import * as React from 'react';
interface IProps {
    /** @ignore */
    className?: string;
    hue: number;
    saturation: number;
    lightness: number;
    onClick: (color: string) => void;
    onChange: (color: string) => void;
}
declare const InfoBox: import("styled-components/dist/types").IStyledComponentBase<"web", IProps> & string & Omit<(props: IProps) => React.JSX.Element, keyof React.Component<any, {}, any>>;
export { InfoBox };
