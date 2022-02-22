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
// Helpers
import { lighten } from '../../helper/lighten';
var SliceBase = /** @class */ (function (_super) {
    __extends(SliceBase, _super);
    function SliceBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SliceBase.prototype.render = function () {
        var _this = this;
        var p = this.props;
        return (React.createElement("div", { className: p.className },
            React.createElement("div", { onClick: function () { return _this.props.onClick(_this.props.index); } },
                React.createElement("div", null,
                    React.createElement("div", null,
                        React.createElement("div", null, p.children))))));
    };
    return SliceBase;
}(React.Component));
// 120 => skew -30
// 100 => skew -10
// 90  => skew 0
// 80  => skew 10
// 70  => skew 20
// 60  => skew 30
// 50  => skew 40
// 
// ==> 90 - angle
var SliceStyled = styled(SliceBase).attrs(function (p) { return ({
    skew: (90 - p.angleBody),
    rad: (p.angleOffset - 90 + p.angleBody / 2) * Math.PI / 180
}); })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* slice */\n  & > div {\n    position: absolute;\n    z-index: 0;\n    top: 50%; left: 50%;          /* Rectangle is placed at center of parent circle */\n    width: 100vw; height: 100vw;  /* Extremely large rectangle fills any circle size */\n    \n    background: ", ";\n    transform: rotate(", "deg) skew(", "deg);\n    /* Transform around top-left corner of rectangle */\n    transform-origin: 0 0;\n    border: solid 1px #fff;\n    &:hover {\n      background: ", ";\n      transform: rotate(", "deg) skew(", "deg) scaleX(1.1) scaleY(1.1);\n      box-shadow: inset 0px 0px 0px 1px #111;\n      transition: all ", "s;\n    }\n    overflow: hidden;\n    cursor: pointer;\n    /* move content */\n    & > div {\n      position: absolute;\n      left: ", "px;\n      top: ", "px;\n      /* untransform */\n      & > div {\n        position: absolute;\n        transform: skew(", "deg) rotate(", "deg);\n        /* retransform */\n        & > div {\n          position: absolute;\n          transform: translateX(-50%) translateY(-50%) rotate(", "deg);\n          user-select: none;\n          color: #fff;\n          text-align: center;\n        }\n      }\n    }\n  }\n"], ["\n  /* slice */\n  & > div {\n    position: absolute;\n    z-index: 0;\n    top: 50%; left: 50%;          /* Rectangle is placed at center of parent circle */\n    width: 100vw; height: 100vw;  /* Extremely large rectangle fills any circle size */\n    \n    background: ", ";\n    transform: rotate(", "deg) skew(", "deg);\n    /* Transform around top-left corner of rectangle */\n    transform-origin: 0 0;\n    border: solid 1px #fff;\n    &:hover {\n      background: ", ";\n      transform: rotate(", "deg) skew(", "deg) scaleX(1.1) scaleY(1.1);\n      box-shadow: inset 0px 0px 0px 1px #111;\n      transition: all ", "s;\n    }\n    overflow: hidden;\n    cursor: pointer;\n    /* move content */\n    & > div {\n      position: absolute;\n      left: ", "px;\n      top: ", "px;\n      /* untransform */\n      & > div {\n        position: absolute;\n        transform: skew(", "deg) rotate(", "deg);\n        /* retransform */\n        & > div {\n          position: absolute;\n          transform: translateX(-50%) translateY(-50%) rotate(", "deg);\n          user-select: none;\n          color: #fff;\n          text-align: center;\n        }\n      }\n    }\n  }\n"])), function (p) { return p.color; }, function (p) { return p.angleOffset - 90; }, function (p) { return p.skew; }, function (p) { return lighten(0.1, p.color); }, function (p) { return p.angleOffset - 90; }, function (p) { return p.skew; }, function (p) { return p.theme.transition.duration; }, function (p) { return p.radius / 3; }, function (p) { return p.radius / 3; }, function (p) { return -p.skew; }, function (p) { return 90 - p.angleOffset; }, function (p) { return p.angleOffset + p.angleBody / 2; });
var Slice = /** @class */ (function (_super) {
    __extends(Slice, _super);
    function Slice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Slice.prototype.render = function () {
        return (React.createElement(SliceStyled, __assign({}, this.props)));
    };
    Slice.displayName = 'Slice';
    return Slice;
}(React.Component));
export { Slice };
var templateObject_1;
