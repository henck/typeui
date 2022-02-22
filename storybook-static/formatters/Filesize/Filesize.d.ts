import * as React from 'react';
declare type TUnit = 'si' | 'binary';
interface IFilesizeProps {
    /** File size in bytes */
    value: number | string;
    /** Unit type, `si` or `binary` */
    unit?: 'si' | 'binary';
}
/**
 * Filesize takes a size prop (in bytes) and renders
 * a human-readable filesize string.
 *
 * E.g. 10000 => 10.0 kB
 */
declare class Filesize extends React.Component<IFilesizeProps, {}> {
    /** Convert bytes to size string (kB, MB, GB etc.) */
    humanFileSize: (bytes: number, unit: TUnit) => string;
    render(): string;
}
export { Filesize };
