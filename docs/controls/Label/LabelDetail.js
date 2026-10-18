import { jsx as _jsx } from "react/jsx-runtime";
import styled from '../../styles/Theme';
const LabelDetailBase = (props) => _jsx("span", { className: props.className, children: props.children });
const LabelDetailStyled = styled(LabelDetailBase) `
  opacity: 0.7;
  margin-left: 0.6em;
`;
const LabelDetail = (props) => _jsx(LabelDetailStyled, { ...props });
export { LabelDetail };
