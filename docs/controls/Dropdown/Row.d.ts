import * as React from 'react';
interface IRowProps {
    /** @ignore */
    className?: string;
    /** @ignore */
    children?: React.ReactNode;
    upwards?: boolean;
    onClick?: () => void;
}
declare const Row: import("styled-components/dist/types").IStyledComponentBase<"web", IRowProps> & string & Omit<(props: IRowProps) => React.JSX.Element, keyof React.Component<any, {}, any>>;
export { Row };
