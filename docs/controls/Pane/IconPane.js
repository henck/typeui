import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
// Other controls
import { Icon } from '../Icon/Icon';
import { Pane } from './Pane';
class IconPane extends React.Component {
    constructor(props) {
        super(props);
        this.handleOpenPane = () => {
            this.setState({
                open: true
            });
        };
        this.handleClosePane = () => {
            this.setState({
                open: false
            });
        };
        this.state = {
            open: false
        };
    }
    render() {
        let p = this.props;
        return (_jsxs(_Fragment, { children: [_jsx(Icon, { name: p.icon, onClick: this.handleOpenPane }), _jsx(Pane, { open: this.state.open, width: p.width, padded: p.padded, onClose: this.handleClosePane, children: p.children })] }));
    }
}
export { IconPane };
