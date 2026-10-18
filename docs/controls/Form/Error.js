import { jsx as _jsx } from "react/jsx-runtime";
import styled from '../../styles/Theme';
// Helpers
import { lighten } from '../../helper/lighten';
const ErrorBase = (props) => _jsx("div", { className: props.className, children: props.children });
const Error = styled(ErrorBase) `
  font-size: 80%;
  line-height: 1.4em;
  color: ${p => p.contrast ? lighten(0.3, p.theme.errorColor.color) : p.theme.errorColor.color};
  padding-top: 4px;
  padding-left: 4px;
`;
export { Error };
