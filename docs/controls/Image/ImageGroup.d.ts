import * as React from 'react';
import { Size } from '../Types';
interface IImageGroupProps {
    /** @ignore */
    className?: string;
    /** @ignore */
    children?: React.ReactNode;
    /**
     * Sets image size: mini, tiny, small, medium (default), large, big, huge or massive.
     */
    size?: Size;
    /**
     * Add border
     * @default false
     */
    bordered?: boolean;
    /**
     * Round image corners
     * @default false
     */
    rounded?: boolean;
    /**
     * Cicular image (works only for square images)
     * @default false
     */
    circular?: boolean;
}
declare class ImageGroup extends React.Component<IImageGroupProps> {
    render: () => React.JSX.Element;
}
export { ImageGroup };
