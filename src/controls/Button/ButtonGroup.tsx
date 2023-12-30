import * as React from 'react';
import { css } from 'styled-components';
import styled from "../../styles/Theme";

// Types 
import { Size } from './../Types';

// Other controls
import { IButtonProps } from './Button';

// Information on how to refer to parent component (or to child component):
// https://stackoverflow.com/questions/41007060/target-another-styled-component-on-hover

interface IButtonGroupProps {
  /** @ignore */
  className?: string;
  /** @ignore */
  children?: React.ReactNode;
  /** 
   * Aligns buttons in a vertical list. Default is horizontal. 
   * @default horizontal
   */
  vertical?: boolean;
  /** 
   * Sets size for buttons in group: `mini`, `tiny`, `small`, `medium` (default), `large`, `big`, `huge` or `massive`. 
   * @default medium
   */
  size?: Size;
  /** 
   * Sets color for all buttons in group, e.g. `#aa3311`. 
   */
  color?: string;
  /** 
   * Gives all buttons in group reduced padding. 
   * @default false
   */
  compact?: boolean;
  /** 
   * Sets all buttons in group to be basic buttons, which are less pronounced. 
   * @default false
   */
  basic?: boolean;
  /** 
   * Sets all buttons in group to be icon buttons that have no margin, to center icons. 
   * @default false
  */
  icon?: boolean;
}

const ButtonGroupBase = (props: IButtonGroupProps) => {
  // Build a list of properties to pass along to child buttons.
  const newprops: IButtonProps = {
    size:    props.size,
    color:   props.color,
    compact: props.compact,
    basic:   props.basic,
    icon:    props.icon,
    grouped: true
  };
  
  // Render all children, cloning them to add group props.
  return (
    <div className={props.className}>
      {React.Children.map(props.children, (child: any) => {
        return React.cloneElement(child, newprops);
      })}
    </div>
  );
}

const ButtonGroupStyled = styled(ButtonGroupBase)`
  display: inline-flex;
  align-items: center; 
  ${p => p.vertical && css`
    /* If group is vertical, then apply flex column layout. */
    flex-direction: column;
    align-items: stretch;
  `}
  /* First button has partial rounding,
   * depending on group orientation, and 
   * no connecting border. */
  & div:first-child button {
    ${p => !p.vertical && css`
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-right: none;
    `}
    ${p => p.vertical && css`
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
    `}
  }
  /* Last button has partial rounding,
   * depending on group orientation. */
  & div:last-child button {
    ${p => !p.vertical && css`
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    `}
    ${p => p.vertical && css`
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    `};   
  }
  /* Buttons in the middle have no rounding at all, 
   * and no connecting border. */
  & div:not(:first-child):not(:last-child) button {
    border-radius: 0;
    ${p => !p.vertical && css`
      border-right: none;
    `}    
    ${p => p.vertical && css`
      border-bottom: none;
    `}
  }
`

const ButtonGroup = (props: IButtonGroupProps) => <ButtonGroupStyled {...props}/>

export { ButtonGroup, IButtonGroupProps }
