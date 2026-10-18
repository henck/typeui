import { jsx as _jsx } from "react/jsx-runtime";
import styled from '../../styles/Theme';
// Helpers
import { lighten } from '../../helper/lighten';
const DialogFooterBase = (props) => _jsx("div", { className: props.className, children: props.children });
const DialogFooterStyled = styled(DialogFooterBase) `
  display: flex;
  flex-direction: row;
  justify-content: ${p => p.align ?? 'end'};
  padding: 20px 20px 20px 20px;
  border-top: solid 1px ${p => p.theme.normalColor};
  background: ${p => lighten(0.1, p.theme.normalColor)};
  border-bottom-left-radius: ${p => p.theme.radius}px;
  border-bottom-right-radius: ${p => p.theme.radius}px;
`;
const DialogFooter = (props) => _jsx(DialogFooterStyled, { ...props });
DialogFooter.displayName = "Dialog.Footer";
export { DialogFooter };
