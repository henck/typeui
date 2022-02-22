var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
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
import { css } from 'styled-components';
import styled from '../../../styles/Theme';
var ArrowBase = /** @class */ (function (_super) {
    __extends(ArrowBase, _super);
    function ArrowBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArrowBase.prototype.render = function () {
        var p = this.props;
        return React.createElement("div", { className: p.className },
            React.createElement(Line, null,
                React.createElement(Selector, null)));
    };
    return ArrowBase;
}(React.Component));
var Selector = styled('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  top: -12.5px;\n  right: -12.5px;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background: ", ";\n  /* White circle in center of selector */\n  &:after {\n    content: \"\";\n    position: absolute;\n    left: calc(50% - 1px);\n    top: calc(50% - 1px);\n    width: 3px;\n    height: 3px;\n    border-radius: 50%;\n    background: #fff;\n  }\n"], ["\n  position: absolute;\n  top: -12.5px;\n  right: -12.5px;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background: ", ";\n  /* White circle in center of selector */\n  &:after {\n    content: \"\";\n    position: absolute;\n    left: calc(50% - 1px);\n    top: calc(50% - 1px);\n    width: 3px;\n    height: 3px;\n    border-radius: 50%;\n    background: #fff;\n  }\n"])), function (p) { return p.theme.primaryColor; });
var Arrow = styled(ArrowBase)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  left: calc(25% + 1px);\n  top: 25%;\n  width: 50%;\n  height: 50%;\n  background: ", ";\n  border-radius: 50%;\n  transform-origin: 50% 50%;\n  transition: transform ", "s ease;\n  transform: rotateZ(", "deg);\n  /* If a number is currently selected, hide the disc in the middle\n   * of the selector. */\n  ", "\n"], ["\n  position: absolute;\n  left: calc(25% + 1px);\n  top: 25%;\n  width: 50%;\n  height: 50%;\n  background: ", ";\n  border-radius: 50%;\n  transform-origin: 50% 50%;\n  transition: transform ", "s ease;\n  transform: rotateZ(", "deg);\n  /* If a number is currently selected, hide the disc in the middle\n   * of the selector. */\n  ",
    "\n"])), function (p) { return p.theme.normalColor; }, function (p) { return p.animation ? 0.2 : 0; }, function (p) { return p.deg - 90; }, function (p) { return p.deg % 30 == 0 && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    ", " {\n      &:after {\n        display: none;\n      }\n    }\n  "], ["\n    ", " {\n      &:after {\n        display: none;\n      }\n    }\n  "])), Selector); });
var Line = styled('div')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 80%;\n  height: 0;\n  &:after {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: -0.5px;\n    width: 100%;\n    height: 1px;\n    background: ", "\n  }\n"], ["\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 80%;\n  height: 0;\n  &:after {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: -0.5px;\n    width: 100%;\n    height: 1px;\n    background: ", "\n  }\n"])), function (p) { return p.theme.primaryColor; });
export { Arrow };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
