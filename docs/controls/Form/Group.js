import { jsx as _jsx } from "react/jsx-runtime";
import styled from '../../styles/Theme';
import { css } from 'styled-components';
const GroupBase = (props) => _jsx("div", { className: props.className, children: props.children });
const GroupStyled = styled(GroupBase) `
  display:        flex;
  flex-direction: row;
  flex-wrap:      wrap;
  align-items:    flex-start;

  /* Insert a small margin between fields, and fix for wrapping
  * using negative margins. */
  margin: 0 -8px;
  & > * { margin: 0 8px; }
  /* For equal spacing, have each field occupy 100%. */
  ${p => p.equal && css `
    & > * {
      width: 100%;
    }
  `}
`;
const Group = (props) => _jsx(GroupStyled, { ...props });
export { Group };
