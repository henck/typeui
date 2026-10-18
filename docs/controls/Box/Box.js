import { jsx as _jsx } from "react/jsx-runtime";
import { css } from 'styled-components';
import styled from '../../styles/Theme';
const BoxBase = (props) => _jsx("div", { className: props.className, children: props.children });
const BoxStyled = styled(BoxBase) `
  display: block;
  padding: 30px;
  text-align: center;
  border-radius: 2px;
  ${p => !p.color && css `background: pink;`}
  ${p => p.color && css `background: ${p.color};`}
`;
const Box = (props) => _jsx(BoxStyled, { ...props });
export { Box };
