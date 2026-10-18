import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Other controls
import { Button } from '../Button/Button';
import { Dialog } from './Dialog';
const AlertDialog = (props) => _jsxs(Dialog, { open: props.open, onClose: props.onClose, children: [_jsx(Dialog.Header, { children: props.title ?? 'Alert' }), _jsx(Dialog.Content, { children: props.children }), _jsx(Dialog.Footer, { children: _jsx(Button, { onClick: props.onClose, children: "OK" }) })] });
export { AlertDialog };
