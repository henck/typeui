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
import { css } from 'styled-components';
import styled from '../../styles/Theme';
// Helpers
import { modularScale } from '../../helper/SizeHelper';
// Other controls
import { Subheader } from './Subheader';
import { HeaderContent } from './HeaderContent';
import { IconStyled } from '../Icon/Icon';
var HeaderBase = /** @class */ (function (_super) {
    __extends(HeaderBase, _super);
    function HeaderBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderBase.prototype.render = function () {
        // This uses createElement rather than JSX in order to express
        // everything in one line. The HeaderSize attribute is used as
        // the element name.
        return React.createElement(this.props.size, { className: this.props.className, onClick: this.props.onClick }, this.props.children);
    };
    return HeaderBase;
}(React.Component));
/** Convert a HeaderSize to a size class number, i.e.
 *  h1 => 1
 *  h2 => 2
 *  ...
 *  h6 => 6
 */
function sizeToNumber(headerSize) {
    return parseInt(headerSize.substr(-1));
}
/**
 * Determine font-size CSS using Modular Scale Ratio.
 * Absolute-sized headers (the default) use 'rem', while relative-sized
 * headers use 'em'.
 */
function getFontSize(headerSize, relative, base, scaleRatio) {
    var scale = -(sizeToNumber(headerSize) - 1);
    return modularScale(scale, base, scaleRatio) + (relative ? 'em' : 'rem');
}
/**
 * Determine line-height CSS using Modular Scale Ratio.
 */
function getLineHeight(headerSize, relative, base, scaleRatio, heightRatio) {
    var scale = -(sizeToNumber(headerSize) - 1);
    var size = modularScale(scale, base, scaleRatio);
    return size * heightRatio + (relative ? 'em' : 'rem');
}
var HeaderStyled = styled(HeaderBase)(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n  position: relative;\n  /* Items inside header are center-aligned. */\n  display: flex;\n  align-items: center;\n\n  /* font-family: 'Roboto Condensed', sans-serif; */\n  font-size: ", ";\n  line-height: ", ";\n\n  /* Text color */\n  ", "\n  ", "\n  ", ";\n\n  /* Dividing */\n  ", "\n\n  /* Margin: only unattached headers get margin. */\n  ", "\n  ", "\n\n  /* Block */\n  ", "\n\n  /* Attachment and border: */\n  /* Attached headers get a border. */\n  ", "\n\n  /* Floating */\n  ", "\n  ", "      \n\n  /* Add hand cursor for clickable headers. */\n  ", "\n\n  /* Any items contained inside the header get a little \n     margin to offset them from the header text. */\n  & > * {\n    margin-right: 8px;\n  }\n\n  /* Content alignment. */\n  ", "\n  ", "\n  ", "  \n\n  /* Icon: icon emphasis */ \n  ", "\n"], ["\n  position: relative;\n  /* Items inside header are center-aligned. */\n  display: flex;\n  align-items: center;\n\n  /* font-family: 'Roboto Condensed', sans-serif; */\n  font-size: ", ";\n  line-height: ", ";\n\n  /* Text color */\n  ", "\n  ", "\n  ", ";\n\n  /* Dividing */\n  ", "\n\n  /* Margin: only unattached headers get margin. */\n  ", "\n  ", "\n\n  /* Block */\n  ", "\n\n  /* Attachment and border: */\n  /* Attached headers get a border. */\n  ", "\n\n  /* Floating */\n  ", "\n  ", "      \n\n  /* Add hand cursor for clickable headers. */\n  ", "\n\n  /* Any items contained inside the header get a little \n     margin to offset them from the header text. */\n  & > * {\n    margin-right: 8px;\n  }\n\n  /* Content alignment. */\n  ", "\n  ", "\n  ", "  \n\n  /* Icon: icon emphasis */ \n  ", "\n"
    //
    // Header merely exists to wrap styled-component HeaderStyled;
    // this way we can add static class members to Header.
    //
    /**
     * The <Header> component offers sizes h1..h6. The size ratio is determined using the
     * modularScale algorithm. Starting at 1rem (normal text), h6 is the next
     * scale up, h5 the scale after that and so on. The actual scale ratio can be defined in
     * the theme.
     *
     * By default header sizes are in 'rem', but by adding the 'relative' attribute they
     * will be in 'em' and header size will be relative to the header's container's
     * font-size.
     *
     * * 'size' is a mandatory attribute.
     *
     * @example
     * <Header size='h1'>Hello, world</Header>
     *
     * @link https://henck.github.io/typeui/?path=/story/controls-header--properties
     */
])), function (p) { return getFontSize(p.size, p.relative, p.theme.headerBase, p.theme.scaleRatio); }, function (p) { return getLineHeight(p.size, p.relative, p.theme.headerBase, p.theme.scaleRatio, p.theme.heightRatio); }, function (p) { return p.disabled && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["color: #888;"], ["color: #888;"]))); }, function (p) { return !p.disabled && !p.color && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["color: ", ";"], ["color: ", ";"])), p.theme.fontColor); }, function (p) { return !p.disabled && p.color && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["color: ", ";"], ["color: ", ";"])), p.color); }, function (p) { return p.dividing && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["border-bottom: solid 1px rgba(34, 36, 38, 0.15);"], ["border-bottom: solid 1px rgba(34, 36, 38, 0.15);"]))); }, function (p) { return !p.attached && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["margin: 14px 0 14px 0;"], ["margin: 14px 0 14px 0;"]))); }, function (p) { return p.attached && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["margin: 0;"], ["margin: 0;"]))); }, function (p) { return p.block && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    padding: 14px;\n    border: solid 1px rgba(34, 36, 38, 0.15);\n    background: #f0f0f0;\n    border-radius: ", "px;\n  "], ["\n    padding: 14px;\n    border: solid 1px rgba(34, 36, 38, 0.15);\n    background: #f0f0f0;\n    border-radius: ", "px;\n  "])), p.theme.radius); }, function (p) { return p.attached && css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    padding: 14px;\n    border-color: rgba(34, 36, 38, 0.15);\n    border-style: solid;\n    border-left-width: 1px;\n    border-right-width: 1px;\n    /* Middle attached: Only bottom border. */\n    ", "      \n    /* Top attached: Top and bottom border. */\n    ", "\n    /* Botom attached: Only bottom border. */\n    ", "      \n  "], ["\n    padding: 14px;\n    border-color: rgba(34, 36, 38, 0.15);\n    border-style: solid;\n    border-left-width: 1px;\n    border-right-width: 1px;\n    /* Middle attached: Only bottom border. */\n    ", "      \n    /* Top attached: Top and bottom border. */\n    ", "\n    /* Botom attached: Only bottom border. */\n    ", "      \n  "])), p.attached && p.attached !== 'top' && p.attached !== 'bottom' && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n      border-bottom-width: 1px;\n      border-radius: none;\n    "], ["\n      border-bottom-width: 1px;\n      border-radius: none;\n    "]))), p.attached === 'top' && css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n      border-top-width: 1px;\n      border-bottom-width: 1px;\n      border-top-left-radius: ", "px;\n      border-top-right-radius: ", "px;\n    "], ["\n      border-top-width: 1px;\n      border-bottom-width: 1px;\n      border-top-left-radius: ", "px;\n      border-top-right-radius: ", "px;\n    "])), p.theme.radius, p.theme.radius), p.attached === 'bottom' && css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n      border-bottom-width: 1px;\n      border-bottom-left-radius: ", "px;\n      border-bottom-right-radius: ", "px;\n    "], ["\n      border-bottom-width: 1px;\n      border-bottom-left-radius: ", "px;\n      border-bottom-right-radius: ", "px;\n    "])), p.theme.radius, p.theme.radius)); }, function (p) { return p.float === 'left' && css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["float:left;"], ["float:left;"]))); }, function (p) { return p.float === 'right' && css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["float:right;"], ["float:right;"]))); }, function (p) { return p.onClick && css(templateObject_14 || (templateObject_14 = __makeTemplateObject(["cursor:pointer;"], ["cursor:pointer;"]))); }, function (p) { return p.align === 'left' && css(templateObject_15 || (templateObject_15 = __makeTemplateObject(["justify-content:flex-start;"], ["justify-content:flex-start;"]))); }, function (p) { return p.align === 'center' && css(templateObject_16 || (templateObject_16 = __makeTemplateObject(["justify-content:center;"], ["justify-content:center;"]))); }, function (p) { return p.align === 'right' && css(templateObject_17 || (templateObject_17 = __makeTemplateObject(["justify-content:flex-end;"], ["justify-content:flex-end;"]))); }, function (p) { return p.icon && css(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n    flex-direction: column;\n    justify-content: center;\n    ", " {\n      font-size: 250%;\n    }\n  "], ["\n    flex-direction: column;\n    justify-content: center;\n    ", " {\n      font-size: 250%;\n    }\n  "])), IconStyled); });
//
// Header merely exists to wrap styled-component HeaderStyled;
// this way we can add static class members to Header.
//
/**
 * The <Header> component offers sizes h1..h6. The size ratio is determined using the
 * modularScale algorithm. Starting at 1rem (normal text), h6 is the next
 * scale up, h5 the scale after that and so on. The actual scale ratio can be defined in
 * the theme.
 *
 * By default header sizes are in 'rem', but by adding the 'relative' attribute they
 * will be in 'em' and header size will be relative to the header's container's
 * font-size.
 *
 * * 'size' is a mandatory attribute.
 *
 * @example
 * <Header size='h1'>Hello, world</Header>
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-header--properties
 */
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () { return React.createElement(HeaderStyled, __assign({}, _this.props)); };
        return _this;
    }
    /**
     * A header may contain a <Subheader>.
     */
    Header.Subheader = Subheader;
    /**
     * Header.Content is used to group header content (allowing for Subheader).
     */
    Header.Content = HeaderContent;
    return Header;
}(React.Component));
export { Header };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19;
