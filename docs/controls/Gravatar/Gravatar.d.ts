import * as React from 'react';
import { Size } from '../Types';
interface IGravatarProps {
    className?: string;
    /** Email address to use for Gravatar. If not specified, shows default unknown user image. */
    email?: string;
    /** Gravatar image size. If not specified, uses `avatar`. */
    size?: Size;
    /** onClick handler, if any. */
    onClick?: () => void;
}
/**
 * A Gravatar shows a generated image based on an email address, as provided by the gravatar service.
 *
 * @example
 * <Gravatar email="john.smith@email.com"/>
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-gravatar--properties
 */
declare class Gravatar extends React.Component<IGravatarProps, {}> {
    render(): JSX.Element;
}
export { Gravatar };
