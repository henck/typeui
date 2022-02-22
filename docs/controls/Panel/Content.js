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
var ContentBase = /** @class */ (function (_super) {
    __extends(ContentBase, _super);
    function ContentBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContentBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("div", { className: p.className }, p.children));
    };
    return ContentBase;
}(React.Component));
var ContentStyled = styled(ContentBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  padding: 14px;\n  &:first-child {\n    border-top-left-radius: ", "px;\n    border-top-right-radius: ", "px;    \n  }\n  &:not(:last-child) {\n    border-bottom: solid 1px ", ";\n  }\n"], ["\n  position: relative;\n  padding: 14px;\n  &:first-child {\n    border-top-left-radius: ", "px;\n    border-top-right-radius: ", "px;    \n  }\n  &:not(:last-child) {\n    border-bottom: solid 1px ", ";\n  }\n"])), function (p) { return p.theme.radius; }, function (p) { return p.theme.radius; }, function (p) { return p.theme.normalColor; });
var Content = /** @class */ (function (_super) {
    __extends(Content, _super);
    function Content() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Content.prototype.render = function () {
        return (React.createElement(ContentStyled, __assign({}, this.props)));
    };
    return Content;
}(React.Component));
export { Content };
var templateObject_1;
