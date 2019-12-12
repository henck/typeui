import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';

// Helpers
import { darken } from '../../helper/darken';

// Types
import { CheckboxType } from '../Types';

interface ICheckboxProps {
  className?: string;
  /** Checkbox name. */
  name?: string;
  /** Radio value */
  value?: any;  
  /** Is the Checkbox currently checked? */
  checked?: boolean;  
  /** Checkbox label. Appears to the right of the box. */
  label?: string;
  /** Is this a radio? */
  radio?: boolean;
  /** Checkbox visual style: `check`, `toggle`, `slider` or `circle`. Default is `check`. */
  type?: CheckboxType; 
  /** A disabled checkbox cannot be interacted with. */
  disabled?: boolean;
  /** If set, show an error state. */
  error?: boolean;

  // Events
  /** Listeners are notified whenever the user interacts with the input. */
  onChange?: (value: any) => void;
}

class CheckboxBase extends React.Component<ICheckboxProps, {}> {
  private handleChange = (e:any) => {
    // For radios, we use the value attribute.
    // For checkboxes, we use the checked attribute.
    let value = this.props.radio ? e.target.value : e.target.checked;
    if(this.props.onChange) {
      this.props.onChange(value);
    }
  }  

  render() {
    let p = this.props;
    return (
      <label className={p.className}>
        <input 
          name={p.name} 
          type={p.radio ? "radio" : "checkbox"}
          value={p.value === null ? undefined : p.value} 
          checked={p.checked === null ? false : p.checked}
          disabled={p.disabled}
          onChange={this.handleChange}/>
        <div>
          <svg>
            <use xlinkHref={"spritemap.svg#check"}></use>
          </svg>          
        </div>
        <span>{p.label}</span>
      </label>
    );
  }
}

const CheckboxStyled = styled(CheckboxBase).attrs(p => ({
  borderColor:      p.error ? p.theme.errorColor.border : p.theme.normalColor,
  checkedColor:     p.error ? p.theme.errorColor.border : p.theme.primaryColor,
  hoverColor:       p.error ? p.theme.errorColor.border : darken(0.1, p.theme.normalColor)
}))`
  display: inline-block;
  position: relative;
  padding-left: ${p => (!p.type || p.type === 'check' || p.type === 'circle') ? 26 : 46}px;
  padding-right: 16px;
  line-height: 17px;
  cursor: pointer;
  outline: none;

  /* The clickable div. */
  & > div {
    position: absolute;
    box-sizing: border-box;
    left: 0;
    top: 0;
  }

  svg {
    display: none;  
  }

  /* Clickable div: checkbox case */
  ${p => ((!p.type && !p.radio) || p.type === 'check') && css`
    & > div {
      width: 17px;
      height: 17px;
      border: solid 1px ${p.borderColor};
      border-radius: ${p => p.theme.radius}px;
      transition: border-color 0.1s ease;
    }
    ${!p.disabled && !p.error && css`
      &:hover > div {
        border-color: ${p.hoverColor};
      }
    `}

    svg {
      position: absolute;
      left: 0;
      top: 0;
      width: 15px;
      height: 15px;
      fill: #fff;
    }    

    input:checked + div {
      border-color: ${p.checkedColor};
      background: ${p.checkedColor};
      svg {
        display: block;
      }
    }    
  `}

  /* Clickable div: circle case */
  ${p => ((!p.type && p.radio) || p.type === 'circle') && css`
    & > div {
      width: 17px;
      height: 17px;
      border: solid 1px ${p.borderColor};
      border-radius: 50%;
      transition: border-color ${p.theme.transition.duration}s ease;
    }

    ${!p.disabled && !p.error && css`
      &:hover > div {
        border-color: ${p.hoverColor};
      }
    `}    

    input:checked + div {
      &:after {
        position: absolute;
        content: '';
        left: 3px;
        top: 3px;
        height: 3px;
        width: 9px;
        height: 9px;
        border-radius: 50%;
        background: ${p.checkedColor};
      }
    }    
  `}  

  /* Clickable div: Toggle/Slider case */
  ${p => (p.type === 'toggle' || p.type === 'slider') && css`
    & > div {
      width: 36px;
      height: ${p.type === 'toggle' ? 17 : 3}px;
      border-radius: ${p.type === 'toggle' ? 8.5 : 2}px;
      ${p.type === 'slider' && css`
        margin-top: 7px;
        margin-bottom: 7px;
      `}
      background-color: ${p.borderColor};
      transition: background-color 0.1s ease;
      &:after {
        position: absolute;
        content: '';
        z-index: 1;
        left: 0;
        top: ${p.type === 'toggle' ? 0 : -7}px;
        width: 17px;
        height: 17px;
        border-radius: 50%;
        background: #fff linear-gradient(transparent, rgba(0,0,0,.05));
        box-shadow: 0 1px 2px 0 rgba(34,36,38,.15), 0 0 0 1px rgba(34,36,38,.15) inset;
        transition: left 0.2s ease;
      }
    }

    ${!p.disabled && !p.error && css`}
      &:hover > div {
        background: ${p.hoverColor};
      }
    `}    

    input:checked + div {
      background-color: ${p.checkedColor};
      &:after {
        left: 19px;
      }
      &:hover {
        background-color: ${darken(0.1, p.checkedColor)};
      }
    }
  `}

  /* The input[type='checkbox'] itself is not visible. */
  input {
    display: none;
  }

  /* The label is shifted slightly to align with the checkbox div. */
  span {
    display: inline-block;
    padding-top: 1px;
    ${p => p.disabled && css`
      color: #aaa;
    `}
  }
`

class Checkbox extends React.Component<ICheckboxProps, {}> {
  public static displayName = 'Checkbox';

  render() {
    return (
      <CheckboxStyled {...this.props}></CheckboxStyled>
    );
  }
}

export { Checkbox };
