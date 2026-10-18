import * as React from 'react';
interface IPanesProps {
    /** @ignore */
    className?: string;
    /** @ignore */
    children?: React.ReactNode;
    underlined?: boolean;
}
declare const Panes: import("styled-components/dist/types").IStyledComponentBase<"web", IPanesProps> & string & Omit<(props: IPanesProps) => React.JSX.Element, keyof React.Component<any, {}, any>>;
export { Panes };
