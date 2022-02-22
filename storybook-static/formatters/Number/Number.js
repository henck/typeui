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
var Number = /** @class */ (function (_super) {
    __extends(Number, _super);
    function Number() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Number.prototype.render = function () {
        var p = this.props;
        if (p.value == null)
            return null;
        // Make sure value is a number.
        var val = (typeof p.value === 'string') ? parseFloat(p.value) : p.value;
        // Get number of requested fraction digits:
        var decimals = p.decimals == null || p.decimals == undefined ? 2 : p.decimals;
        // Format number with requested fraction digits:
        return val.toLocaleString(undefined, {
            useGrouping: true,
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
        });
    };
    return Number;
}(React.Component));
export { Number };
