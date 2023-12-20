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
/**
 * Human takes a value prop and renders it in a human-readable way.
 *
 * E.g. 10000 => 10K
 */
var Human = /** @class */ (function (_super) {
    __extends(Human, _super);
    function Human() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** Convert number to size string (K, M, G etc.) */
        _this.humanFileSize = function (value) {
            var thresh = 1000;
            if (Math.abs(value) < thresh) {
                return value.toFixed(0);
            }
            var units = ['K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
            var u = -1;
            do {
                value /= thresh;
                ++u;
            } while (Math.abs(value) >= thresh && u < units.length - 1);
            return (+value).toFixed(2) + units[u];
        };
        return _this;
    }
    Human.prototype.render = function () {
        var p = this.props;
        if (p.value == null)
            return null;
        // Make sure value is a number.
        var val = (typeof p.value === 'string') ? parseFloat(p.value) : p.value;
        return this.humanFileSize(val);
    };
    return Human;
}(React.Component));
export { Human };
