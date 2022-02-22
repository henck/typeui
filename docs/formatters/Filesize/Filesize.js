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
 * Filesize takes a size prop (in bytes) and renders
 * a human-readable filesize string.
 *
 * E.g. 10000 => 10.0 kB
 */
var Filesize = /** @class */ (function (_super) {
    __extends(Filesize, _super);
    function Filesize() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** Convert bytes to size string (kB, MB, GB etc.) */
        _this.humanFileSize = function (bytes, unit) {
            var thresh = unit == 'si' ? 1000 : 1024;
            if (Math.abs(bytes) < thresh) {
                return bytes + ' B';
            }
            var units = unit == 'si'
                ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
                : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
            var u = -1;
            do {
                bytes /= thresh;
                ++u;
            } while (Math.abs(bytes) >= thresh && u < units.length - 1);
            return bytes.toFixed(2) + ' ' + units[u];
        };
        return _this;
    }
    Filesize.prototype.render = function () {
        var p = this.props;
        if (p.value == null)
            return null;
        // Make sure value is a number.
        var val = (typeof p.value === 'string') ? parseFloat(p.value) : p.value;
        return this.humanFileSize(val, p.unit ? p.unit : 'si');
    };
    return Filesize;
}(React.Component));
export { Filesize };
