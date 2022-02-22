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
// Other controls
import { Icon } from '../Icon/Icon';
import { Panel } from './Panel';
var IconPanel = /** @class */ (function (_super) {
    __extends(IconPanel, _super);
    function IconPanel(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOpenPanel = function () {
            _this.setState({
                open: true
            });
        };
        _this.handleClosePanel = function () {
            _this.setState({
                open: false
            });
        };
        _this.state = {
            open: false
        };
        return _this;
    }
    IconPanel.prototype.render = function () {
        var p = this.props;
        var icon = null;
        // An icon can be passed either as an IconType...
        if (typeof p.icon === "string") {
            icon = (React.createElement(Icon, { name: p.icon, onClick: this.handleOpenPanel }));
        }
        // ... or as IIconProps.
        else if (p.icon != null) {
            icon = (React.createElement(Icon, __assign({}, p.icon, { onClick: this.handleOpenPanel })));
        }
        return (React.createElement(React.Fragment, null,
            icon,
            React.createElement(Panel, { open: this.state.open, width: p.width, padded: p.padded, onClose: this.handleClosePanel }, p.children)));
    };
    return IconPanel;
}(React.Component));
export { IconPanel };
