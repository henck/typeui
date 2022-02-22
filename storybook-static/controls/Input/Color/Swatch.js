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
import styled from '../../../styles/Theme';
var SwatchBase = /** @class */ (function (_super) {
    __extends(SwatchBase, _super);
    function SwatchBase(props) {
        return _super.call(this, props) || this;
    }
    SwatchBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("div", { className: p.className },
            React.createElement("div", { onClick: this.props.onClick }),
            React.createElement("svg", { onClick: this.props.onToggle },
                React.createElement("use", { xlinkHref: "spritemap.svg#".concat(p.locked ? 'lock' : 'unlock') }))));
    };
    return SwatchBase;
}(React.Component));
var Swatch = styled(SwatchBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  width: 50px;\n  align-items: center;\n  margin-bottom: 4px;\n\n  & > div {\n    width: 30px;\n    height: 24px;\n    background-color: ", ";\n    border-radius: ", "px;\n    margin-right: 4px;\n    cursor: pointer;\n    transition: transform ", "s ease;\n    &:hover {\n      transform: scaleX(1.2) scaleY(1.2);\n    }\n  }\n\n  svg {\n    fill: ", ";\n    width:  13px;\n    height: 13px;\n    cursor: pointer;\n    transition: transform ", "s ease;\n    &:hover {\n      transform: scaleX(1.2) scaleY(1.2);\n    }\n  }\n"], ["\n  position: relative;\n  display: flex;\n  width: 50px;\n  align-items: center;\n  margin-bottom: 4px;\n\n  & > div {\n    width: 30px;\n    height: 24px;\n    background-color: ", ";\n    border-radius: ", "px;\n    margin-right: 4px;\n    cursor: pointer;\n    transition: transform ", "s ease;\n    &:hover {\n      transform: scaleX(1.2) scaleY(1.2);\n    }\n  }\n\n  svg {\n    fill: ", ";\n    width:  13px;\n    height: 13px;\n    cursor: pointer;\n    transition: transform ", "s ease;\n    &:hover {\n      transform: scaleX(1.2) scaleY(1.2);\n    }\n  }\n"])), function (p) { return p.color; }, function (p) { return p.theme.radius; }, function (p) { return p.theme.transition.duration; }, function (p) { return p.locked ? p.theme.fontColor : p.theme.normalColor; }, function (p) { return p.theme.transition.duration; });
export { Swatch };
var templateObject_1;
