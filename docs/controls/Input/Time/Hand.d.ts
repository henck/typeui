import * as React from 'react';
interface IProps {
    /** @ignore */
    className?: string;
    /** Hand angle in degrees (0..359 */
    degrees: number;
    /** If set, hand is animated. */
    animation: boolean;
}
declare const Hand: import("styled-components/dist/types").IStyledComponentBase<"web", IProps> & string & Omit<(props: IProps) => React.JSX.Element, keyof React.Component<any, {}, any>>;
export { Hand };
