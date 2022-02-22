import * as React from 'react';
interface IDropboxProps {
    className?: string;
    children?: React.ReactNode;
    onDragover: () => void;
    onDragLeave: () => void;
    onAddFiles: (files: File[]) => void;
    hover: boolean;
    message?: React.ReactNode;
}
declare class DropboxBase extends React.Component<IDropboxProps, {}> {
    private inputElement;
    private handleClick;
    private fileListToArray;
    private handleAddFile;
    private handleDragOver;
    private handleDragLeave;
    private handleDrop;
    render(): JSX.Element;
}
declare const Dropbox: import("styled-components").StyledComponent<typeof DropboxBase, import("../../styles/Theme").IThemeInterface, {}, never>;
export { Dropbox };
