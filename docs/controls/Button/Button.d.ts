import * as React from 'react';
import { Size, Float } from '../Types';
interface IButtonProps {
    /** @ignore */
    className?: string;
    /** @ignore */
    children?: React.ReactNode;
    /** @ignore (Not public) True when button is in a Button.Group; styling will need to know this. */
    grouped?: boolean;
    /**
     * Optional event handler for `onClick` event. The corresponding listener is set on the button's HTML element.
     * @default null
     */
    onClick?: () => void;
    /**
     * Emphasis: make this button stand out using the primary theme color.
     * @default false
     */
    primary?: boolean;
    /**
     * Emphasis: make this button stand out using the secondary theme color.
     * @default false
     */
    secondary?: boolean;
    /**
     * Variation: make this button hint toward a positive consequence.
     * @default false
     */
    positive?: boolean;
    /**
     * Variation: make this button hint toward a negative consequence.
     * @default false
     */
    negative?: boolean;
    /**
     * Optionally set custom color for button, e.g. `skyblue` or `#ffff00`.
     */
    color?: string;
    /**
     * Optionally reduce button padding.
     * @default false
     */
    compact?: boolean;
    /**
     * Optionally set button size: `mini`, `tiny`, `small`, `medium` (default), `large`, `big`, `huge` or `massive`.
     * @default medium
     */
    size?: Size;
    /**
     * Optionally make button fill the width of its container.
     * @default false
     */
    fluid?: boolean;
    /**
     * Optionally remove button padding, for icon-only buttons.
     * @default false
     */
    icon?: boolean;
    /**
     * Basic buttons have a subtler appearance.
     * @default false
     */
    basic?: boolean;
    /**
     * Disabled buttons cannot be pressed.
     * @default false
     */
    disabled?: boolean;
    /** Optional; causes button to float to the `left` or `right`. */
    float?: Float;
    /**
     * Make button circular. This works only with icon buttons.
     * @default false
     */
    circular?: boolean;
    /**
     * If set, disables button ripple effect.
     * @default false
     */
    noripple?: boolean;
}
/**
 * A Button can be clicked and styled.
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-button--properties
 */
declare const Button: {
    (props: IButtonProps): JSX.Element;
    /**
     * Button groups can contain conditionals using Button.Or.
     *
     * @example
     * <Button.Group>
     *   <Button>One</Button>
     *   <Button.Or/>
     *   <Button positive>Two</Button>
     * </Button.Group>
     *
     * @link https://henck.github.io/typeui/?path=/story/controls-button-groups--group-attributes
     */
    Or: (props: import("./ButtonOr").IButtonOrProps) => JSX.Element;
    /**
     * Buttons can be grouped horizontally or vertically using Button.Group.
     *
     * @example
     * <Button.Group vertical>
     *  <Button>One</Button>
     *  <Button>Two</Button>
     *  <Button>Three</Button>
     * </Button.Group>
     *
     * @link https://henck.github.io/typeui/?path=/story/controls-button-groups--conditional
     */
    Group: (props: import("./ButtonGroup").IButtonGroupProps) => JSX.Element;
};
export { Button, IButtonProps };
