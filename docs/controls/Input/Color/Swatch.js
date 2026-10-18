import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from '../../../styles/Theme';
const SwatchBase = (props) => _jsxs("div", { className: props.className, children: [_jsx("div", { onClick: props.onClick }), _jsx("svg", { onClick: props.onToggle, children: _jsx("use", { xlinkHref: `/spritemap.svg#${props.locked ? 'lock' : 'unlock'}` }) })] });
const Swatch = styled(SwatchBase) `
  position: relative;
  display: flex;
  width: 50px;
  align-items: center;
  margin-bottom: 4px;

  & > div {
    width: 30px;
    height: 24px;
    background-color: ${p => p.color};
    border-radius: ${p => p.theme.radius}px;
    margin-right: 4px;
    cursor: pointer;
    transition: transform ${p => p.theme.transition.duration}s ease;
    &:hover {
      transform: scaleX(1.2) scaleY(1.2);
    }
  }

  svg {
    fill: ${p => p.locked ? p.theme.fontColor : p.theme.normalColor};
    width:  13px;
    height: 13px;
    cursor: pointer;
    transition: transform ${p => p.theme.transition.duration}s ease;
    &:hover {
      transform: scaleX(1.2) scaleY(1.2);
    }
  }
`;
export { Swatch };
