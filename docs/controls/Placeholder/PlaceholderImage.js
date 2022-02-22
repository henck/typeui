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
var PlaceholderImageBase = /** @class */ (function (_super) {
    __extends(PlaceholderImageBase, _super);
    function PlaceholderImageBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlaceholderImageBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("div", { className: p.className }));
    };
    return PlaceholderImageBase;
}(React.Component));
var PlaceholderImageStyled = styled(PlaceholderImageBase)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n  ", "\n  background: transparent;\n"], ["\n  ", "\n  ", "\n  background: transparent;\n"])), function (p) { return p.rectangular && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["padding-bottom: 75%;"], ["padding-bottom: 75%;"]))); }, function (p) { return !p.rectangular && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["padding-bottom: 100%;"], ["padding-bottom: 100%;"]))); });
var PlaceholderImage = /** @class */ (function (_super) {
    __extends(PlaceholderImage, _super);
    function PlaceholderImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlaceholderImage.prototype.render = function () {
        var p = this.props;
        return (React.createElement(PlaceholderImageStyled, __assign({}, p)));
    };
    return PlaceholderImage;
}(React.Component));
export { PlaceholderImage };
var templateObject_1, templateObject_2, templateObject_3;
