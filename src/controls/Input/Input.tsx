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
import { InputBox as TimeInputBox } from './Time/InputBox';
import { Selector as TimeSelector } from './Time/Selector';
import { InputBox as ColorInputBox } from './Color/InputBox';
import { Selector as ColorSelector } from './Color/Selector';
import { Clear } from './Clear';
import { Label } from '../Label/Label';
import { Icon, IIconProps, IconType } from '../Icon/';
import { IconStyled } from '../Icon/Icon';

interface IInputProps {
  /** @ignore */
  className?: string;
  children?: any;
  /** Input name. */
  name?: string;
  /** Input value. */
  value?: any;
  /** Input type, `text`, `password`, `date`, `time` or `color`. Defaults to `text`. */
  type?: 'date' | 'time' | 'text' | 'password' | 'color';
  /** Placeholder to show when the Input is empty. */
  placeholder?: string;
  /** 
   * Marks input as disabled. 
   * @default false 
   */
  disabled?: boolean;
  /** 
   * Removes input border. 
   * @default false 
   */
  transparent?: boolean;
  /** 
   * A fluid Input takes up all available horizontal space available to it. 
   * @default false
   */
  fluid?: boolean;
  /** 
   * An input can show an error state. 
   * @default false 
   */
  error?: boolean;
  /** Icon props (optional). */
  icon?: IconType | IIconProps;
  /** Icon position. */
  iconPosition?: Float;
  /** 
   * If set, Input's value can be cleared. 
   * @default false 
   */
  clearable?: boolean;  
  /** If set, dates and times (in inputs of type `date` or `time`) are shown in this format 
   * (refer to date-fns/format for format options). 
   */
  format?: string;
  /** 
   * If set, date pickers do not allow picking future dates (beyond today). 
   * @default false 
   */
  nofuture?: boolean;
  /** 
   * If set, time pickers have a "seconds" field. 
   * @default false 
   */
  hasSeconds?: boolean;
  /** 
   * If set, time pickers use a 24h clock. 
   * @default false 
   */
  is24h?: boolean;
  /** 
   * If set, time pickers show a clock face. 
   * @default false 
   */
  clock?: boolean;
  /** Optional input maxlength */
  maxLength?: number;
  
  // Events
  /** Listeners are notified whenever the user interacts with the Input. */
  onChange?: (value: any) => void;
  /** Listeners are notified when the Input receives focus. */
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
    this.state = {
      open: false,
      upward: false,
      right: false
    }
  }

  componentDidMount() {
    // Add document-wide event listener for mousedown.
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    // Remove document-wide event listener for mousedown.
    document.removeEventListener('mousedown', this.handleClickOutside);
  }     

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
    });
  }

  //
  // Toggle selector.
  //
  private handleToggle = () => {
    // Disabled input cannot be clicked.
    if(this.props.disabled) return;
    // Is the input below the middle of the viewport?
    let below = this.wrapperRef.current.getBoundingClientRect().top > window.innerHeight / 2;
    // Is the input to the right of the middle of the viewport?
    let right = this.wrapperRef.current.getBoundingClientRect().left > window.innerWidth * 0.45;
    this.setState({
      upward: below,
      right: right,
      open: !this.state.open
    });
  }  

  private handleKeyDown = (e: React.KeyboardEvent) => {
    e.stopPropagation();
    if(e.key == 'Enter' || e.key == ' ') {
      this.handleToggle();
    }
    if(e.key == 'Tab') {
      this.setState({ open: false });
    }
  }
  
  //
  // If a value is selected, close the selector.
  //  
  private handleSelect = (value: any) => {
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
  handleClickOutside = (e: MouseEvent) => {
    let elem: Element = e.target as Element;
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

  // Speedup: only re-render input when value changes, or its error/disabled state.
  /*  shouldComponentUpdate(nextProps: IInputProps, nextState: IInputState) {
    const differentValue = this.props.value !== nextProps.value;
    const differentError = this.props.error !== nextProps.error;
    const differentDisabled = this.props.disabled !== nextProps.disabled;
    const differentOpen = this.state.open != nextState.open;
    return differentValue || differentError || differentDisabled || differentOpen;
  } */

  render() {
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
      {p.type !== 'date' && p.type !== 'color' && p.type !== 'time' && 
        <StandardInput {...p}/>}
      {p.type === 'date' && 
        <>
          <DateInputBox {...p} defaultFormat="dd-MM-yyyy" onKeyDown={this.handleKeyDown}/>
          <CSSTransition in={this.state.open} timeout={300} unmountOnExit classNames="fade">
            <DateSelector value={p.value} upward={this.state.upward} right={this.state.right} onSelect={this.handleSelect} nofuture={p.nofuture}/>
          </CSSTransition>
        </>}
      {p.type === 'time' && 
        <>
          <TimeInputBox {...p} defaultFormat={p.hasSeconds ? "HH:mm:ss" : "HH:mm"} onKeyDown={this.handleKeyDown}/>
          <CSSTransition in={this.state.open} timeout={300} unmountOnExit classNames="fade">
            <TimeSelector value={p.value} upward={this.state.upward} right={this.state.right} onSelect={this.handleSelect} hasSeconds={p.hasSeconds} is24h={p.is24h} clock={p.clock}/>
          </CSSTransition>          
        </>}
      {p.type === 'color' &&
        <>
          <ColorInputBox {...p} onKeyDown={this.handleKeyDown}/>
          <CSSTransition in={this.state.open} timeout={300} unmountOnExit classNames="fade">
            <ColorSelector value={p.value} upward={this.state.upward} right={this.state.right} onSelect={this.handleSelect}/>
          </CSSTransition>
        </>}
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

class InputBase extends React.Component<IInputProps> {
  private isAttachedTo(c: any, side: Float) {
    const attached = (c.props as any).attached;
    return attached === side || (!attached && side === 'left');
  }

  // Return an array of children that are Labels and attached to this
  // Input control.
  private getAttachables(side: Float) {
    return React.Children.toArray(this.props.children)
    .filter(
      c => React.isValidElement(c)     // Is this a React node?
      && (c.props as any).isLabel      // Is this a Label?
      && this.isAttachedTo(c, side)    // Is it attached to this side?
    )
    .map((c: any, idx: number) => {
      let attached = (c.props as any).attached;
      if(!attached) attached = 'left'; // Attach to left side by default.
      return React.cloneElement(c, { key: idx, attached: attached } as any);
    });
  }

  private getIconProps(): IIconProps {
    let props = null;
    React.Children.forEach(this.props.children, (child:any) => {
      if(React.isValidElement(child) && (child.props as any).isIcon) {
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
 * @link https://henck.github.io/typeui/?path=/story/controls-input--properties
 */
class Input extends React.Component<IInputProps> {
  render = () => <InputStyled {...this.props}/>
}

export { Input, IInputProps };
