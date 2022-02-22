import * as React from 'react';
interface IRippleProps {
    /** Element to instantiate */
    type: string;
    /** Element's children, if any */
    children?: React.ReactNode;
}
declare class Ripple extends React.Component<IRippleProps & any> {
    private ref;
    private rippleX;
    private rippleY;
    private animationFrame;
    private animationID;
    constructor(props: IRippleProps);
    componentWillUnmount(): void;
    private handleMouseDown;
    private stopAnimation;
    private startAnimation;
    private easeInOutQuad;
    private animate;
    render(): React.DetailedReactHTMLElement<{
        ref: React.RefObject<HTMLElement>;
        onMouseDown: (e: React.MouseEvent<Element, MouseEvent>) => void;
        children?: React.ReactNode;
    }, HTMLElement>;
}
export { Ripple };
