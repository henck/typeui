import * as React from 'react';

// Other controls
import { Dropbox } from './Dropbox';

interface IDropzoneProps {
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
class Dropzone extends React.Component<IDropzoneProps, IDropzoneState> {
  constructor(props: IDropzoneProps) {
    super(props);
    this.state = {
      hover: false
    }
  }

  private handleAddFiles = (files: File[]) => {
    this.props.onAddFiles(files);
    this.setState({ hover: false });
  }

  private handleDragOver = () => {
    this.setState({ hover: true });
  }

  private handleDragLeave = () =>  {
    this.setState({ hover: false });
  }

  render() {
    let p = this.props;
    return (
      <Dropbox 
        hover={this.state.hover} 
        message={p.message}
        onDragover={this.handleDragOver} 
        onDragLeave={this.handleDragLeave} 
        onAddFiles={this.handleAddFiles}/>
    );
  }
}

export { Dropzone };
