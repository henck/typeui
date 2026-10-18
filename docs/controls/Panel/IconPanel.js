import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
// Other controls
import { Icon } from '../Icon/Icon';
import { Panel } from './Panel';
class IconPanel extends React.Component {
    constructor(props) {
        super(props);
        this.handleOpenPanel = () => {
            this.setState({
                open: true
            });
        };
        this.handleClosePanel = () => {
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
        let icon = null;
        // An icon can be passed either as an IconType...
        if (typeof p.icon === "string") {
            icon = (_jsx(Icon, { name: p.icon, onClick: this.handleOpenPanel }));
        }
        // ... or as IIconProps.
        else if (p.icon != null) {
            icon = (_jsx(Icon, { ...p.icon, onClick: this.handleOpenPanel }));
        }
        return (_jsxs(_Fragment, { children: [icon, _jsx(Panel, { open: this.state.open, width: p.width, padded: p.padded, onClose: this.handleClosePanel, children: p.children })] }));
    }
}
export { IconPanel };
