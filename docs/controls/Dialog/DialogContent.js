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
var DialogContentBase = /** @class */ (function (_super) {
    __extends(DialogContentBase, _super);
    function DialogContentBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DialogContentBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("div", { className: p.className }, p.children));
    };
    return DialogContentBase;
}(React.Component));
var DialogContentStyled = styled(DialogContentBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  padding: 20px 20px 20px 20px;\n  max-height: 70vh;\n  overflow-y: auto;  \n"], ["\n  position: relative;\n  padding: 20px 20px 20px 20px;\n  max-height: 70vh;\n  overflow-y: auto;  \n"])));
var DialogContent = /** @class */ (function (_super) {
    __extends(DialogContent, _super);
    function DialogContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DialogContent.prototype.render = function () {
        var p = this.props;
        return (React.createElement(DialogContentStyled, __assign({}, p)));
    };
    DialogContent.displayName = "Dialog.Content";
    return DialogContent;
}(React.Component));
export { DialogContent };
var templateObject_1;
