import * as React from 'react';
interface IPlaceholderHeaderProps {
    className?: string;
    children?: React.ReactNode;
    /** If true, header will contain a small image placeholder. */
    image?: boolean;
}
declare class PlaceholderHeader extends React.Component<IPlaceholderHeaderProps, {}> {
    render(): JSX.Element;
}
export { PlaceholderHeader };
