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
var EUI = /** @class */ (function (_super) {
    __extends(EUI, _super);
    function EUI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EUI.prototype.render = function () {
        var p = this.props;
        // Do nothing for null value.
        if (p.value == null)
            return null;
        // If value is a number, convert it to a hex string.
        // If not a number, simply convert to string.
        var val = (typeof p.value === 'number') ? p.value.toString(16) : (p.value + '');
        // Split string into 2-character parts:
        var parts = val.toUpperCase().match(/.{1,2}/g);
        return parts.join('-');
    };
    return EUI;
}(React.Component));
export { EUI };
