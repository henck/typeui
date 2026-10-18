import * as React from 'react';
type TLineLength = 'full' | 'long' | 'medium' | 'short';
interface IPlaceholderLineProps {
    /** @ignore */
    className?: string;
    /**
     * Length of line: 'full', 'long', 'medium' or 'short'. If not provided,
     * then the length will be randomized.
     */
    length?: TLineLength;
    /**
     * A tall line is a little higher than a normal line.
     * @default false
     */
    tall?: boolean;
}
declare const PlaceholderLine: (props: IPlaceholderLineProps) => React.JSX.Element;
export { PlaceholderLine, type IPlaceholderLineProps };
