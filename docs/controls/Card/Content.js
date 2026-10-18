import { jsx as _jsx } from "react/jsx-runtime";
import { css } from 'styled-components';
import styled from '../../styles/Theme';
const ContentBase = (props) => _jsx("div", { className: props.className, children: props.children });
const ContentStyled = styled(ContentBase) `
  position: relative;
  padding: 14px;

  ${p => (!p.align || p.align == 'left') && css `text-align: left;`}
  ${p => p.align == 'center' && css `text-align: center;`}    
  ${p => p.align == 'right' && css `text-align: right;`}      

  ${p => p.secondary && css `background: ${p.theme.normalColor};`}

  /* Multiple Card.Content elements are separated by a border. */
  &:not(:first-of-type) {
    border-top: solid 1px ${p => p.theme.normalColor};
  }
`;
const Content = (props) => _jsx(ContentStyled, { ...props });
export { Content };
