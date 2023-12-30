import * as React from 'react';

// Other controls
import { Dropbox } from './Dropbox';

interface IDropzoneProps {
  /** @ignore */
  className?: string;
  /** @ignore */
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
const Dropzone = (props: IDropzoneProps) => {
  const [hover, setHover] = React.useState(false);

  const handleAddFiles = (files: File[]) => {
    props.onAddFiles(files);
    setHover(false);
  }

  const handleDragOver = () => {
    setHover(true);
  }

  const handleDragLeave = () =>  {
    setHover(false);
  }

  return (
    <Dropbox 
      hover={hover} 
      message={props.message}
      onDragover={handleDragOver} 
      onDragLeave={handleDragLeave} 
      onAddFiles={handleAddFiles}/>
  );
}

export { Dropzone }
