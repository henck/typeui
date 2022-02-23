import * as React from 'react';
interface IPanelContainerProps {
    /** @ignore */
    className?: string;
    children?: React.ReactNode;
    /** Anchor element to base positioning of body on. */
    anchor: HTMLDivElement;
    /** Does panel have a fixed width? */
    width?: number;
    /** Does panel have internal padding? */
    padded?: boolean;
    /** If set, panel does not perform animation. */
    noanimation?: boolean;
}
declare class PanelContainer extends React.Component<IPanelContainerProps> {
    private above;
    private right;
    private offset;
    constructor(props: IPanelContainerProps);
    componentDidMount(): void;
    render(): JSX.Element;
}
export { PanelContainer };
