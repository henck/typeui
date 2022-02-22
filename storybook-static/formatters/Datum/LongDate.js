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
import { format } from 'date-fns';
var LongDate = /** @class */ (function (_super) {
    __extends(LongDate, _super);
    function LongDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LongDate.prototype.render = function () {
        var p = this.props;
        if (p.value == null)
            return null;
        // If date is a string, parse it to a Date.
        var date;
        if (typeof p.value === 'string') {
            date = new Date(p.value);
        }
        else {
            date = p.value;
        }
        return (React.createElement("span", { title: format(date, 'eeee, d MMMM yyyy', p.locale ? { locale: p.locale } : {}) }, format(date, 'eee, d MMMM yyyy', p.locale ? { locale: p.locale } : {})));
    };
    return LongDate;
}(React.Component));
export { LongDate };
