import { jsx as _jsx } from "react/jsx-runtime";
import styled from '../../styles/Theme';
const DotBase = (props) => _jsx("div", { className: props.className });
const Dot = styled(DotBase) `
  position: absolute;
  left: ${p => p.left}px;
  top: ${p => p.top}px;
  width: ${p => p.thickness}px;
  height: ${p => p.thickness}px;
  transform: translateX(-50%) translateY(-50%);
  background: ${p => p.color ? p.color : p.theme.primaryColor};
  border-radius: 50%;
`;
export { Dot };
