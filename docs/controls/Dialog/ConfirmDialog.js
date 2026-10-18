import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Other controls
import { Button } from '../Button/Button';
import { Dialog } from './Dialog';
const ConfirmDialog = (props) => _jsxs(Dialog, { open: props.open, onClose: props.onClose, children: [_jsx(Dialog.Header, { children: props.title ?? 'Confirmation' }), _jsx(Dialog.Content, { children: props.children }), _jsxs(Dialog.Footer, { children: [_jsx(Button, { negative: true, onClick: props.onConfirm, children: "Yes" }), _jsx(Button, { onClick: props.onClose, children: "No" })] })] });
export { ConfirmDialog };
