import { jsx as _jsx } from "react/jsx-runtime";
import styled from '../../styles/Theme';
const DialogHeaderBase = (props) => _jsx("div", { className: props.className, children: props.children });
const DialogHeaderStyled = styled(DialogHeaderBase) `
  padding:       20px 20px 15px 20px;
  border-bottom: solid 1px ${p => p.theme.normalColor};
  font-size:     24px;
  font-weight:   500;
`;
const DialogHeader = (props) => _jsx(DialogHeaderStyled, { ...props });
DialogHeader.displayName = "Dialog.Header";
export { DialogHeader };
