import * as React from 'react';
interface IPlaceholderImageProps {
    /** @ignore */
    className?: string;
    /**
     * A rectangular image has a 4:3 ratio.
     * @default false
     */
    rectangular?: boolean;
}
declare const PlaceholderImage: (props: IPlaceholderImageProps) => React.JSX.Element;
export { PlaceholderImage, type IPlaceholderImageProps };
