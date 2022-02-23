import * as React from 'react';
import { Size, Float } from '../Types';
import { IconType } from './IconType';
interface IIconProps {
    /** @ignore */
    className?: string;
    /**
     * Name of sprite from SVG spritesheet to use, e.g. 'caret-down'
     */
    name?: IconType;
    /**
     * URL of spritesheet and icon, e.g. 'sprites.svg#arrow'
     */
    url?: string;
    /**
     * Optional icon popup title.
     */
    title?: string;
    /**
     * Disabled icons have a lighter color.
     * @default false
     */
    disabled?: boolean;
    /**
     * Icon size: `mini`, `tiny`, `small`, `medium` (default), `large`, `big`, `huge` or `massive`.
     */
    size?: Size;
    /**
     * Flip icon vertically.
     * @default false
     */
    flipped?: boolean;
    /**
     * Mirror icon horizontally.
     * @default false
     */
    mirrored?: boolean;
    /**
     * Rotate icon by degrees, e.g. `90` for a quarter rotation to the right.
     * @default 0
     */
    rotated?: number;
    /**
     * Icon color, e.g. `skyblue`.
     */
    color?: string;
    /**
     * Add circular border.
     * @default false
     */
    circular?: boolean;
    /**
     * Invert the icon's colors.
     * @default false
     */
    inverted?: boolean;
    /**
     * Add square border.
     * @default false
     */
    bordered?: boolean;
    /**
     * Add rounded border.
     * @default false
     */
    cornered?: boolean;
    /**
     * Add a rotation animation.
     * @default false
     */
    loading?: boolean;
    /**
     * Floating to the \`left\` or \`right\`.
     */
    float?: Float;
    /**
     * Adds spacing around the icon.
     * @default false
     */
    padded?: boolean;
    /**
     * An icon can have an `onClick` handler.
     */
    onClick?: () => void;
}
export declare class IconBase extends React.Component<IIconProps> {
    render(): JSX.Element;
}
declare const IconStyled: import("styled-components").StyledComponent<typeof IconBase, import("../../styles/Theme").IThemeInterface, {
    hasBorder: boolean;
    hasBackground: boolean;
    emSize: number;
}, "hasBorder" | "hasBackground" | "emSize">;
/**
 * Displays an icon.
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-icon--properties
 */
declare class Icon extends React.Component<IIconProps> {
    static defaultProps: {
        isIcon: boolean;
    };
    render: () => JSX.Element;
}
export { Icon, IconStyled, IIconProps };
