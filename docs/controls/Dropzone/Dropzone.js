import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
// Other controls
import { Dropbox } from './Dropbox';
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
const Dropzone = (props) => {
    const [hover, setHover] = React.useState(false);
    const handleAddFiles = (files) => {
        props.onAddFiles(files);
        setHover(false);
    };
    const handleDragOver = () => {
        setHover(true);
    };
    const handleDragLeave = () => {
        setHover(false);
    };
    return (_jsx(Dropbox, { hover: hover, message: props.message, onDragover: handleDragOver, onDragLeave: handleDragLeave, onAddFiles: handleAddFiles }));
};
export { Dropzone };
