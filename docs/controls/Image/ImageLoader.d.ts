import * as React from 'react';
import { Size } from '../Types';
interface IImageLoaderProps {
    /** @ignore */
    className?: string;
    /** @ignore */
    children?: React.ReactNode;
    error: boolean;
    size?: Size;
    avatar?: boolean;
}
declare const ImageLoader: import("styled-components/dist/types").IStyledComponentBase<"web", IImageLoaderProps> & string & Omit<(props: IImageLoaderProps) => React.JSX.Element, keyof React.Component<any, {}, any>>;
export { ImageLoader };
