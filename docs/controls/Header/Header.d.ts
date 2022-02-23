import * as React from 'react';
import { Float, VerticalDirection, HorizontalAlignment } from '../Types';
import { Subheader } from './Subheader';
import { HeaderContent } from './HeaderContent';
export declare type HeaderSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export interface IHeaderProps {
    /** @ignore */
    className?: string;
    children?: React.ReactNode;
    onClick?: () => void;
    /** Header size: one of `h1` through `h6`. */
    size: HeaderSize;
    /**
     * By default, header sizes are absolute and use rem units. When
     * relative sizes are selected, 'em' units are used and the header size
     * is relative to the container's font-size.
     * @default false
     */
    relative?: boolean;
    /**
     * Have header show as inactive.
     * @default false
     */
    disabled?: boolean;
    /** A Header can float to the `left` or to the `right`. */
    float?: Float;
    /**
     * Draw block around header
     * @default false
     */
    block?: boolean;
    /** Attached to 'top', 'bottom' or nothing (both). */
    attached?: boolean | VerticalDirection;
    /** Align content to `left`, `center` or `right`. By default `left`. */
    align?: HorizontalAlignment;
    /** Header color, e.g. `skyblue`. */
    color?: string;
    /**
     * A dividing header has a bottom border.
     * @default false
     */
    dividing?: boolean;
    /**
     * Emphasize icon in header
     * @default false
     */
    icon?: boolean;
}
/**
 * The <Header> component offers sizes h1..h6. The size ratio is determined using the
 * modularScale algorithm. Starting at 1rem (normal text), h6 is the next
 * scale up, h5 the scale after that and so on. The actual scale ratio can be defined in
 * the theme.
 *
 * By default header sizes are in 'rem', but by adding the 'relative' attribute they
 * will be in 'em' and header size will be relative to the header's container's
 * font-size.
 *
 * * 'size' is a mandatory attribute.
 *
 * @example
 * <Header size='h1'>Hello, world</Header>
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-header--properties
 */
declare class Header extends React.Component<IHeaderProps> {
    /**
     * A header may contain a <Subheader>.
     */
    static Subheader: typeof Subheader;
    /**
     * Header.Content is used to group header content (allowing for Subheader).
     */
    static Content: typeof HeaderContent;
    render: () => JSX.Element;
}
export { Header };
