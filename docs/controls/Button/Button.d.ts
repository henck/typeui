import * as React from 'react';
import { Size, Float } from '../Types';
import { ButtonOr } from './ButtonOr';
import { ButtonGroup } from './ButtonGroup';
interface IButtonProps {
    /** @ignore */
    className?: string;
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
     * Set custom color for button, e.g. `skyblue` or `#ffff00`.
     */
    color?: string;
    /**
     * Reduce button padding.
     * @default false
     */
    compact?: boolean;
    /**
     * Set button size: `mini`, `tiny`, `small`, `medium` (default), `large`, `big`, `huge` or `massive`.
     * @default medium
     */
    size?: Size;
    /**
     * Make button fill the width of its container.
     * @default false
     */
    fluid?: boolean;
    /**
     * Remove button padding, for icon-only buttons.
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
declare class Button extends React.Component<IButtonProps, {}> {
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
    static Or: typeof ButtonOr;
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
    static Group: typeof ButtonGroup;
    render: () => JSX.Element;
}
export { Button, IButtonProps };
