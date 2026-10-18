import { jsx as _jsx } from "react/jsx-runtime";
import styled from '../../styles/Theme';
const DialogContentBase = (props) => _jsx("div", { className: props.className, children: props.children });
const DialogContentStyled = styled(DialogContentBase) `
  position:   relative;
  padding:    20px 20px 20px 20px;
  max-height: ${p => p.maxHeight ?? 70}vh;
  overflow-y: auto;  
`;
const DialogContent = (props) => _jsx(DialogContentStyled, { ...props });
DialogContent.displayName = "Dialog.Content";
export { DialogContent };
