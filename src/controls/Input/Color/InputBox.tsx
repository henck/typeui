import * as React from 'react';
import styled from '../../../styles/Theme';
import { css } from 'styled-components';

// Helpers
import { lighten } from '../../../helper/lighten';

// Other controls
import { IInputProps } from '../Input';

interface IColorInputProps {
  onKeyDown: (e: React.KeyboardEvent) => void;
}

const InputBoxBase = (props: IInputProps & IColorInputProps) =>
  <div tabIndex={0} className={props.className} onKeyDown={props.onKeyDown}>
    {props.value && typeof props.value === 'string' && (<span style={{background: props.value}}></span>)}
    {props.value && typeof props.value !== 'string' && 'Not a color'}
    {!props.value && props.placeholder}
  </div>

const InputBox = styled(InputBoxBase).attrs(p => ({
  iconPos: !p.iconPosition ? 'left' : p.iconPosition
}))`
  position: relative;
  display: block;
  border: solid 1px ${p => p.theme.normalColor};
  box-sizing: border-box;
  border-radius: ${p => p.theme.radius}px;
  cursor: pointer;
  width: 100%;
  height: 38px;
  line-height: 38px;
  padding: 0 14px;

  /* Padding for icon, if there is one: */
  ${p => p.icon && css`
    ${p.iconPos === 'left' && css`padding-left: 40px;`}
    ${p.iconPos === 'right' && css`padding-right: 40px;`}
  `}   

  /* Color inside input */
  & > span {
    display: block;
    position: absolute;
    right: ${p => p.icon && p.iconPos === 'right' ? '42px' : '2px'};
    left: ${p => p.icon && p.iconPos === 'left' ? '42px' : '2px'};
    top: 2px;
    bottom: 2px;
    border-radius: ${p => p.theme.radius}px;
    transition: opacity ${p => p.theme.transition.duration}s ease;
    &:hover {
      opacity: 0.8;
    }
  }  
  
  /* Focused */
  outline: none;
  transition: border-color ${p => p.theme.transition.duration}s ease;
  &:focus {
    border-color: ${p => lighten(0.25, p.theme.primaryColor)};
  }

  /* Placeholder */ 
  ${p => !p.value && css`
    color: ${lighten(0.6, p.theme.fontColor)};
    &:focus { color: ${lighten(0.4, p.theme.fontColor)}; }
  `}

  /* Error */
  transition: background-color ${p => p.theme.transition.duration}s ease;
  ${p => p.error && css`
    border-color: ${p.theme.errorColor.border};
    background-color: ${p.theme.errorColor.background};
    color: ${p.theme.errorColor.color};
    box-shadow: none;
  `}

  /* Define colors for selected text. */
  &::selection {
    background-color: rgba(100,100,100,.4);
    color: ${p => p.theme.fontColor};
  }  

  /* Disabled */
  ${p => p.disabled && css`
    opacity: 0.5;
    cursor: auto;
  `}  

  /* Transparent (borderless) */
  ${p => p.transparent && css`
    border-width: 0px;
  `}  
`

export { InputBox }
