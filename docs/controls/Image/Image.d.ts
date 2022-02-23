import * as React from 'react';
import { Size, Float, VerticalAlignment } from '../Types';
import { ImageGroup } from './ImageGroup';
interface IImageProps {
    /** @ignore */
    className?: string;
    children?: React.ReactNode;
    /** Image source URL. */
    src?: string;
    /** Sets image size: `mini`, `tiny`, `small`, `medium` (default), `large`, `big`, `huge` or `massive`. */
    size?: Size;
    /**
     * Add border.
     * @default false
     */
    bordered?: boolean;
    /**
     * Round image corners.
     * @default false
     */
    rounded?: boolean;
    /**
     * Cicular image (ellipical for non-square images).
     * @default false
     */
    circular?: boolean;
    /**
     * A fluid image takes up the width of its container.
     * @default false
     */
    fluid?: boolean;
    /**
     * An avatar image appears inline and circular.
     * @default false
     */
    avatar?: boolean;
    /**
     * Set as centered content block.
     * @default false
     */
    centered?: boolean;
    /**
     * Make image inline.
     * @default false
     */
    inline?: boolean;
    /** Extra space between inline image and text, either both or `left` or `right`. Implies inline. */
    spaced?: boolean | Float;
    /** An image can float `left` or `right`. */
    float?: Float;
    /** Alt text. */
    alt?: string;
    /** Title text. */
    title?: string;
    /**
     * Hide the image.
     * @default false
     */
    hidden?: boolean;
    /**
     * Disable the image.
     * @default false
     */
    disabled?: boolean;
    /**
     * Vertical alignment `top`, `center` or `bottom` (by default `center`)
     * @default center
     */
    align?: VerticalAlignment;
    /**
     * onClick events are passed through to the list item's HTML element
     */
    onClick?: () => void;
}
declare type TImageState = 'loading' | 'loaded' | 'error';
interface IImageState {
    readonly state: TImageState;
}
declare class ImageBase extends React.Component<IImageProps, IImageState> {
    readonly state: IImageState;
    readonly onLoad: () => void;
    readonly onError: () => void;
    render(): JSX.Element;
}
declare const ImageStyled: import("styled-components").StyledComponent<typeof ImageBase, import("../../styles/Theme").IThemeInterface, {}, never>;
/**
 * Loads an image.
 *
 * An Image can have children. These are only shown when the image fails to load.
 * There should be one child potentially containing other children, otherwise they
 * will overlap.
 *
 * @example
 * <Image
 *  size="medium"
 *  src="http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/image.png-does-not-exist">
 *  <Label>
 *    <Icon name="code" />
 *    Loading error
 *  </Label>
 * </Image>
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-image--properties
 */
declare class Image extends React.Component<IImageProps> {
    /**
     * An Image.Group is a group of images can share size, bordered,
     * rounded and circular attributes. The images are automatically spaced.
     */
    static Group: typeof ImageGroup;
    render: () => JSX.Element;
}
export { Image, IImageProps, ImageStyled };
