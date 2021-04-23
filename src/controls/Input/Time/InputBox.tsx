import * as React from 'react';
import styled from '../../../styles/Theme';
import { css } from 'styled-components';
import { format, parse } from 'date-fns';

// Helpers
import { lighten } from '../../../helper/lighten';

// Other controls
import { IInputProps } from '../Input';

interface IDateInputProps {
  focused?: boolean;
  /**
   * Default date/time format to use if `format` is not specified.
   * e.g. `dd-MM-yyyy` or `HH:mm:ss`.
   */
  defaultFormat: string;
}

class InputBoxBase extends React.Component<IInputProps & IDateInputProps, {}> {
  render() {
    let p = this.props;
    return (
      <div className={p.className}>
        {p.value && format(parse(p.value, 'HH:mm:ss', new Date()), p.format ? p.format : p.defaultFormat)}
        {!p.value && p.placeholder}
      </div>
    );
  }
}

const InputBox = styled(InputBoxBase).attrs(p => ({
  iconPos: !p.iconPosition ? 'left' : p.iconPosition
}))`
  display: block;
  border: solid 1px ${p => p.theme.normalColor};
  box-sizing: border-box;
  border-radius: ${p => p.theme.radius}px;
  cursor: pointer;
  width: 100%;
  height: 38px;
  line-height: 38px;
  padding: 0 14px;

  /* Text overflow */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  /* Padding for icon, if there is one: */
  ${p => p.icon && css`
    ${p.iconPos === 'left' && css`padding-left: 40px;`}
    ${p.iconPos === 'right' && css`padding-right: 40px;`}
  `}     
  
  /* Focused */
  transition: border-color ${p => p.theme.transition.duration}s ease;
  ${p => p.focused && css`
    border-color: ${p => lighten(0.25, p.theme.primaryColor)};
  `}

  /* Placeholder */ 
  ${p => !p.value && css`
    color: ${lighten(p.focused ? 0.4 : 0.6, p.theme.fontColor)};
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

export { InputBox };
