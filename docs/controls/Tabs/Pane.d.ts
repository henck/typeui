import * as React from 'react';
interface IPaneProps {
    className?: string;
    children?: React.ReactNode;
    active?: boolean;
    label: React.ReactNode;
    nohiddenrender?: boolean;
}
declare class Pane extends React.Component<IPaneProps, {}> {
    render(): JSX.Element;
}
export { Pane };
