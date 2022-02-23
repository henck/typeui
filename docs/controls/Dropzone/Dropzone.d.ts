import * as React from 'react';
interface IDropzoneProps {
    /** @ignore */
    className?: string;
    children?: React.ReactNode;
    /**
     * Callback to call when files are dropped in the Dropzone. Multiple files can be uploaded at
     * a time.
     */
    onAddFiles: (files: File[]) => void;
    /**
     * Optional translation override for Dropzone message.
     */
    message?: React.ReactNode;
}
interface IDropzoneState {
    hover: boolean;
}
/**
 * A `Dropzone` accepts files, either by dragging them into the zone or by clicking the
 * zone and selection files. Multiple files may be dragged or selected at the same
 * time. When files are selected, Dropzone fires `onAddFiles` with a `Files[]` argument.
 *
 * @example
 * <Dropzone
 *   onAddFiles={(files: File[]) => console.log("Files dropped", files)}
 * />
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-dropzone--properties
 */
declare class Dropzone extends React.Component<IDropzoneProps, IDropzoneState> {
    constructor(props: IDropzoneProps);
    private handleAddFiles;
    private handleDragOver;
    private handleDragLeave;
    render(): JSX.Element;
}
export { Dropzone };
