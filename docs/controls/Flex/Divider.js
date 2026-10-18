import { jsx as _jsx } from "react/jsx-runtime";
import { css } from 'styled-components';
import styled from '../../styles/Theme';
/**
 * A Flex.Divider creates a vertical dividing line inside a two-cell Flex.
 * If the Flex is stackable, then the Flex.Divider becomes horizontal when
 * the cells stack.
 */
const DividerBase = (props) => _jsx("span", { className: props.className, children: props.children });
const DividerStyled = styled(DividerBase) `
  position:       absolute;
  top:            50%;
  left:           50%;
  width:          auto;
  height:         50%;
  z-index:        1;
  transform:      translateX(-50%);
  line-height:    0;
  font-weight:    500;
  text-transform: uppercase;  
  text-align:     center;
  &:before, &:after {
    content:      '';
    position:     absolute;
    left:         50%;
    width:        0;
    height:       calc(100% - 1em);
    border-left:  solid 1px ${p => p.theme.normalColor};
  }
  &:before { 
    bottom:       0;
  }
  &:after {
    top:          -100%;
  }
  ${p => p.stackable && css `
    @media (max-width: ${p => p.theme.smallScreen}px) {
      width:        100%;
      height:       auto;
      &:before, &:after {
        left:       auto;
        top:        50%;
        width:      calc(50% - 2em);
        height:     0;
        border-top: solid 1px ${p => p.theme.normalColor};
      }
      &:before {
        left:       0;
      }
      &:after {
        right:      0;
      }
    }  
  `}  
`;
const Divider = (props) => _jsx(DividerStyled, { ...props });
export { Divider };
