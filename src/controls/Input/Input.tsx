import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';
import { CSSTransition } from 'react-transition-group';

// Types
import { Float } from '../Types';

// Other controls
import { StandardInput } from './StandardInput';
import { InputBox as DateInputBox } from './Date/InputBox';
import { Selector as DateSelector } from './Date/Selector';
import { InputBox as ColorInputBox } from './Color/InputBox';
import { Selector as ColorSelector } from './Color/Selector';
import { Clear } from './Clear';
import { Label } from '../Label/Label';
import { Icon, IIconProps, IconType } from '../Icon/';
import { IconStyled } from '../Icon/Icon';

interface IInputProps {
  className?: string;
  children?: any;
  /** Input name. */
  name?: string;
  /** Input value. */
  value?: any;
  /** Input type, `text`, `password`, `date` or `color`. Defaults to `text`. */
  type?: 'date' | 'text' | 'password' | 'color';
  /** Placeholder to show when the Input is empty. */
  placeholder?: string;
  /** Marks input as disabled. */
  disabled?: boolean;
  /** Removes input border. */
  transparent?: boolean;
  /** A fluid Input takes up all available horizontal space available to it. */
  fluid?: boolean;
  /** An input can show an error state. */
  error?: boolean;
  /** Icon props (optional). */
  icon?: IconType | IIconProps;
  /** Icon position. */
  iconPosition?: Float;
  /** If set, Input's value can be cleared. */
  clearable?: boolean;  
  /** If set, dates (in inputs of type `date`) are shown in this format (refer to date-fns/format for format options). */
  dateformat?: string;
  /** If set, date pickers do not allow picking future dates (beyond today). */
  nofuture?: boolean;
  
  // Events
  /** Listeners are notified whenever the user interacts with the Input. */
  onChange?: (value: any) => void;
  /** Listeners ar enotified when the Input receives focus. */
  onFocus?: () => void;
}

interface IInputState {
  // Selector currently open?
  open: boolean;
  // Selector opens upward?
  upward: boolean;
  // Selector opens right?
  right: boolean;
}


class InputInnerBase extends React.PureComponent<IInputProps, IInputState> {
  private wrapperRef: React.RefObject<HTMLDivElement>;

  constructor(props: IInputProps) {
    super(props);
    this.wrapperRef = React.createRef<HTMLDivElement>();
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      open: false,
      upward: false,
      right: false
    }
  }

  // If control is clicked, open selector.
  private handleClick = () => {
    // Disabled input cannot be clicked.
    if(this.props.disabled) return;
    // Is the input below the middle of the viewport?
    let below = this.wrapperRef.current.getBoundingClientRect().top > window.innerHeight / 2;
    // Is the input to the right of the middle of the viewport?
    let right = this.wrapperRef.current.getBoundingClientRect().left > window.innerWidth * 0.45;
    this.setState({
      upward: below,
      right: right,
      open: true
    })
  }  

  //
  // If control is clicked, open selector.
  // (This only happens if there actually is a Selector.)
  //  
  private handleSelect(value: any) {
    // Close the selector.
    this.setState({
      open: false
    });
    // If a value was selected, notify listener.
    if(value && this.props.onChange) {
      this.props.onChange(value);
    }
  }  

  //
  // Handle document-wide mousedown event by closing the Selector.
  // (This only happens if there actually is a Selector).
  //
  handleClickOutside(event: MouseEvent) {
    let elem:Element = event.target as Element;
    if (this.wrapperRef.current && !this.wrapperRef.current.contains(elem)) {
      this.setState({
        open: false
      });
    }
  }      

  handleClear = () => {
    if(this.props.onChange) {
      this.props.onChange(null);
    }    
  }

  componentDidMount() {
    // Add document-wide event listener for mousedown.
    document.addEventListener('mousedown', this.handleClickOutside.bind(this));
  }

  componentWillUnmount() {
    // Remove document-wide event listener for mousedown.
    document.removeEventListener('mousedown', this.handleClickOutside.bind(this));
  }     

  // Speedup: only re-render input when value changes, or its error/disabled state.
  /*  shouldComponentUpdate(nextProps: IInputProps, nextState: IInputState) {
    const differentValue = this.props.value !== nextProps.value;
    const differentError = this.props.error !== nextProps.error;
    const differentDisabled = this.props.disabled !== nextProps.disabled;
    const differentOpen = this.state.open != nextState.open;
    return differentValue || differentError || differentDisabled || differentOpen;
  } */

  render() {
    //console.log("RENDER INPUT");
    let {className, ...p} = this.props;

    let icon = null;
    // An icon can be passed either as an IconType...
    if(typeof p.icon === "string") {
      icon = (<Icon name={p.icon}></Icon>)
    } 
    // ... or as IIconProps.
    else if (p.icon != null) {
      icon = (<Icon {...p.icon}></Icon>)
    }    

    return (
    <div className={className} onClick={this.handleClick} ref={this.wrapperRef}>
      {p.type !== 'date' && p.type !== 'color' && 
        <StandardInput {...p}/>}
      {p.type === 'date' && 
        <React.Fragment>
          <DateInputBox {...p} focused={this.state.open}/>
          <CSSTransition in={this.state.open} timeout={300} unmountOnExit classNames="fade">
            <DateSelector value={p.value} upward={this.state.upward} right={this.state.right} onSelect={this.handleSelect} nofuture={p.nofuture}/>
          </CSSTransition>
        </React.Fragment>}
      {p.type === 'color' &&
        <React.Fragment>
          <ColorInputBox {...p} focused={this.state.open}/>
          <CSSTransition in={this.state.open} timeout={300} unmountOnExit classNames="fade">
            <ColorSelector value={p.value} upward={this.state.upward} right={this.state.right} onSelect={this.handleSelect}/>
          </CSSTransition>
        </React.Fragment>}      
      {icon}
      {p.clearable && p.value !== null && <Clear onClick={this.handleClear}></Clear>}
    </div>)
  }
}

const InputInner = styled(InputInnerBase)`
  position: relative;
  display: inline-block;
  ${p => !p.fluid && css`width: 250px;`}
  ${p => p.fluid && css`width: 100%;`}

  /* Icon */
  ${IconStyled} {
    position: absolute;
    z-index: 15;
    ${p => !p.iconPosition && css`left: 18px;`}
    ${p =>  p.iconPosition && p.iconPosition === 'left'  && css`left: 18px;`}
    ${p =>  p.iconPosition && p.iconPosition === 'right' && css`right: 6px;`}
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    transition: opacity ${p => p.theme.transition.duration}s ease;
    opacity: 0.5;
  }
  input:focus ~ ${IconStyled} {
    opacity: 1;
  }    

  /* If something is attached to the input, remove its border radius. */
  &:not(:first-child) {
    input, & > div {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
  &:not(:last-child) {
    input, & > div {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
`;

class InputBase extends React.Component<IInputProps, {}> {
  getAttachables(side:Float = "left") {
    return React.Children.map(this.props.children, (child:any) => {
      if(child.type && child.type === Label) {
        // Does label have 'attached' attribute, and it is equal to side?
        if(child.props.attached && child.props.attached === side) return child;
        // No attached attribute, but side is left? Then add attached attribute.
        if(!child.props.attached && side === 'left') {
          return React.cloneElement(child, { attached: 'left'});
        }
      }
    });
  }

  getIconProps(): IIconProps {
    let props = null;
    React.Children.forEach(this.props.children, (child:any) => {
      if(child.type && child.type === Icon) {
        props = child.props;
      }
    });
    return props;
  }

  render() {
    let {className, ...otherProps} = this.props;

    // The InputInner class is a wrapper to allow for placement
    // of attached elements such as Labels, as well as passing
    // the "pristine" state down.

    return (
      <div className={className}>
        {this.getAttachables('left')}
        <InputInner icon={this.getIconProps()} {...otherProps}></InputInner>
        {this.getAttachables('right')}
      </div>
    )
  }
}

const InputStyled = styled(InputBase)`
  position:    relative;
  display:     inline-flex;
  align-items: stretch;
  min-width:   40px;
  ${p => p.fluid && css`width: 100%;`}
`

/**
 * Replacement for standard HTML input.
 * 
 * @see {@link https://henck.github.io/typeui/?path=/story/controls-input--properties}
 */
class Input extends React.Component<IInputProps, {}> {
  render() {
    let p = this.props;
    return (
      <InputStyled {...p}/>
    );
  }
}

export { Input, IInputProps };