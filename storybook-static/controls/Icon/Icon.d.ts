import * as React from 'react';
import { Size, Float } from '../Types';
import { IconType } from './IconType';
interface IIconProps {
    className?: string;
    /** An icon can have an `onClick` handler. */
    onClick?: () => void;
    /** Name of sprite from SVG spritesheet to use, e.g. 'caret-down' */
    name?: IconType;
    /** URL of spritesheet and icon, e.g. 'sprites.svg#arrow' */
    url?: string;
    /** Optional icon popup title. */
    title?: string;
    /** Disabled icons have a lighter color. */
    disabled?: boolean;
    /** Icon size: `mini`, `tiny`, `small`, `medium` (default), `large`, `big`, `huge` or `massive`. */
    size?: Size;
    /** Flip icon vertically. */
    flipped?: boolean;
    /** Mirror icon horizontally. */
    mirrored?: boolean;
    /** Rotate icon by degrees, e.g. `90` for a quarter rotation to the right. */
    rotated?: number;
    /** Icon color, e.g. `skyblue`. */
    color?: string;
    /** Add circular border. */
    circular?: boolean;
    /** Invert the icon's colors. */
    inverted?: boolean;
    /** Add square border. */
    bordered?: boolean;
    /** Add rounded border. */
    cornered?: boolean;
    /** Add a rotation animation. */
    loading?: boolean;
    /** Floating to the \`left\` or \`right\`. */
    float?: Float;
    /** Adds spacing around the icon. */
    padded?: boolean;
}
export declare class IconBase extends React.Component<IIconProps, {}> {
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
declare class Icon extends React.Component<IIconProps, {}> {
    render(): JSX.Element;
}
export { Icon, IconStyled, IIconProps };
