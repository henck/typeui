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
    render(): JSX.Element;
}
declare const Img: import("styled-components").StyledComponent<typeof ImgBase, import("../../styles/Theme").IThemeInterface, {}, never>;
export { Img };
