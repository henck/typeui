import { jsx as _jsx } from "react/jsx-runtime";
import styled from '../../styles/Theme';
const ListHeaderBase = (props) => _jsx("div", { className: props.className, children: props.children });
/* Styling for list header. */
const ListHeaderStyled = styled(ListHeaderBase) `
  font-weight: 500;
  line-height: 1em;
  padding-top: 4px;
`;
const ListHeader = (props) => _jsx(ListHeaderStyled, { ...props });
export { ListHeader };
