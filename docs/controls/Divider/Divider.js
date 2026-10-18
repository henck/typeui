import { jsx as _jsx } from "react/jsx-runtime";
import { css } from 'styled-components';
import styled from '../../styles/Theme';
const DividerBase = (props) => _jsx("div", { className: props.className, children: _jsx("span", { children: props.children }) });
const DividerStyled = styled(DividerBase) `
  position: relative; // For internal <span> positioning.
  box-sizing: border-box;
  font-weight: 500;
  background-color: ${p => p.theme.background};

  // A divider always clears content above it.
  clear: both;

  // Margin:
  // A fitted divider has no vertical margin. 
  // A section divider has double vertical margin.
  margin: 14px 0;
  ${p => p.fitted && css `margin: 0;`}
  ${p => p.narrow && css `margin: 7px 0;`}
  ${p => p.section && css `margin: 28px 0;`}

  // Border:
  // A hidden divider has no dividing line.
  border-top: solid 1px ${p => p.hidden ? 'transparent' : p.theme.normalColor};

  // A <span> is used to center the <Divider>'s content vertically.
  & > span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    padding: 0 16px;
    background: inherit;
  }

  // Any elements contained in the <Divider> get their vertical margins removed 
  // to vertically center them properly.  An example would be a <Header> 
  // contained in the <Divider>.
  & span * {
    margin-top: 0;
    margin-bottom: 0;
  }
`;
/**
 * A Divider is used to separate blocks of contents vertically. Dividers
 * can be invisible or contain a horizontal line. Dividers can also contain
 * content.
 *
 * @example
 * <Divider>OR</Divider>
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-divider--properties
 */
const Divider = (props) => _jsx(DividerStyled, { ...props });
export { Divider };
