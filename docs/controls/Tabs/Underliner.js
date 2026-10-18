import { jsx as _jsx } from "react/jsx-runtime";
import styled from '../../styles/Theme';
const UnderlinerBase = (props) => _jsx("div", { className: props.className, ref: props.setRef });
const Underliner = styled(UnderlinerBase) `
  position: absolute;
  left: 0;
  top: 38px;
  width: 0px;
  height: 0px;
  border-top: solid 2px ${p => p.theme.primaryColor};
  box-sizing: border-box;
  transition: left ease .3s, width ease .3s;
`;
export { Underliner };
