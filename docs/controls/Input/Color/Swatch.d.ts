import * as React from 'react';
interface IProps {
    /** @ignore */
    className?: string;
    color: string;
    locked: boolean;
    onClick: () => void;
    onToggle: () => void;
}
declare const Swatch: import("styled-components/dist/types").IStyledComponentBase<"web", IProps> & string & Omit<(props: IProps) => React.JSX.Element, keyof React.Component<any, {}, any>>;
export { Swatch };
