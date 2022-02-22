import * as React from 'react';
import { Size } from '../Types';
interface IImageLoaderProps {
    className?: string;
    children?: React.ReactNode;
    error: boolean;
    size?: Size;
    avatar?: boolean;
}
/**
 * The ImageLoader serves two purposes:
 * - While the image is still loading, it gives a temporary height
 *   to the space the image will occupy. It assumes that the image
 *   is square. It shows a loading animation.
 * - In case of a load error, the ImageLoader displays the Image
 *   control's children, which should contain an error message.
 *   The loading animation is removed.
 */
declare class ImageLoaderBase extends React.Component<IImageLoaderProps, {}> {
    constructor(props: IImageLoaderProps);
    render(): JSX.Element;
}
declare const ImageLoader: import("styled-components").StyledComponent<typeof ImageLoaderBase, import("../../styles/Theme").IThemeInterface, {}, never>;
export { ImageLoader };
