import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';
import { Dropbox } from './Dropbox';

interface IDropzoneProps {
  className?: string;
  children?: React.ReactNode;
  /** Callback to call when files are dropped in the Dropzone. */
  onAddFiles: (files: File[]) => void;
}

interface IDropzoneState {
  hover: boolean;
}

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
        onDragover={this.handleDragOver} 
        onDragLeave={this.handleDragLeave} 
        onAddFiles={this.handleAddFiles}/>
    );
  }
}

export { Dropzone };
