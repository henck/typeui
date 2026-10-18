import * as React from 'react';
interface IImgProps {
    /** @ignore */
    className?: string;
    onLoad?: any;
    onError?: any;
    loaded: boolean;
    /** Image source URL */
    src?: string;
    /** Alt text */
    alt?: string;
    /** Title text */
    title?: string;
}
declare class ImgBase extends React.Component<IImgProps, {}> {
    private imgRef;
    constructor(props: IImgProps);
    onLoad: () => void;
    onError: () => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.JSX.Element;
}
declare const Img: import("styled-components/dist/types").IStyledComponentBase<"web", IImgProps & React.RefAttributes<ImgBase>> & string & Omit<typeof ImgBase, keyof React.Component<any, {}, any>>;
export { Img };
