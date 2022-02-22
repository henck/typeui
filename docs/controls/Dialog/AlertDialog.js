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
import { Button } from '../Button/Button';
import { Dialog } from './Dialog';
var AlertDialog = /** @class */ (function (_super) {
    __extends(AlertDialog, _super);
    function AlertDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AlertDialog.prototype.render = function () {
        var p = this.props;
        return (React.createElement(Dialog, { open: p.open, onClose: p.onClose },
            React.createElement(Dialog.Header, null, p.title ? p.title : 'Alert'),
            React.createElement(Dialog.Content, null, p.children),
            React.createElement(Dialog.Footer, null,
                React.createElement(Button, { onClick: p.onClose }, "OK"))));
    };
    return AlertDialog;
}(React.Component));
export { AlertDialog };
