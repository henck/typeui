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
var HarmonyElementBase = /** @class */ (function (_super) {
    __extends(HarmonyElementBase, _super);
    function HarmonyElementBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HarmonyElementBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("div", { className: p.className, onClick: p.onClick, style: { background: p.color } }));
    };
    return HarmonyElementBase;
}(React.Component));
var HarmonyElement = styled(HarmonyElementBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  width: 65px;\n  @media (max-width: ", "px) {\n    width: 40px;\n  } \n  height: 40px;\n  cursor: pointer;\n\n  /* First and last child have rounded borders. */\n  &:first-child {\n    border-top-left-radius: ", "px;\n    border-bottom-left-radius: ", "px;\n  }\n  &:last-child {\n    border-top-right-radius: ", "px;\n    border-bottom-right-radius: ", "px;\n  }\n\n  /* Lift element up when hovered. */\n  z-index: 0;\n  transition: transform ", "s ease;\n  &:hover {\n    z-index: 1;\n    transform: scaleX(1.2) scaleY(1.2);\n  }\n"], ["\n  position: relative;\n  width: 65px;\n  @media (max-width: ", "px) {\n    width: 40px;\n  } \n  height: 40px;\n  cursor: pointer;\n\n  /* First and last child have rounded borders. */\n  &:first-child {\n    border-top-left-radius: ", "px;\n    border-bottom-left-radius: ", "px;\n  }\n  &:last-child {\n    border-top-right-radius: ", "px;\n    border-bottom-right-radius: ", "px;\n  }\n\n  /* Lift element up when hovered. */\n  z-index: 0;\n  transition: transform ", "s ease;\n  &:hover {\n    z-index: 1;\n    transform: scaleX(1.2) scaleY(1.2);\n  }\n"])), function (p) { return p.theme.smallScreen; }, function (p) { return p.theme.radius; }, function (p) { return p.theme.radius; }, function (p) { return p.theme.radius; }, function (p) { return p.theme.radius; }, function (p) { return p.theme.transition.duration; });
export { HarmonyElement };
var templateObject_1;
