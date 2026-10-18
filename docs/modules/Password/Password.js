import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import { Input } from '../../controls/Input';
/*
 * The Password module combines an Input component and an Icon
 * component to make a password input with an eye icon that can
 * be clicked to toggle password visibility.
 *
 * This is achieved by toggling the Input’s type property between
 * password and text.
 */
class Password extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = () => {
            this.setState({ visible: !this.state.visible });
        };
        this.state = {
            visible: false
        };
    }
    render() {
        let { type, ...otherProps } = this.props;
        return (_jsx(Input, { ...otherProps, type: this.state.visible ? 'text' : 'password', iconPosition: "right", icon: { name: this.state.visible ? 'eye' : 'eye-slash', onClick: this.handleClick } }));
    }
}
export { Password };
