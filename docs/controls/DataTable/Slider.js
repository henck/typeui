import { jsx as _jsx } from "react/jsx-runtime";
import styled from '../../styles/Theme';
const SliderBase = (props) => _jsx("div", { className: props.className, style: { height: (props.heightInItems * ITEM_HEIGHT) + "px" }, children: props.children });
const ITEM_HEIGHT = 57;
const Slider = styled(SliderBase) `
  position: relative;
  /* Draw repeating empty rows in background */
  background-size: 100% ${ITEM_HEIGHT}px;
  background-image: linear-gradient(to bottom, ${p => p.theme.background} 56px, ${p => p.theme.normalColor} 1px);
`;
export { Slider };
