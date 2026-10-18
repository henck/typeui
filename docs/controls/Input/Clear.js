import { jsx as _jsx } from "react/jsx-runtime";
import styled from '../../styles/Theme';
const ClearBase = (props) => {
    const handleClick = (e) => {
        // Stop propagation, or color/date controls will open on click.
        e.stopPropagation();
        props.onClick();
    };
    return (_jsx("svg", { className: props.className, onClick: handleClick, children: _jsx("use", { xlinkHref: "/spritemap.svg#times" }) }));
};
const Clear = styled(ClearBase) `
  position: absolute;
  z-index: 1;
  right: 15px;
  top: 10px;
  width: 17px;
  height: 17px;
  cursor: pointer;
  transition: opacity ease-in-out 120ms;
  fill: ${p => p.theme.fontColor};
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;
export { Clear };
