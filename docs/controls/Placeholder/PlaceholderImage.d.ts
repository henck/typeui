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
declare class PlaceholderImage extends React.Component<IPlaceholderImageProps> {
    render: () => JSX.Element;
}
export { PlaceholderImage };
