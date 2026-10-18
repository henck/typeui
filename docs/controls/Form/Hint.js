import { jsx as _jsx } from "react/jsx-runtime";
import styled from '../../styles/Theme';
const HintBase = (props) => _jsx("div", { className: props.className, children: props.children });
const Hint = styled(HintBase) `
  font-size: 80%;
  line-height: 1.4em;
  color: #aaa;
  padding-top: 4px;
  padding-left: 4px;
`;
export { Hint };
