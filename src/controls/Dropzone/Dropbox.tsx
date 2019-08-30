import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';

interface IDropboxProps {
  className?: string;
  children?: React.ReactNode;
  onDragover: () => void;
  onDragLeave: () => void;
  onAddFiles: (files: File[]) => void;
  hover: boolean;
}

class DropboxBase extends React.Component<IDropboxProps, {}> {
  private inputElement: HTMLInputElement;

  // Dropzone is clicked.
  private handleClick = () => {
    this.inputElement.click();
  }

  private fileListToArray(list: FileList): File[] {
    const array = [];
    for (var i = 0; i < list.length; i++) {
      array.push(list.item(i));
    }
    return array;
  }

  private handleAddFile = (e: any) => {
    const list: FileList = e.target.files;
    const arr = this.fileListToArray(list);
    this.props.onAddFiles(arr);
  }

  private handleDragOver = (e: React.MouseEvent) => {
    e.preventDefault();
    this.props.onDragover();
  }

  private handleDragLeave = (e: React.MouseEvent) =>  {
    this.props.onDragLeave();
  }

  private handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files: FileList = e.dataTransfer.files;
    const array = this.fileListToArray(files);
    this.props.onAddFiles(array);
  }

  render() {
    let p = this.props;
    return (
      <div className={p.className} 
        onClick={this.handleClick}
        onDragOver={this.handleDragOver}
        onDragLeave={this.handleDragLeave}
        onDrop={this.handleDrop}>

        <div>Drop a file here to upload, or click to select.</div>
        <svg>
          <use xlinkHref={"spritemap.svg#cloud-upload"}></use>
        </svg>
        <input
          ref={(el:any) => this.inputElement = el}
          type="file"
          multiple
          onChange={this.handleAddFile}
        />        
      </div>
    );
  }
}

const Dropbox = styled(DropboxBase)`
  position: relative; /* For internal <span> positioning */
  border: dashed 2px #aaa;
  ${p => p.hover && css`border: solid 2px #fff;`}
  border-radius: ${p => p.theme.radius}px;
  cursor: pointer;
  width: 100%;
  text-align: center;

  ${p => p.hover && css`
    background: ${p.theme.primaryColor};
  `}

  div {
    margin-top: 8px;
    font-weight: 500;
    color: ${p => p.hover ? '#fff' : p.theme.fontColor};
  }

  svg {
    display: block;
    margin: 8px;
    width: 100%;
    height: 150px;
    fill: ${p => p.hover ? '#fff' : '#888'};
  }

  input {
    display: none;
  }
`

export { Dropbox };
