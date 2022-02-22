var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from 'react';
import styled from '../../styles/Theme';
var ImgBase = /** @class */ (function (_super) {
    __extends(ImgBase, _super);
    function ImgBase(props) {
        var _this = _super.call(this, props) || this;
        _this.onLoad = function () {
            // Let Image know that <img> loaded successfully.
            _this.props.onLoad();
        };
        _this.onError = function () {
            // Let Image know that <img> failed to load.
            _this.props.onError();
        };
        // Create ref for <img> element so that we can 
        // attach event handlers to it.
        _this.imgRef = React.createRef();
        return _this;
    }
    ImgBase.prototype.componentDidMount = function () {
        // Set image src to start loading.
        this.imgRef.current.src = this.props.src;
        // Listen for "load" and "error" events on <img>.
        this.imgRef.current.addEventListener("load", this.onLoad, true);
        this.imgRef.current.addEventListener("error", this.onError, true);
    };
    ImgBase.prototype.componentWillUnmount = function () {
        // Cleanup: Remove event listeners for "load" and "error".
        this.imgRef.current.removeEventListener("load", this.onLoad, true);
        this.imgRef.current.removeEventListener("error", this.onError, true);
    };
    ImgBase.prototype.render = function () {
        var p = this.props;
        // Note that <img> needs a <span> around it, because
        // <img> itself does not support :before and :after because
        // it cannot contain text content.
        return (React.createElement("img", { className: p.className, ref: this.imgRef, alt: p.alt, title: p.title }));
    };
    return ImgBase;
}(React.Component));
/* Styling for Image. */
var Img = styled(ImgBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: ", ";\n  box-sizing: border-box;\n\n  /* The <img> itself must fill the <span>. */\n  width: 100%;\n"], ["\n  display: ", ";\n  box-sizing: border-box;\n\n  /* The <img> itself must fill the <span>. */\n  width: 100%;\n"])), function (p) { return p.loaded ? 'block' : 'none'; });
export { Img };
var templateObject_1;
