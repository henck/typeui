import * as React from 'react';
declare type TLineLength = 'full' | 'long' | 'medium' | 'short';
interface IPlaceholderLineProps {
    className?: string;
    /** Length of line: 'full', 'long', 'medium' or 'short'. If not provided,
        then the length will be randomized. */
    length?: TLineLength;
    /** A tall line is a little higher than a normal line. */
    tall?: boolean;
}
declare class PlaceholderLine extends React.Component<IPlaceholderLineProps, {}> {
    private length;
    constructor(props: IPlaceholderLineProps);
    render(): JSX.Element;
}
export { PlaceholderLine };
