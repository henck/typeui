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
var DialogBackgroundBase = /** @class */ (function (_super) {
    __extends(DialogBackgroundBase, _super);
    function DialogBackgroundBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DialogBackgroundBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("div", { className: p.className }));
    };
    return DialogBackgroundBase;
}(React.Component));
var DialogBackground = styled(DialogBackgroundBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  z-index: 2000;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background: #000;\n  opacity: 0.5;\n\n  /* CSSTransition classes */\n  &.fade-enter {\n    opacity: 0;\n  }\n  &.fade-enter-active {\n    opacity: 0.5;\n    transition: opacity 0.3s ease;\n  }\n  &.fade-exit {\n    opacity: 0.5;\n  }\n  &.fade-exit-active {\n    opacity: 0;\n    transition: opacity 0.3s ease;\n  }  \n"], ["\n  position: fixed;\n  z-index: 2000;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background: #000;\n  opacity: 0.5;\n\n  /* CSSTransition classes */\n  &.fade-enter {\n    opacity: 0;\n  }\n  &.fade-enter-active {\n    opacity: 0.5;\n    transition: opacity 0.3s ease;\n  }\n  &.fade-exit {\n    opacity: 0.5;\n  }\n  &.fade-exit-active {\n    opacity: 0;\n    transition: opacity 0.3s ease;\n  }  \n"])));
DialogBackground.displayName = "DialogBackground";
export { DialogBackground };
var templateObject_1;
