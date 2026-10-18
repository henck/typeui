import { jsx as _jsx } from "react/jsx-runtime";
import styled from '../../styles/Theme';
import { css } from 'styled-components';
const PlaceholderHeaderBase = (props) => _jsx("div", { className: props.className, children: props.children });
const PlaceholderHeaderStyled = styled(PlaceholderHeaderBase) `
  position: relative;
  background: transparent;
  border-top: solid 1px #fff;
  
  /* Separator between image and lines */
  ${p => p.image && css `
    margin-left: 54px;
    &:before {
      position: absolute;
      z-index: 1;
      content: '';
      left: -10px;
      top: -1px;
      bottom: 0;
      width: 10px;
      background: #fff;
    }
  `}

  /* White block under lines */
  padding-bottom: 12px;
  &:after {
    position: absolute;
    z-index: 1;
    content: '';
    left: 0;
    bottom: 0;
    height: 12px;
    right: 0;
    background: #fff;
  }
`;
const PlaceholderHeader = (props) => _jsx(PlaceholderHeaderStyled, { ...props });
export { PlaceholderHeader };
