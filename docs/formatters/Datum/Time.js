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
import { format, parse } from 'date-fns';
var Time = /** @class */ (function (_super) {
    __extends(Time, _super);
    function Time() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Time.prototype.render = function () {
        var p = this.props;
        if (p.value == null)
            return null;
        // If date is a string, parse it to a Date.
        var date;
        if (typeof p.value === 'string') {
            date = parse(p.value, 'HH:mm:ss', new Date());
        }
        else {
            date = p.value;
        }
        return (React.createElement("span", { title: format(date, 'HH:mm:ss') }, format(date, 'HH:mm' + (p.seconds ? ":ss" : ""))));
    };
    return Time;
}(React.Component));
export { Time };
