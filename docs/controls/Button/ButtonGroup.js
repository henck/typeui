import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import { css } from 'styled-components';
import styled from "../../styles/Theme";
const ButtonGroupBase = (props) => {
    // Build a list of properties to pass along to child buttons.
    const newprops = {
        size: props.size,
        color: props.color,
        compact: props.compact,
        basic: props.basic,
        icon: props.icon,
        grouped: true
    };
    // Render all children, cloning them to add group props.
    return (_jsx("div", { className: props.className, children: React.Children.map(props.children, (child) => {
            return React.cloneElement(child, newprops);
        }) }));
};
const ButtonGroupStyled = styled(ButtonGroupBase) `
  display: inline-flex;
  align-items: center; 
  ${p => p.vertical && css `
    /* If group is vertical, then apply flex column layout. */
    flex-direction: column;
    align-items: stretch;
  `}
  /* First button has partial rounding,
   * depending on group orientation, and 
   * no connecting border. */
  & div:first-child button {
    ${p => !p.vertical && css `
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-right: none;
    `}
    ${p => p.vertical && css `
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
    `}
  }
  /* Last button has partial rounding,
   * depending on group orientation. */
  & div:last-child button {
    ${p => !p.vertical && css `
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    `}
    ${p => p.vertical && css `
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    `};   
  }
  /* Buttons in the middle have no rounding at all, 
   * and no connecting border. */
  & div:not(:first-child):not(:last-child) button {
    border-radius: 0;
    ${p => !p.vertical && css `
      border-right: none;
    `}    
    ${p => p.vertical && css `
      border-bottom: none;
    `}
  }
`;
const ButtonGroup = (props) => _jsx(ButtonGroupStyled, { ...props });
export { ButtonGroup };
