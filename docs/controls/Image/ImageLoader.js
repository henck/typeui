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
import { keyframes, css } from 'styled-components';
/**
 * The ImageLoader serves two purposes:
 * - While the image is still loading, it gives a temporary height
 *   to the space the image will occupy. It assumes that the image
 *   is square. It shows a loading animation.
 * - In case of a load error, the ImageLoader displays the Image
 *   control's children, which should contain an error message.
 *   The loading animation is removed.
 */
var ImageLoaderBase = /** @class */ (function (_super) {
    __extends(ImageLoaderBase, _super);
    function ImageLoaderBase(props) {
        return _super.call(this, props) || this;
    }
    ImageLoaderBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("span", { className: p.className },
            p.error && p.children,
            React.createElement("span", null)));
    };
    return ImageLoaderBase;
}(React.Component));
// Background animation
var shimmer = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from { transform: translateX(-50%); }\n  to   { transform: translateX(0); }\n"], ["\n  from { transform: translateX(-50%); }\n  to   { transform: translateX(0); }\n"])));
var ImageLoader = styled(ImageLoaderBase)(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  position: relative;\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  overflow: hidden;\n  ", "\n\n  /* Background animation. \n     This is done using an underlying absolute positioned div, which is transformed, \n     rather than using background-position animation. This way, the animation is \n     smoother and GPU-accelerated. */\n  ", "\n\n  /* Height \n   * Use 'auto' if no size given. If there is a size,\n   * then the image is assumed to be square.\n   */\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  /* Take any children and position them in the middle\n     of the ImageLoader. */\n  > * {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translateX(-50%) translateY(-50%);\n  }  \n"], ["\n  position: relative;\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  overflow: hidden;\n  ", "\n\n  /* Background animation. \n     This is done using an underlying absolute positioned div, which is transformed, \n     rather than using background-position animation. This way, the animation is \n     smoother and GPU-accelerated. */\n  ", "\n\n  /* Height \n   * Use 'auto' if no size given. If there is a size,\n   * then the image is assumed to be square.\n   */\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  /* Take any children and position them in the middle\n     of the ImageLoader. */\n  > * {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translateX(-50%) translateY(-50%);\n  }  \n"])), function (p) { return p.error && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["background: #f0f0f0;"], ["background: #f0f0f0;"]))); }, function (p) { return !p.error && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    & > span:last-child {\n      position: absolute;\n      left: 0;\n      top: 0;\n      right: -150%;\n      bottom: 0;\n      z-index: -1;\n      background-color: #fff;\n      background-image: linear-gradient(to right, rgba(0,0,0,0.08) 0px, rgba(0, 0, 0, 0.08) 43%, rgba(0, 0, 0, 0.15) 50%, rgba(0, 0, 0, 0.08) 57%);\n      animation: ", " 1s linear infinite;                \n    }          \n  "], ["\n    & > span:last-child {\n      position: absolute;\n      left: 0;\n      top: 0;\n      right: -150%;\n      bottom: 0;\n      z-index: -1;\n      background-color: #fff;\n      background-image: linear-gradient(to right, rgba(0,0,0,0.08) 0px, rgba(0, 0, 0, 0.08) 43%, rgba(0, 0, 0, 0.15) 50%, rgba(0, 0, 0, 0.08) 57%);\n      animation: ", " 1s linear infinite;                \n    }          \n  "])), shimmer); }, function (p) { return p.size === 'mini' && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["height: 35px;"], ["height: 35px;"]))); }, function (p) { return p.size === 'tiny' && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["height: 80px;"], ["height: 80px;"]))); }, function (p) { return p.size === 'small' && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["height: 150px;"], ["height: 150px;"]))); }, function (p) { return p.size === 'medium' && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["height: 300px;"], ["height: 300px;"]))); }, function (p) { return p.size === 'large' && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["height: 450px;"], ["height: 450px;"]))); }, function (p) { return p.size === 'big' && css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["height: 600px;"], ["height: 600px;"]))); }, function (p) { return p.size === 'huge' && css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["height: 900px;"], ["height: 900px;"]))); }, function (p) { return p.size === 'massive' && css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["height: 1200px;"], ["height: 1200px;"]))); }, function (p) { return !p.size && css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["height: auto;"], ["height: auto;"]))); }, function (p) { return p.avatar && css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["height:28px;"], ["height:28px;"]))); });
export { ImageLoader };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14;
