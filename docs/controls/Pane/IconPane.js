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
// Other controls
import { Icon } from '../Icon/Icon';
import { Pane } from './Pane';
var IconPane = /** @class */ (function (_super) {
    __extends(IconPane, _super);
    function IconPane(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOpenPane = function () {
            _this.setState({
                open: true
            });
        };
        _this.handleClosePane = function () {
            _this.setState({
                open: false
            });
        };
        _this.state = {
            open: false
        };
        return _this;
    }
    IconPane.prototype.render = function () {
        var p = this.props;
        return (React.createElement(React.Fragment, null,
            React.createElement(Icon, { name: p.icon, onClick: this.handleOpenPane }),
            React.createElement(Pane, { open: this.state.open, width: p.width, padded: p.padded, onClose: this.handleClosePane }, p.children)));
    };
    return IconPane;
}(React.Component));
export { IconPane };
