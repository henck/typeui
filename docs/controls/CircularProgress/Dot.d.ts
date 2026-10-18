import * as React from 'react';
interface IProps {
    /** @ignore */
    className?: string;
    left: number;
    top: number;
    thickness: number;
    color?: string;
}
declare const Dot: import("styled-components/dist/types").IStyledComponentBase<"web", IProps> & string & Omit<(props: IProps) => React.JSX.Element, keyof React.Component<any, {}, any>>;
export { Dot };
