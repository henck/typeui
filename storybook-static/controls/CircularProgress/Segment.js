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
var SegmentBase = /** @class */ (function (_super) {
    __extends(SegmentBase, _super);
    function SegmentBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SegmentBase.prototype.render = function () {
        return React.createElement("div", { className: this.props.className });
    };
    return SegmentBase;
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
var Segment = styled(SegmentBase).attrs(function (p) { return ({
    skew: (90 - p.angleBody),
}); })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  top: 50%; left: 50%;          /* Rectangle is placed at center of parent circle */\n  width: 100vw; height: 100vw;  /* Extremely large rectangle fills any circle size */\n  \n  background: ", ";\n  \n  transform: rotate(", "deg) skew(", "deg);\n  /* Transform around top-left corner of rectangle */\n  transform-origin: 0 0;\n"], ["\n  position: absolute;\n  top: 50%; left: 50%;          /* Rectangle is placed at center of parent circle */\n  width: 100vw; height: 100vw;  /* Extremely large rectangle fills any circle size */\n  \n  background: ", ";\n  \n  transform: rotate(", "deg) skew(", "deg);\n  /* Transform around top-left corner of rectangle */\n  transform-origin: 0 0;\n"])), function (p) { return p.color ? p.color : p.theme.primaryColor; }, function (p) { return p.angleOffset - 90; }, function (p) { return p.skew; });
export { Segment };
var templateObject_1;
