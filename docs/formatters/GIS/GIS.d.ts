import * as React from 'react';
interface IProps {
    /**
     * Value to format.
     */
    value: number | string;
    /**
     * String to show if formatting failed.
     */
    default?: string;
}
declare class Latitude extends React.Component<IProps> {
    render(): string;
}
declare class Longitude extends React.Component<IProps> {
    render(): string;
}
export { Latitude, Longitude };
