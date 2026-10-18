import * as React from 'react';
interface IHeadProps {
    className?: string;
    children?: any;
    loading: boolean;
}
declare class HeadBase extends React.Component<IHeadProps, {}> {
    static displayName: string;
    render(): React.JSX.Element;
}
declare const Head: import("styled-components/dist/types").IStyledComponentBase<"web", IHeadProps & React.RefAttributes<HeadBase>> & string & Omit<typeof HeadBase, keyof React.Component<any, {}, any>>;
export { Head };
