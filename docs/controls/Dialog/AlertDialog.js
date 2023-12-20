import * as React from 'react';
// Other controls
import { Button } from '../Button/Button';
import { Dialog } from './Dialog';
var AlertDialog = function (props) {
    var _a;
    return React.createElement(Dialog, { open: props.open, onClose: props.onClose },
        React.createElement(Dialog.Header, null, (_a = props.title) !== null && _a !== void 0 ? _a : 'Alert'),
        React.createElement(Dialog.Content, null, props.children),
        React.createElement(Dialog.Footer, null,
            React.createElement(Button, { onClick: props.onClose }, "OK")));
};
export { AlertDialog };
