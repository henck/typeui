import { jsx as _jsx } from "react/jsx-runtime";
import styled from '../../styles/Theme';
import { css } from 'styled-components';
import { alpha } from '../../helper/alpha';
import { darken } from '../../helper/darken';
const InnerCircleBase = (props) => _jsx("div", { className: props.className });
/**
 * Inner circle hides segment centers, and provides a place to show the percentage number.
 */
const InnerCircle = styled(InnerCircleBase) `
  position: absolute;
  left: 50%;
  top: 50%;
  width: ${p => p.radius * 2}px;
  height: ${p => p.radius * 2}px;
  transform: translateX(-50%) translateY(-50%);
  background: ${p => p.theme.background};
  border-radius: 50%;
  ${p => p.raised && css `box-shadow: inset ${p => alpha(0.5, darken(0.5, p.theme.normalColor))} 0px 0px 3px 2px;`}
`;
export { InnerCircle };
