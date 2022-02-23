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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import styled from '../../styles/Theme';
import { css } from 'styled-components';
// Other controls
import { Img } from './Img';
import { ImageGroup } from './ImageGroup';
import { ImageLoader } from './ImageLoader';
var ImageBase = /** @class */ (function (_super) {
    __extends(ImageBase, _super);
    function ImageBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Images start off in 'loading' state.
        _this.state = {
            state: 'loading'
        };
        _this.onLoad = function () {
            _this.setState(function () { return ({ state: 'loaded' }); });
        };
        _this.onError = function () {
            _this.setState(function () { return ({ state: 'error' }); });
        };
        return _this;
    }
    ImageBase.prototype.render = function () {
        var p = this.props;
        // Note that <img> needs a <span> around it, because
        // <img> itself does not support :before and :after because
        // it cannot contain text content.
        return (React.createElement("span", { className: p.className, onClick: p.onClick },
            this.state.state != 'loaded' && React.createElement(ImageLoader, { avatar: p.avatar, size: p.size, error: this.state.state == 'error' }, p.children),
            this.state.state != 'error' && React.createElement(Img, { src: p.src, loaded: this.state.state == 'loaded', onLoad: this.onLoad, onError: this.onError, alt: p.alt, title: p.title })));
    };
    return ImageBase;
}(React.Component));
/* Styling for Image. */
var ImageStyled = styled(ImageBase)(templateObject_29 || (templateObject_29 = __makeTemplateObject(["\n  box-sizing: border-box;\n  flex-shrink: 0;\n  /* For ImgMessage overlay positioning: */\n  position: relative;\n  /* If unsized images fails to load, make sure <span> at \n     least has *some* height. */\n  min-height: 24px; \n\n  /* Display. By default block, unless inline or avatar. */\n  ", "\n  ", "\n  /* The entire image can be hidden. */\n  ", "\n\n  /* Whatever the image size, it will never be wider than\n   * the container space available. */\n  max-width: 100%;\n  line-height: 0px; /* Otherwise <span> will add extra padding. */\n  \n  /* By default, inline images are vertically aligned to middle. */ \n  ", "\n  ", "\n  ", "\n\n  /* Size */\n  /* Use 'auto' if no size given. */\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  ", ", ", " {\n    /* Bordered */\n    ", "\n    /* Rounded */\n    ", "\n    /* Circular, Avatar */\n    ", "\n  }\n\n  /* Fluid */\n  ", "\n\n  /* Avatar */ \n  ", "\n\n  /* Centered */\n  ", "\n\n  /* Spaced */ \n  ", "\n  ", "\n  ", "\n\n  /* Floating */\n  ", "\n  ", "      \n\n  /* onClick */\n  ", "\n\n  /* Disabled */\n  ", "\n"], ["\n  box-sizing: border-box;\n  flex-shrink: 0;\n  /* For ImgMessage overlay positioning: */\n  position: relative;\n  /* If unsized images fails to load, make sure <span> at \n     least has *some* height. */\n  min-height: 24px; \n\n  /* Display. By default block, unless inline or avatar. */\n  ", "\n  ", "\n  /* The entire image can be hidden. */\n  ", "\n\n  /* Whatever the image size, it will never be wider than\n   * the container space available. */\n  max-width: 100%;\n  line-height: 0px; /* Otherwise <span> will add extra padding. */\n  \n  /* By default, inline images are vertically aligned to middle. */ \n  ", "\n  ", "\n  ", "\n\n  /* Size */\n  /* Use 'auto' if no size given. */\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  ", ", ", " {\n    /* Bordered */\n    ", "\n    /* Rounded */\n    ", "\n    /* Circular, Avatar */\n    ", "\n  }\n\n  /* Fluid */\n  ", "\n\n  /* Avatar */ \n  ", "\n\n  /* Centered */\n  ", "\n\n  /* Spaced */ \n  ", "\n  ", "\n  ", "\n\n  /* Floating */\n  ", "\n  ", "      \n\n  /* onClick */\n  ", "\n\n  /* Disabled */\n  ", "\n"])), function (p) { return !p.hidden && (p.inline || p.spaced || p.avatar) && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: inline-block;\n  "], ["\n    display: inline-block;\n  "]))); }, function (p) { return !p.hidden && !p.inline && !p.spaced && !p.avatar && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: block;\n  "], ["\n    display: block;\n  "]))); }, function (p) { return p.hidden && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["display:none;"], ["display:none;"]))); }, function (p) { return (!p.align || p.align === 'center') && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["vertical-align: middle;"], ["vertical-align: middle;"]))); }, function (p) { return p.align === 'top' && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["vertical-align: top;"], ["vertical-align: top;"]))); }, function (p) { return p.align === 'bottom' && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["vertical-align: bottom;"], ["vertical-align: bottom;"]))); }, function (p) { return p.size === 'mini' && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["width: 35px;"], ["width: 35px;"]))); }, function (p) { return p.size === 'tiny' && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["width: 80px;"], ["width: 80px;"]))); }, function (p) { return p.size === 'small' && css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["width: 150px;"], ["width: 150px;"]))); }, function (p) { return p.size === 'medium' && css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["width: 300px;"], ["width: 300px;"]))); }, function (p) { return p.size === 'large' && css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["width: 450px;"], ["width: 450px;"]))); }, function (p) { return p.size === 'big' && css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["width: 600px;"], ["width: 600px;"]))); }, function (p) { return p.size === 'huge' && css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["width: 900px;"], ["width: 900px;"]))); }, function (p) { return p.size === 'massive' && css(templateObject_14 || (templateObject_14 = __makeTemplateObject(["width: 1200px;"], ["width: 1200px;"]))); }, function (p) { return !p.size && css(templateObject_15 || (templateObject_15 = __makeTemplateObject(["width: auto;"], ["width: auto;"]))); }, Img, ImageLoader, function (p) { return p.bordered && css(templateObject_16 || (templateObject_16 = __makeTemplateObject(["border: solid 1px rgba(0, 0, 0, 0.1);"], ["border: solid 1px rgba(0, 0, 0, 0.1);"]))); }, function (p) { return p.rounded && css(templateObject_17 || (templateObject_17 = __makeTemplateObject(["border-radius: ", "px;"], ["border-radius: ", "px;"])), p.theme.radius); }, function (p) { return (p.circular || p.avatar) && css(templateObject_18 || (templateObject_18 = __makeTemplateObject(["border-radius: 50%;"], ["border-radius: 50%;"]))); }, function (p) { return p.fluid && css(templateObject_19 || (templateObject_19 = __makeTemplateObject(["width:100%;"], ["width:100%;"]))); }, function (p) { return p.avatar && css(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n    width: 28px;\n  "], ["\n    width: 28px;\n  "]))); }, function (p) { return p.centered && css(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n    margin-left:auto;\n    margin-right:auto;    \n  "], ["\n    margin-left:auto;\n    margin-right:auto;    \n  "]))); }, function (p) { return p.spaced && css(templateObject_22 || (templateObject_22 = __makeTemplateObject(["margin-left: 6px; margin-right: 6px;"], ["margin-left: 6px; margin-right: 6px;"]))); }, function (p) { return p.spaced === 'left' && css(templateObject_23 || (templateObject_23 = __makeTemplateObject(["margin-right: 0;"], ["margin-right: 0;"]))); }, function (p) { return p.spaced === 'right' && css(templateObject_24 || (templateObject_24 = __makeTemplateObject(["margin-left: 0;"], ["margin-left: 0;"]))); }, function (p) { return p.float === 'left' && css(templateObject_25 || (templateObject_25 = __makeTemplateObject(["float:left; margin-bottom: 13px; margin-right: 13px;"], ["float:left; margin-bottom: 13px; margin-right: 13px;"]))); }, function (p) { return p.float === 'right' && css(templateObject_26 || (templateObject_26 = __makeTemplateObject(["float:right; margin-bottom: 13px; margin-left: 13px;"], ["float:right; margin-bottom: 13px; margin-left: 13px;"]))); }, function (p) { return p.onClick && css(templateObject_27 || (templateObject_27 = __makeTemplateObject(["cursor:pointer;"], ["cursor:pointer;"]))); }, function (p) { return p.disabled && css(templateObject_28 || (templateObject_28 = __makeTemplateObject(["filter: brightness(1.2);"], ["filter: brightness(1.2);"]))); });
/**
 * Loads an image.
 *
 * An Image can have children. These are only shown when the image fails to load.
 * There should be one child potentially containing other children, otherwise they
 * will overlap.
 *
 * @example
 * <Image
 *  size="medium"
 *  src="http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/image.png-does-not-exist">
 *  <Label>
 *    <Icon name="code" />
 *    Loading error
 *  </Label>
 * </Image>
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-image--properties
 */
var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    function Image() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () { return React.createElement(ImageStyled, __assign({}, _this.props)); };
        return _this;
    }
    /**
     * An Image.Group is a group of images can share size, bordered,
     * rounded and circular attributes. The images are automatically spaced.
     */
    Image.Group = ImageGroup;
    return Image;
}(React.Component));
export { Image, ImageStyled };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29;
