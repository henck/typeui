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
import { DMS } from '../../helper/DMS';
function toDMS(value, defaultStr, max, positive, negative) {
    // Convert value to number if it is a string:
    value = typeof value == 'number' ? value : parseFloat(value);
    if (isNaN(value) || value < -max || value > max)
        return defaultStr ? defaultStr : "(no coordinates)";
    var _a = DMS.toDMS(value), d = _a[0], m = _a[1], s = _a[2];
    var ms = m.toString();
    if (ms.length < 2)
        ms = "0" + ms;
    var ss = s.toFixed(0);
    if (ss.length < 2)
        ss = "0" + ss;
    return "".concat(d, "\u00B0 ").concat(ms, "\u2032 ").concat(ss, "\u2033 ").concat(d >= 0 ? positive : negative);
}
var Latitude = /** @class */ (function (_super) {
    __extends(Latitude, _super);
    function Latitude() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Latitude.prototype.render = function () {
        return toDMS(this.props.value, this.props.default, 90, "N", "S");
    };
    return Latitude;
}(React.Component));
var Longitude = /** @class */ (function (_super) {
    __extends(Longitude, _super);
    function Longitude() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Longitude.prototype.render = function () {
        return toDMS(this.props.value, this.props.default, 180, "E", "W");
    };
    return Longitude;
}(React.Component));
export { Latitude, Longitude };
