import * as React from 'react';
import { Content } from './Content';
import { Header } from './Header';
import { Footer } from './Footer';
import { IconPanel } from './IconPanel';
interface IPanelProps {
    children?: React.ReactNode;
    /**
     * Is the Panel currently open?
     * @default false
     */
    open?: boolean;
    /**
     * Default Panel has a width of 200px, but this can be overridden.
     * @default 200
     */
    width?: number;
    /**
     * Does Panel have internal padding? There is no padding by default to allow content to fill the Panel completely.
     * @default false
     */
    padded?: boolean;
    /**
     * If set, Panel does not perform animation.
     * @default false
     */
    noanimation?: boolean;
    /**
     * This callback is called when the user closes the Panel. The caller is supposed to close the Panel.
     */
    onClose?: () => void;
}
interface IPanelState {
    /** Anchor to base panel body positioning on. */
    anchor: HTMLDivElement;
}
/**
 * Note that a panel determines its position from the position of its direct parent.
 * The parent therefore must have position: relative.
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-panel--properties
 */
declare class Panel extends React.Component<IPanelProps, IPanelState> {
    static Header: typeof Header;
    static Content: typeof Content;
    static Footer: typeof Footer;
    /**
     * The Panel.Icon component is a shortcut to building a Panel that opens when an
     * Icon is clicked. Note that the Panel.Icon must still be placed inside a container
     * that is relatively positioned, and that the only way to close the panel is to click
     * outside it.
     *
     * An icon can be passed as an icon type, or as a collection of icon properties.
     */
    static Icon: typeof IconPanel;
    private panelElement;
    constructor(props: IPanelProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    private handleClickOutside;
    private handleKeyDown;
    render(): JSX.Element;
}
export { Panel };
