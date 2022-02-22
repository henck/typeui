import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';

// Helpers
import { lighten } from '../../helper/lighten';

import { IInputProps } from './Input';

class StandardInputBase extends React.Component<IInputProps> {

  private handleChange = (e:any) => {
    if(this.props.onChange) {
      this.props.onChange(e.target.value);
    }
  }  

  render() {
    let p = this.props;
    return (
      <input className={this.props.className}
        value={p.value == null ? '' : p.value} 
        placeholder={p.placeholder} 
        disabled={p.disabled}
        type={p.type} 
        maxLength={p.maxLength}
        onChange={this.handleChange}
        onFocus={this.props.onFocus}/>
    )
  }
}

const StandardInput = styled(StandardInputBase).attrs(p => ({
  iconPos:          !p.iconPosition ? 'left' : p.iconPosition, 
  borderColor:      p.theme.normalColor,
  highBorderColor:  lighten(0.25, p.theme.primaryColor)
}))`
  width:            100%;
  box-sizing:       border-box;
  z-index:          0;
  font-family:      Roboto, sans-serif;
  font-size:        ${p => p.theme.fontSize}px;
  line-height:      17px;
  text-align:       left;
  color:            ${p => p.theme.fontColor};
  border:           solid 1px ${p => p.borderColor};
  border-radius:    ${p => p.theme.radius}px;
  outline:          0;
  background-color: ${p => p.theme.background};
  padding:          9px 14px;

  /* Padding for icon, if there is one: */
  ${p => p.icon && css`
    ${p.iconPos === 'left' && css`padding-left: 40px;`}
    ${p.iconPos === 'right' && css`padding-right: 40px;`}
  `}  

  /* Padding for clear icon, if present: */
  ${p => p.clearable && css`}
    padding-right: 40px;
  `}

  /* Define colors for placeholder text. */
  &::placeholder {
    color: ${p => lighten(0.6, p.theme.fontColor)};
    opacity: 1 !important; /* Firefox applies opacity */
  }

  /* Define colors for selected text. */
  &::selection {
    background-color: rgba(100,100,100,.4);
    color: ${p => p.theme.fontColor};
  }

  /* Define colors when input has focus. */
  transition: border-color ${p => p.theme.transition.duration}s ease;
  &:focus {
    border-color: ${p => p.highBorderColor};
    &::placeholder {
      color: ${p => lighten(0.4, p.theme.fontColor)};
    }
  }

  /* Make sure HTML5 validation does not show up. */
  &:valid {
    box-shadow: none;
  }
  &:invalid {
    box-shadow: none;
  }

  /* Error */
  transition: background-color ${p => p.theme.transition.duration}s ease;
  ${p => p.error && css`
    color: ${p.theme.errorColor.color};
    border-color: ${p.theme.errorColor.border};
    background: ${p.theme.errorColor.background};
    &::placeholder {
      color: ${p.theme.errorColor.color};
    }
    &:focus {
      border-color: ${p.theme.errorColor.border};
      &::placeholder {
        color: ${p.theme.errorColor.color};
      }      
    }
    box-shadow: none;
  `}

  /* Disabled */
  ${p => p.disabled && css`
    opacity: 0.5;
  `}

  /* Transparent (borderless) */
  ${p => p.transparent && css`
    border-width: 0px;
  `}

  /* Turn off number spinners. */
  &[type=number]::-webkit-inner-spin-button, 
  &[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none;  /* Webkit (Chrome) */
    margin: 0; 
  }    
  &[type=number] {
    -moz-appearance:textfield; /* Firefox */
  }       
`;

export { StandardInput };