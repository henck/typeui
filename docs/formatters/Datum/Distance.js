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
import { format, formatDistanceToNow, formatDistanceToNowStrict } from 'date-fns';
var DistanceDate = /** @class */ (function (_super) {
    __extends(DistanceDate, _super);
    function DistanceDate(props) {
        var _this = _super.call(this, props) || this;
        _this.update = function () {
            // Force the component to rerender by updating its state.
            _this.setState({
                timestamp: Date.now()
            });
        };
        _this.state = { timestamp: 0 };
        return _this;
    }
    DistanceDate.prototype.componentDidMount = function () {
        // Create an interval every second.
        this.interval = window.setInterval(this.update, 1000);
    };
    DistanceDate.prototype.componentWillUnmount = function () {
        // Clear the interval timer before unmounting.
        clearInterval(this.interval);
    };
    DistanceDate.prototype.render = function () {
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
        var options = {
            includeSeconds: true,
            addSuffix: true // Add "ago"
        };
        if (p.locale)
            options.locale = p.locale;
        return (React.createElement("span", { title: format(date, 'eeee, d MMMM yyyy', p.locale ? { locale: p.locale } : {}) }, p.strict ? formatDistanceToNowStrict(date, options) : formatDistanceToNow(date, options)));
    };
    return DistanceDate;
}(React.Component));
export { DistanceDate };
