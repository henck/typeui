import * as React from 'react';
import { css } from 'styled-components';
import styled from "../../styles/Theme";
import { Size } from './../Types';
import { IButtonProps } from './Button';

// Information on how to refer to parent component (or to child component):
// https://stackoverflow.com/questions/41007060/target-another-styled-component-on-hover

interface IButtonGroupProps {
  className?: string;
  children?: React.ReactNode;
  /** Aligns buttons in a vertical list. Default is horizontal. */
  vertical?: boolean;
  /** Sets size for buttons in group: mini, tiny, small, medium (default), large, big, huge or massive. */
  size?: Size;
  /** Sets color for all buttons, e.g. "#aa3311" */
  color?: string;
  /** Gives all buttons reduced padding. */
  compact?: boolean;
  /** Basic buttons are less pronounced. */
  basic?: boolean;
  /** Icon buttons have no margin, to center icon. */
  icon?: boolean;
}

class ButtonGroupBase extends React.Component<IButtonGroupProps, {}> {
  render() {
    // Build a list of properties to pass along to child buttons.
    let props: IButtonProps = {};
    let p = this.props;
    props.grouped = true;
    if(this.props.size) props.size = p.size;
    if(this.props.color) props.color = p.color;
    if(this.props.compact) props.compact = p.compact;
    if(this.props.basic) props.basic = p.basic;
    if(this.props.icon) props.icon = p.icon;
    // Render all children, cloning them to add group props.
    return (
      <div className={this.props.className}>
        {React.Children.map(this.props.children, (child:any) => {
          return React.cloneElement(child, props);
        })}
      </div>
    )
  }
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

class ButtonGroup extends React.Component<IButtonGroupProps, {}> {
  public static displayName = "Button.Group";
  
  render() {
    let p = this.props;
    return (
      <ButtonGroupStyled {...p}/>
    )
  }  
}

export { ButtonGroup };

