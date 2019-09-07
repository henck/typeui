import * as React from 'react';
import { Input, IInputProps } from '../../controls/Input';

interface IPasswordState {
  visible: boolean;
}

/*
 * The Password module combines an Input component and an Icon
 * component to make a password input with an eye icon that can
 * be clicked to toggle password visibility.
 * 
 * This is achieved by toggling the Input’s type property between
 * password and text.
 */
class Password extends React.Component<IInputProps, IPasswordState> {
  constructor(props: IInputProps) {
    super(props);
    this.state = {
      visible: false
    }
  }

  handleClick = () => {
    this.setState({ visible: !this.state.visible });
  }
  
  render() {
    let { type, ...otherProps } = this.props;
    return (
      <Input {...otherProps} type={this.state.visible ? 'text' : 'password'} iconPosition="right" icon={{name: this.state.visible ? 'eye' : 'eye-slash', onClick: this.handleClick}}/>
    );
  }
}

export { Password };
