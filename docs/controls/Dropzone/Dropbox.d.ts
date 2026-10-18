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
    render(): React.JSX.Element;
}
declare const Dropbox: import("styled-components/dist/types").IStyledComponentBase<"web", IDropboxProps & React.RefAttributes<DropboxBase>> & string & Omit<typeof DropboxBase, keyof React.Component<any, {}, any>>;
export { Dropbox };
