import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import styled from '../../styles/Theme';
class ImgBase extends React.Component {
    constructor(props) {
        super(props);
        this.onLoad = () => {
            // Let Image know that <img> loaded successfully.
            this.props.onLoad();
        };
        this.onError = () => {
            // Let Image know that <img> failed to load.
            this.props.onError();
        };
        // Create ref for <img> element so that we can 
        // attach event handlers to it.
        this.imgRef = React.createRef();
    }
    componentDidMount() {
        // Set image src to start loading.
        this.imgRef.current.src = this.props.src;
        // Listen for "load" and "error" events on <img>.
        this.imgRef.current.addEventListener("load", this.onLoad, true);
        this.imgRef.current.addEventListener("error", this.onError, true);
    }
    componentWillUnmount() {
        // Cleanup: Remove event listeners for "load" and "error".
        this.imgRef.current.removeEventListener("load", this.onLoad, true);
        this.imgRef.current.removeEventListener("error", this.onError, true);
    }
    render() {
        let p = this.props;
        // Note that <img> needs a <span> around it, because
        // <img> itself does not support :before and :after because
        // it cannot contain text content.
        return (_jsx("img", { className: p.className, ref: this.imgRef, alt: p.alt, title: p.title }));
    }
}
/* Styling for Image. */
const Img = styled(ImgBase) `
  display: ${p => p.loaded ? 'block' : 'none'};
  box-sizing: border-box;

  /* The <img> itself must fill the <span>. */
  width: 100%;
`;
export { Img };
