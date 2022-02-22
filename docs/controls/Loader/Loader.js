var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
import * as React from 'react';
import styled from '../../styles/Theme';
import { keyframes } from 'styled-components';
var scaleDelay = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0%, 70%, 100% {\n    transform: scale3D(1, 1, 1);\n  } 35% {\n    transform: scale3D(0, 0, 1); \n  }\n"], ["\n  0%, 70%, 100% {\n    transform: scale3D(1, 1, 1);\n  } 35% {\n    transform: scale3D(0, 0, 1); \n  }\n"])));
var Shader = styled('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 999;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background: #000;\n  opacity: 0.6;\n"], ["\n  position: absolute;\n  z-index: 999;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background: #000;\n  opacity: 0.6;\n"])));
var Grid = styled('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 1000;\n  left: 50%;\n  top: 50%;\n  margin-left: -20px;\n  margin-top: -20px;\n  width: 40px;\n  height: 40px;\n  background: transparent;\n"], ["\n  position: absolute;\n  z-index: 1000;\n  left: 50%;\n  top: 50%;\n  margin-left: -20px;\n  margin-top: -20px;\n  width: 40px;\n  height: 40px;\n  background: transparent;\n"])));
var Cube = styled('div')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 33%;\n  height: 33%;\n  background-color: #fff;\n  float: left;\n  animation: ", " 1.3s infinite ease-in-out;\n  &:nth-child(1) { animation-delay: 0.2s; }\n  &:nth-child(2) { animation-delay: 0.3s; }\n  &:nth-child(3) { animation-delay: 0.4s; }\n  &:nth-child(4) { animation-delay: 0.1s; }\n  &:nth-child(5) { animation-delay: 0.2s; }\n  &:nth-child(6) { animation-delay: 0.3s; }\n  &:nth-child(7) { animation-delay: 0.0s; }\n  &:nth-child(8) { animation-delay: 0.1s; }\n  &:nth-child(9) { animation-delay: 0.2s; }  \n"], ["\n  width: 33%;\n  height: 33%;\n  background-color: #fff;\n  float: left;\n  animation: ", " 1.3s infinite ease-in-out;\n  &:nth-child(1) { animation-delay: 0.2s; }\n  &:nth-child(2) { animation-delay: 0.3s; }\n  &:nth-child(3) { animation-delay: 0.4s; }\n  &:nth-child(4) { animation-delay: 0.1s; }\n  &:nth-child(5) { animation-delay: 0.2s; }\n  &:nth-child(6) { animation-delay: 0.3s; }\n  &:nth-child(7) { animation-delay: 0.0s; }\n  &:nth-child(8) { animation-delay: 0.1s; }\n  &:nth-child(9) { animation-delay: 0.2s; }  \n"])), scaleDelay);
var LoaderBase = /** @class */ (function (_super) {
    __extends(LoaderBase, _super);
    function LoaderBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoaderBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("div", { className: p.className },
            React.createElement(Shader, null),
            React.createElement(Grid, null, Array(9).fill(0).map(function (v, i) { return (React.createElement(Cube, { key: i })); }))));
    };
    return LoaderBase;
}(React.Component));
/**
 * A Loader projects a loading animation over the entire screen.
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-loader-types--loader
 */
var Loader = styled(LoaderBase)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n"], ["\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n"])));
Loader.displayName = 'Loader';
export { Loader };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
