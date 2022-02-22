var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
import styled from '../../styles/Theme';
// Other controls
import { Dialog } from './Dialog';
import { Button } from '../Button/Button';
import { Header } from '../Header/Header';
import { List } from '../List/List';
var Field = styled('span')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-weight: 500;\n"], ["\n  font-weight: 500;\n"])));
var XhrDialog = /** @class */ (function (_super) {
    __extends(XhrDialog, _super);
    function XhrDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    XhrDialog.prototype.getStatusHeader = function () {
        if (this.props.error.response) {
            switch (this.props.error.response.status) {
                case 401: return "Unauthorized";
                case 403: return "Forbidden";
                case 404: return "Resource not found";
                case 405: return "Method not allowed";
                case 418: return "I'm a teapot";
                case 422: return "Validation problems";
                case 500: return "Internal server error";
                case 501: return "Not implemented";
                case 502: return "Bad gateway";
                default: return "Server error";
            }
        }
        else if (this.props.error.request) {
            return this.props.error.message;
        }
        else {
            return "Internal error";
        }
    };
    XhrDialog.prototype.getStatusText = function () {
        if (this.props.error.response) {
            switch (this.props.error.response.status) {
                case 401: return "Your session is not authenticated.";
                case 403: return "You do not have sufficient permissions to execute this operation.";
                case 404: return "The request endpoint could not be found on the server.";
                case 405: return "The database API tried to execute an HTTP method that was disallowed by the server. This may be indicative of a missing route implementation on the server.";
                case 418: return "The server refuses the attempt to brew coffee with teapot.";
                case 422: return "The request could not be validated.";
                case 500: return "The server API encountered an error. This is indicative of a server implementation error.";
                case 501: return "The request method is not supported by the server and cannot be handled. This may be indicative of a missing route implementation on the server.";
                default: return "An error occurred on the server. Please try again later.";
            }
        }
        else if (this.props.error.request) {
            return "There was a problem communicating with the server. Please try again later.";
        }
        else {
            return "There was a problem setting up the request to the server.";
        }
    };
    XhrDialog.prototype.render = function () {
        var p = this.props;
        return (React.createElement(Dialog, { open: p.open, onClose: p.onClose },
            React.createElement(Dialog.Header, null, p.error && this.getStatusHeader()),
            React.createElement(Dialog.Content, null,
                p.error && React.createElement("p", null, this.getStatusText()),
                p.error && p.error.response && p.error.response.status === 422 && p.error.response.data &&
                    React.createElement(React.Fragment, null,
                        React.createElement(Header, { size: "h3" }, "Details"),
                        React.createElement(List, null, Object.keys(p.error.response.data).map(function (key) {
                            return React.createElement(List.Item, { key: key },
                                React.createElement(Field, null, key),
                                React.createElement(List, null, p.error.response.data[key].map(function (error, index) {
                                    return React.createElement(List.Item, { key: index }, error);
                                })));
                        })))),
            React.createElement(Dialog.Footer, null,
                p.onRetry && React.createElement(Button, { primary: true, onClick: p.onRetry }, "Retry"),
                React.createElement(Button, { onClick: p.onClose }, "OK"))));
    };
    return XhrDialog;
}(React.Component));
export { XhrDialog };
var templateObject_1;
