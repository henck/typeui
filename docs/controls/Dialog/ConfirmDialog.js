import * as React from 'react';
// Other controls
import { Button } from '../Button/Button';
import { Dialog } from './Dialog';
var ConfirmDialog = function (props) {
    var _a;
    return React.createElement(Dialog, { open: props.open, onClose: props.onClose },
        React.createElement(Dialog.Header, null, (_a = props.title) !== null && _a !== void 0 ? _a : 'Confirmation'),
        React.createElement(Dialog.Content, null, props.children),
        React.createElement(Dialog.Footer, null,
            React.createElement(Button, { negative: true, onClick: props.onConfirm }, "Yes"),
            React.createElement(Button, { onClick: props.onClose }, "No")));
};
export { ConfirmDialog };
