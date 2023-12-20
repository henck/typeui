import * as React from 'react';
interface IProps {
    /**
     * File size in bytes
     */
    value: number | string;
}
/**
 * Human takes a value prop and renders it in a human-readable way.
 *
 * E.g. 10000 => 10K
 */
declare class Human extends React.Component<IProps> {
    /** Convert number to size string (K, M, G etc.) */
    humanFileSize: (value: number) => string;
    render(): string;
}
export { Human };
