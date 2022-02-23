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
import { Slice } from './Slice';
var DEFAULT_RADIUS = 100;
var INNER_RADIUS_RATIO = 5;
var CircleBase = /** @class */ (function (_super) {
    __extends(CircleBase, _super);
    function CircleBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (index) {
            if (_this.props.onClick)
                _this.props.onClick(index);
        };
        return _this;
    }
    CircleBase.prototype.render = function () {
        var _this = this;
        var p = this.props;
        var count = React.Children.count(p.children);
        // Angle size of a single slice
        var sliceSize = 360 / count;
        return (React.createElement("div", { className: p.className },
            React.createElement("div", null, React.Children.map(p.children, function (c, index) {
                return React.createElement(Slice, { color: p.color ? p.color : '#333', radius: p.radius ? p.radius : DEFAULT_RADIUS, index: index, onClick: _this.handleClick, angleBody: sliceSize, angleOffset: index * sliceSize }, c);
            })),
            React.createElement("div", null)));
    };
    return CircleBase;
}(React.Component));
var CircleStyled = styled(CircleBase).attrs(function (p) { return ({
    outerRadius: p.radius ? p.radius : DEFAULT_RADIUS,
    innerRadius: p.radius ? p.radius / INNER_RADIUS_RATIO : DEFAULT_RADIUS / INNER_RADIUS_RATIO
}); })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  /* Outer circle with slices */\n  & > div:nth-child(1) {\n    position: relative;\n    width: ", ";\n    height: ", ";\n    background: #eee;\n    border-radius: 50%;\n    overflow: hidden;\n    box-shadow: rgba(34, 36, 38, 0.15) 0px 0px 3px 3px;\n  }\n  /* Inner circle */\n  & > div:nth-child(2) {\n    position: absolute;\n    left: ", ";\n    top: ", ";\n    width: ", ";\n    height: ", ";\n    background: #fff;\n    border-radius: 50%;\n    box-shadow: inset rgba(34, 36, 38, 0.15) 0px 0px 3px 3px;\n  }\n"], ["\n  position: relative;\n  /* Outer circle with slices */\n  & > div:nth-child(1) {\n    position: relative;\n    width: ", ";\n    height: ", ";\n    background: #eee;\n    border-radius: 50%;\n    overflow: hidden;\n    box-shadow: rgba(34, 36, 38, 0.15) 0px 0px 3px 3px;\n  }\n  /* Inner circle */\n  & > div:nth-child(2) {\n    position: absolute;\n    left: ", ";\n    top: ", ";\n    width: ", ";\n    height: ", ";\n    background: #fff;\n    border-radius: 50%;\n    box-shadow: inset rgba(34, 36, 38, 0.15) 0px 0px 3px 3px;\n  }\n"])), function (p) { return p.outerRadius * 2 + 'px'; }, function (p) { return p.outerRadius * 2 + 'px'; }, function (p) { return p.outerRadius - p.innerRadius + 'px'; }, function (p) { return p.outerRadius - p.innerRadius + 'px'; }, function (p) { return p.innerRadius * 2 + 'px'; }, function (p) { return p.innerRadius * 2 + 'px'; });
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () { return React.createElement(CircleStyled, __assign({}, _this.props)); };
        return _this;
    }
    return Circle;
}(React.Component));
export { Circle };
var templateObject_1;
