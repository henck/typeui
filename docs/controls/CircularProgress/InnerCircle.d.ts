import * as React from 'react';
interface IProps {
    /** @ignore */
    className?: string;
    radius: number;
    raised?: boolean;
}
/**
 * Inner circle hides segment centers, and provides a place to show the percentage number.
 */
declare const InnerCircle: import("styled-components/dist/types").IStyledComponentBase<"web", IProps> & string & Omit<(props: IProps) => React.JSX.Element, keyof React.Component<any, {}, any>>;
export { InnerCircle };
