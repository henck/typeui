import { jsx as _jsx } from "react/jsx-runtime";
import styled from '../../styles/Theme';
import { css } from 'styled-components';
//
// Container for Tabs Panes.
//
const PanesBase = (props) => _jsx("div", { className: props.className, children: props.children });
const Panes = styled(PanesBase) `
  height: 100%;
  flex: 1;
  
  border-bottom-left-radius: ${p => p.theme.radius}px;
  border-bottom-right-radius: ${p => p.theme.radius}px;

  /* Non-underlined panes have a border around them. */
  ${p => !p.underlined && css `
    padding: 14px;
    border: solid 1px rgba(35, 35, 35, 0.15);
    border-top: none;      
  `}
`;
export { Panes };
