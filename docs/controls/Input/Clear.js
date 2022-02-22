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
var ClearBase = /** @class */ (function (_super) {
    __extends(ClearBase, _super);
    function ClearBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (e) {
            // Stop propagation, or color/date controls will open on click.
            e.stopPropagation();
            _this.props.onClick();
        };
        return _this;
    }
    ClearBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("svg", { className: p.className, onClick: this.handleClick },
            React.createElement("use", { xlinkHref: "spritemap.svg#times" })));
    };
    return ClearBase;
}(React.Component));
var Clear = styled(ClearBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 1;\n  right: 15px;\n  top: 10px;\n  width: 17px;\n  height: 17px;\n  cursor: pointer;\n  fill: #888;\n  &:hover {\n    fill: ", ";\n  }\n"], ["\n  position: absolute;\n  z-index: 1;\n  right: 15px;\n  top: 10px;\n  width: 17px;\n  height: 17px;\n  cursor: pointer;\n  fill: #888;\n  &:hover {\n    fill: ", ";\n  }\n"])), function (p) { return p.theme.fontColor; });
export { Clear };
var templateObject_1;
