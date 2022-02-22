import * as React from 'react';
interface IPlaceholderImageProps {
    className?: string;
    /** A rectangular image has a 4:3 ratio. */
    rectangular?: boolean;
}
declare class PlaceholderImage extends React.Component<IPlaceholderImageProps, {}> {
    render(): JSX.Element;
}
export { PlaceholderImage };
