import { jsx as _jsx } from "react/jsx-runtime";
import styled, { css } from '../../styles/Theme';
import { alpha } from '../../helper/alpha';
import { darken } from '../../helper/darken';
const ValueBase = (props) => _jsx("div", { className: props.className, children: props.children });
/**
 * Numeric value to show in center of control.
 */
const Value = styled(ValueBase) `
  position: absolute;
  font-weight: 500;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  // Font size defaults to 100% of inherited fonts size, but can be affected
  // by fontFactor, which multiplies it.
  font-size: ${p => (p.fontFactor ?? 1) * 100}%;
  // If raised, then font also gets a shadow.
  ${p => p.raised && css `text-shadow: 1px 1px 2px ${alpha(0.5, darken(0.5, p.theme.normalColor))};`}  
`;
export { Value };
