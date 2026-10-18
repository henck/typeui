import { jsx as _jsx } from "react/jsx-runtime";
import { css } from 'styled-components';
import styled from '../../styles/Theme';
const ButtonOrBase = (props) => _jsx("div", { className: props.className });
const ButtonOrStyled = styled(ButtonOrBase) `
  display:  inline-block;
  position: relative;
  width:    0px;
  margin:   0 2px 0 2px;
  z-index:  1;              /* Otherwise next button overlays this. */
  &:before {
    content:       'or';
    position:      absolute;
    top:           -1em;
    left:          -1em;
    width:         2em;
    height:        2em;
    line-height:   2em;
    text-align:    center;
    background:    #ffffff;
    border-radius: 1em;
    color:         #888;
  }
  ${p => p.size === 'mini' && css `font-size: .79em`};
  ${p => p.size === 'tiny' && css `font-size: .86em`};
  ${p => p.size === 'small' && css `font-size: .93em`};
  ${p => p.size === 'large' && css `font-size: 1.14em`};
  ${p => p.size === 'big' && css `font-size: 1.29em`};
  ${p => p.size === 'huge' && css `font-size: 1.43em`};
  ${p => p.size === 'massive' && css `font-size: 1.71em`};  
`;
const ButtonOr = (props) => _jsx(ButtonOrStyled, { ...props });
export { ButtonOr };
