import { jsx as _jsx } from "react/jsx-runtime";
import styled from '../../../styles/Theme';
const HarmonyElementBase = (props) => _jsx("div", { className: props.className, onClick: props.onClick, style: { background: props.color } });
const HarmonyElement = styled(HarmonyElementBase) `
  position: relative;
  flex: 1;
  height: 40px;
  max-width: 80px;
  cursor: pointer;

  /* First and last child have rounded borders. */
  &:first-child {
    border-top-left-radius: ${p => p.theme.radius}px;
    border-bottom-left-radius: ${p => p.theme.radius}px;
  }
  &:last-child {
    border-top-right-radius: ${p => p.theme.radius}px;
    border-bottom-right-radius: ${p => p.theme.radius}px;
  }

  /* Lift element up when hovered. */
  z-index: 0;
  transition: transform ${p => p.theme.transition.duration}s ease;
  &:hover {
    z-index: 1;
    transform: scaleX(1.2) scaleY(1.2);
  }
`;
export { HarmonyElement };
