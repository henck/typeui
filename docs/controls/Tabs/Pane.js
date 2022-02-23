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
var PaneBase = /** @class */ (function (_super) {
    __extends(PaneBase, _super);
    function PaneBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.shouldRender = function () {
            return !_this.props.nohiddenrender || _this.props.active;
        };
        return _this;
    }
    PaneBase.prototype.render = function () {
        var p = this.props;
        // By default, all children are rendered (but hidden when
        // not active). With nohiddenrender enabled, only the active
        // tab is rendered.
        return (React.createElement("div", { className: p.className }, this.shouldRender() ? p.children : null));
    };
    return PaneBase;
}(React.Component));
var PaneStyled = styled(PaneBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  display: ", ";\n  height: 100%;\n"], ["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  display: ", ";\n  height: 100%;\n"])), function (p) { return !p.active ? 'none' : ''; });
var Pane = /** @class */ (function (_super) {
    __extends(Pane, _super);
    function Pane() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () { return React.createElement(PaneStyled, __assign({}, _this.props)); };
        return _this;
    }
    return Pane;
}(React.Component));
export { Pane };
var templateObject_1;
