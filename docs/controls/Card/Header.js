import { jsx as _jsx } from "react/jsx-runtime";
import { css } from 'styled-components';
import styled from '../../styles/Theme';
const HeaderBase = (props) => _jsx("span", { className: props.className, children: props.children });
const HeaderStyled = styled(HeaderBase) `
  position: relative;
  display: block;
  padding: 14px 14px 0 14px;
  font-size: 20px;
  ${p => (!p.align || p.align == 'left') && css `text-align: left;`}
  ${p => p.align == 'center' && css `text-align: center;`}    
  ${p => p.align == 'right' && css `text-align: right;`}    
  &:last-child {
    padding-bottom: 12px;
  }
`;
const Header = (props) => _jsx(HeaderStyled, { ...props });
export { Header };
