import * as React from 'react';
interface IPanelBodyProps {
    /** @ignore */
    className?: string;
    /** @ignore */
    nodeRef?: React.Ref<HTMLDivElement>;
    children?: React.ReactNode;
    /** Is body above the parent element? */
    above: boolean;
    /** Is body right-aligned to the parent element? */
    right: boolean;
    /** Arrow offset in pixels */
    offset: number;
    /** Override default panel width of 200 pixels */
    width?: number;
    /** Does panel have internal padding? */
    padded?: boolean;
    /** If set, panel does not perform animation. */
    noanimation?: boolean;
}
declare class PanelBodyBase extends React.Component<IPanelBodyProps, {}> {
    private handleClick;
    render(): React.JSX.Element;
}
declare const PanelBody: import("styled-components/dist/types").IStyledComponentBase<"web", IPanelBodyProps & React.RefAttributes<PanelBodyBase>> & string & Omit<typeof PanelBodyBase, keyof React.Component<any, {}, any>>;
export { PanelBody };
