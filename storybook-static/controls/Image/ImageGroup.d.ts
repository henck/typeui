import * as React from 'react';
import { Size } from '../Types';
interface IImageGroupProps {
    className?: string;
    /** Sets image size: mini, tiny, small, medium (default), large, big, huge or massive. */
    size?: Size;
    /** Add border */
    bordered?: boolean;
    /** Round image corners */
    rounded?: boolean;
    /** Cicular image (works only for square images) */
    circular?: boolean;
}
declare class ImageGroup extends React.Component<IImageGroupProps, {}> {
    render(): JSX.Element;
}
export { ImageGroup };
