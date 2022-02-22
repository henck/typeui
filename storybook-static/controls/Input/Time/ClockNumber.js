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
/**
 * A ClockNumber is a number on the face of the clock.
 */
var ClockNumberBase = /** @class */ (function (_super) {
    __extends(ClockNumberBase, _super);
    function ClockNumberBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () {
            var p = _this.props;
            return (React.createElement("div", { className: p.className },
                React.createElement(ClockValue, null, p.value)));
        };
        return _this;
    }
    return ClockNumberBase;
}(React.Component));
/**
 * Actual value of clock number
 */
var ClockValue = styled('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var ClockNumber = styled(ClockNumberBase).attrs(function (p) { return ({
    // Position clock number in the center, then at 40% offset of total clock size
    // (this is in percentage)
    left: 50 + Math.cos((p.degrees - 90) * Math.PI / 180) * 40,
    top: 50 + Math.sin((p.degrees - 90) * Math.PI / 180) * 40,
    // The "3" and the "9" are slightly offset. Fix this:
    yFix: ((p.degrees >= 88 && p.degrees <= 92) || (p.degrees >= 268 && p.degrees <= 272)) ? 1 : 0
}); })(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  left:     calc(", "% + ", "px);\n  top:      calc(", "% + ", "px);\n  ", " {\n    position:    absolute;\n    left:        -12.5px;\n    top:         -0.6em;\n    width:       25px;\n    height:      1.2em;\n    line-height: 1.2em;\n    text-align:  center;\n    user-select: none;\n    transform-origin: 50% 50%;\n    transition:  transform ", "s ease; \n    color:       ", ";\n    font-weight: ", ";\n    transform:   scaleX(", ") scaleY(", ");\n  }\n"], ["\n  position: absolute;\n  left:     calc(", "% + ", "px);\n  top:      calc(", "% + ", "px);\n  ", " {\n    position:    absolute;\n    left:        -12.5px;\n    top:         -0.6em;\n    width:       25px;\n    height:      1.2em;\n    line-height: 1.2em;\n    text-align:  center;\n    user-select: none;\n    transform-origin: 50% 50%;\n    transition:  transform ", "s ease; \n    color:       ", ";\n    font-weight: ", ";\n    transform:   scaleX(", ") scaleY(", ");\n  }\n"])), function (p) { return p.left; }, function (p) { return p.yFix; }, function (p) { return p.top; }, function (p) { return p.yFix; }, ClockValue, function (p) { return p.theme.transition.duration; }, function (p) { return p.active ? 'white' : 'inherit'; }, function (p) { return p.active ? 500 : 'inherit'; }, function (p) { return p.active ? 1.2 : 1; }, function (p) { return p.active ? 1.2 : 1; });
export { ClockNumber };
var templateObject_1, templateObject_2;
