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
  /** Optional autocomplete information (see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) */
  autocomplete?: string;
  
  // Events
  /** Listeners are notified whenever the user interacts with the Input. */
  onChange?: (value: any) => void;
  /** Listeners are notified when the Input receives focus. */
  onFocus?: () => void;
}

const InputInnerBase = (props: IInputProps) => {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  // Selector currently open?
  const [open, setOpen] = React.useState(false);
  // Selector opens upward?
  const [upward, setUpward] = React.useState(false);
  // Selector opens right?
  const [right, setRight] = React.useState(false);

  // Add (and remove) document-wide event listener for mousedown.
  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Returns true if the input is in the lower half of the viewport.
  const isInLowerViewport = (): boolean =>
    wrapperRef.current.getBoundingClientRect().top > window.innerHeight / 2;

  // Returns true if the input is to the right of the middle of the viewport.
  const isInRightViewport = (): boolean => 
    wrapperRef.current.getBoundingClientRect().left > window.innerWidth * 0.45;

  const handleClick = () => {
    // Disabled input cannot be clicked.
    if(props.disabled) return;
    setUpward(isInLowerViewport());
    setRight(isInRightViewport());
    setOpen(true);
  }

  //
  // Toggle selector.
  //
  const handleToggle = () => {
    // A disabled input cannot be clicked.
    if(props.disabled) return;
    setUpward(isInLowerViewport());
    setRight(isInRightViewport());
    setOpen(!open);
  }  

  const handleKeyDown = (e: React.KeyboardEvent) => {
    e.stopPropagation();
    if(e.key == 'Enter' || e.key == ' ') handleToggle();
    if(e.key == 'Tab') setOpen(false);
  }
  
  //
  // If a value is selected, close the selector.
  //  
  const handleSelect = (value: any) => {
    // Close the selector.
    setOpen(false);
    // If a value was selected, notify listener (if any).
    if(value && props.onChange) {
      props.onChange(value);
    }
  }  

  //
  // Handle document-wide mousedown event by closing the Selector.
  // (This only happens if there actually is a Selector).
  //
  const handleClickOutside = (e: MouseEvent) => {
    let elem: Element = e.target as Element;
    if (wrapperRef.current && !wrapperRef.current.contains(elem)) {
      setOpen(false);
    }
  }      

  const handleClear = () => {
    if(props.onChange) {
      props.onChange(null);
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

  let {className, ...p} = props;

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
  <div className={className} onClick={handleClick} ref={wrapperRef}>
    {p.type !== 'date' && p.type !== 'color' && p.type !== 'time' && 
      <StandardInput {...p}/>}
    {p.type === 'date' && 
      <>
        <DateInputBox {...p} defaultFormat="dd-MM-yyyy" onKeyDown={handleKeyDown}/>
        <CSSTransition in={open} timeout={300} unmountOnExit classNames="fade">
          <DateSelector value={p.value} upward={upward} right={right} onSelect={handleSelect} nofuture={p.nofuture}/>
        </CSSTransition>
      </>}
    {p.type === 'time' && 
      <>
        <TimeInputBox {...p} defaultFormat={p.hasSeconds ? "HH:mm:ss" : "HH:mm"} onKeyDown={handleKeyDown}/>
        <CSSTransition in={open} timeout={300} unmountOnExit classNames="fade">
          <TimeSelector value={p.value} upward={upward} right={right} onSelect={handleSelect} hasSeconds={p.hasSeconds} is24h={p.is24h} clock={p.clock}/>
        </CSSTransition>          
      </>}
    {p.type === 'color' &&
      <>
        <ColorInputBox {...p} onKeyDown={handleKeyDown}/>
        <CSSTransition in={open} timeout={300} unmountOnExit classNames="fade">
          <ColorSelector value={p.value} upward={upward} right={right} onSelect={handleSelect}/>
        </CSSTransition>
      </>}
    {icon}
    {p.clearable && p.value !== null && <Clear onClick={handleClear}></Clear>}
  </div>)
}

const InputInner = styled(InputInnerBase)`
  position: relative;
  display: inline-block;
  ${p => !p.fluid && css`width: 250px;`}
  ${p =>  p.fluid && css`width: 100%;`}

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

const InputBase = (props: IInputProps) => {
  const isAttachedTo = (c: any, side: Float): boolean => {
    const attached = (c.props as any).attached;
    return attached === side || (!attached && side === 'left');
  }

  // Return an array of children that are Labels and attached to this
  // Input control.
  const getAttachables = (side: Float) => {
    return React.Children.toArray(props.children)
    .filter(
      c => React.isValidElement(c)     // Is this a React node?
      && (c.props as any).isLabel      // Is this a Label?
      && isAttachedTo(c, side)         // Is it attached to this side?
    )
    .map((c: any, idx: number) => {
      let attached = (c.props as any).attached;
      if(!attached) attached = 'left'; // Attach to left side by default.
      return React.cloneElement(c, { key: idx, attached: attached } as any);
    });
  }

  const getIconProps = (): IIconProps => {
    let properties = null;
    React.Children.forEach(props.children, (child:any) => {
      if(React.isValidElement(child) && (child.props as any).isIcon) {
        properties = child.props;
      }
    });
    return properties;
  }

  let {className, ...otherProps} = props;

  // The InputInner class is a wrapper to allow for placement
  // of attached elements such as Labels, as well as passing
  // the "pristine" state down.

  return (
    <div className={className}>
      {getAttachables('left')}
      <InputInner icon={getIconProps()} {...otherProps}></InputInner>
      {getAttachables('right')}
    </div>
  )
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
const Input = (props: IInputProps) => <InputStyled {...props}/>

export { Input, IInputProps };
