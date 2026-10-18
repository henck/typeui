import * as React from 'react';
interface IProps {
    /** @ignore */
    className?: string;
    /** @ignore */
    children?: React.ReactNode;
    /** Fired when selection is clicked. */
    onClick: () => void;
}
declare const Selection: import("styled-components/dist/types").IStyledComponentBase<"web", IProps> & string & Omit<(props: IProps) => React.JSX.Element, keyof React.Component<any, {}, any>>;
export { Selection };
