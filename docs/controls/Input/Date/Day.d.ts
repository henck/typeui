import * as React from 'react';
interface IProps {
    /** @ignore */
    className?: string;
    grey: boolean;
    selected: boolean;
    today: boolean;
    day: number;
    onClick?: () => void;
}
declare const Day: import("styled-components/dist/types").IStyledComponentBase<"web", IProps> & string & Omit<(props: IProps) => React.JSX.Element, keyof React.Component<any, {}, any>>;
export { Day };
