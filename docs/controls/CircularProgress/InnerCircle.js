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
import { css } from 'styled-components';
var InnerCircleBase = /** @class */ (function (_super) {
    __extends(InnerCircleBase, _super);
    function InnerCircleBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InnerCircleBase.prototype.render = function () {
        return React.createElement("div", { className: this.props.className });
    };
    return InnerCircleBase;
}(React.Component));
/**
 * Inner circle hides segment centers, and provides a place to show the percentage number.
 */
var InnerCircle = styled(InnerCircleBase)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: ", "px;\n  height: ", "px;\n  transform: translateX(-50%) translateY(-50%);\n  background: #fff;\n  border-radius: 50%;\n  ", ";\n"], ["\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: ", "px;\n  height: ", "px;\n  transform: translateX(-50%) translateY(-50%);\n  background: #fff;\n  border-radius: 50%;\n  ", ";\n"])), function (p) { return p.radius * 2; }, function (p) { return p.radius * 2; }, function (p) { return p.raised && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["box-shadow: inset rgba(34, 36, 38, 0.15) 0px 0px 3px 2px"], ["box-shadow: inset rgba(34, 36, 38, 0.15) 0px 0px 3px 2px"]))); });
export { InnerCircle };
var templateObject_1, templateObject_2;
