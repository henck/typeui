import { jsx as _jsx } from "react/jsx-runtime";
import styled from '../../../styles/Theme';
// Other controls
import { Swatch } from './Swatch';
const WIDTH = 50;
const HEIGHT = 276;
const SwatchBoxBase = (props) => _jsx("div", { className: props.className, children: props.swatches.map((swatch, i) => _jsx(Swatch, { color: swatch.color, locked: swatch.locked, onClick: props.onClick.bind(this, i), onToggle: props.onToggle.bind(this, i) }, i)) });
const SwatchBox = styled(SwatchBoxBase) `
  position: relative;
  width: ${WIDTH}px;
  height: ${HEIGHT}px;
  display: flex;
  flex-direction: column;
`;
export { SwatchBox };
