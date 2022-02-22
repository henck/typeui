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
import { HslColor } from '../../helper/HslColor';
import { RgbColor } from '../../helper/RgbColor';
// Ripple adds "any" to props, thus accepting any prop that 
// it will forward to the element it creates.
var Ripple = /** @class */ (function (_super) {
    __extends(Ripple, _super);
    function Ripple(props) {
        var _this = _super.call(this, props) || this;
        _this.handleMouseDown = function (e) {
            _this.stopAnimation();
            // Determine (x,y) inside element where mouse was pressed,
            // in percentages.
            var rect = _this.ref.current.getBoundingClientRect();
            _this.rippleX = Math.round((e.nativeEvent.clientX - rect.left) * 100 / rect.width);
            _this.rippleY = Math.round((e.nativeEvent.clientY - rect.top) * 100 / rect.height);
            // A small timeout is necessary to allow the subcomponent to 
            // render itself, so that we can pick the current color from it.
            _this.startAnimation();
        };
        _this.stopAnimation = function () {
            _this.animationFrame = 0;
            if (_this.animationID)
                cancelAnimationFrame(_this.animationID);
        };
        _this.startAnimation = function () {
            _this.animationID = requestAnimationFrame(_this.animate);
        };
        _this.easeInOutQuad = function (t) {
            // The functions below are actually in the range t = [0..2],
            // which is why we multiply t by 2 first.
            t = t * 2;
            if (t < 0.5)
                return 2 * t * t;
            if (t < 1.5)
                return -1 + (4 - 2 * t) * t;
            return 2 * (t - 2) * (t - 2);
        };
        _this.animate = function () {
            // Do not animate after component is destroyed.
            if (_this.ref.current === null)
                return;
            // Get the element's original background color.
            var backgroundColor = getComputedStyle(_this.ref.current).backgroundColor;
            // Store HSL version of background color of ripple's element.
            var backgroundHSL = HslColor.FromRgb(RgbColor.FromString(backgroundColor));
            // Calculate lightness increase/decrease from animation frame.
            var lightDiff = _this.easeInOutQuad(_this.animationFrame / 100) * 0.1;
            // If the original element has a lightness of over 50%, then 
            // we ADD the increase, otherwise we subtract it.
            if (backgroundHSL.lightness > 0.5)
                lightDiff = -lightDiff;
            var light = lightDiff + backgroundHSL.lightness;
            // Build HSL for the lightcolor.
            var lightColor = "hsl(".concat(backgroundHSL.hue, ", ").concat(Math.round(backgroundHSL.saturation * 100), "%, ").concat(Math.round(light * 100), "%)");
            // Calculate ripple size from animation frame.
            var rippleSize = _this.animationFrame;
            // Apply ripple background image.
            _this.ref.current.style.backgroundImage =
                "radial-gradient(\n        circle at ".concat(_this.rippleX, "% ").concat(_this.rippleY, "%, \n        ").concat(lightColor, " 0%, \n        ").concat(lightColor, " ").concat(rippleSize, "%, \n        ").concat(backgroundColor, " \n        ").concat(rippleSize, "%, \n        ").concat(backgroundColor, ")");
            // Go to next frame.
            _this.animationFrame += 3;
            // Stop animation when we hit a ripple of 100%.
            if (_this.animationFrame <= 100) {
                requestAnimationFrame(_this.animate);
            }
            else if (_this.animationID) {
                cancelAnimationFrame(_this.animationID);
                _this.animationID = 0;
            }
        };
        _this.ref = React.createRef();
        return _this;
    }
    Ripple.prototype.componentWillUnmount = function () {
        // End animation if it is running.
        this.stopAnimation();
    };
    Ripple.prototype.render = function () {
        var p = __assign(__assign({}, this.props), { ref: this.ref, onMouseDown: this.handleMouseDown });
        return React.createElement(p.type, p, p.children);
    };
    return Ripple;
}(React.Component));
export { Ripple };
