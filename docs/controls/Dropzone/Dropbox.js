import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';
class DropboxBase extends React.Component {
    constructor() {
        super(...arguments);
        // Dropzone is clicked.
        this.handleClick = () => {
            this.inputElement.click();
        };
        this.handleAddFile = (e) => {
            const list = e.target.files;
            const arr = this.fileListToArray(list);
            this.props.onAddFiles(arr);
        };
        this.handleDragOver = (e) => {
            e.preventDefault();
            this.props.onDragover();
        };
        this.handleDragLeave = (e) => {
            this.props.onDragLeave();
        };
        this.handleDrop = (e) => {
            e.preventDefault();
            const files = e.dataTransfer.files;
            const array = this.fileListToArray(files);
            this.props.onAddFiles(array);
        };
    }
    fileListToArray(list) {
        const array = [];
        for (var i = 0; i < list.length; i++) {
            array.push(list.item(i));
        }
        return array;
    }
    render() {
        let p = this.props;
        return (_jsxs("div", { className: p.className, onClick: this.handleClick, onDragOver: this.handleDragOver, onDragLeave: this.handleDragLeave, onDrop: this.handleDrop, children: [_jsx("div", { children: p.message ? p.message : "Drop a file here to upload, or click to select." }), _jsx("svg", { children: _jsx("use", { xlinkHref: "/spritemap.svg#cloud-upload" }) }), _jsx("input", { ref: (el) => this.inputElement = el, type: "file", multiple: true, onChange: this.handleAddFile })] }));
    }
}
const Dropbox = styled(DropboxBase) `
  position: relative; /* For internal <span> positioning */
  border: dashed 2px #aaa;
  ${p => p.hover && css `border: solid 2px #fff;`}
  border-radius: ${p => p.theme.radius}px;
  cursor: pointer;
  width: 100%;
  text-align: center;

  ${p => p.hover && css `
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
`;
export { Dropbox };
