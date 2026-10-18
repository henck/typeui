import * as React from 'react';
interface ITabProps {
    /** @ignore */
    className?: string;
    /** @ignore */
    children?: React.ReactNode;
    active?: boolean;
    underlined?: boolean;
    setRef?: any;
    onClick?: any;
}
declare const Tab: import("styled-components/dist/types").IStyledComponentBase<"web", ITabProps> & string & Omit<(props: ITabProps) => React.JSX.Element, keyof React.Component<any, {}, any>>;
export { Tab };
