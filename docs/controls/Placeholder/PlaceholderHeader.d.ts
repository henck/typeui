import * as React from 'react';
interface IPlaceholderHeaderProps {
    /** @ignore */
    className?: string;
    /** @ignore */
    children?: React.ReactNode;
    /**
     * If true, header will contain a small image placeholder.
     * @default false
     */
    image?: boolean;
}
declare const PlaceholderHeader: (props: IPlaceholderHeaderProps) => React.JSX.Element;
export { PlaceholderHeader, type IPlaceholderHeaderProps };
