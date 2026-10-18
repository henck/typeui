import { jsx as _jsx } from "react/jsx-runtime";
import styled from '../../styles/Theme';
// Helpers
import { lighten } from '../../helper/lighten';
const SliceBase = (props) => _jsx("div", { className: props.className, children: _jsx("div", { onClick: () => props.onClick(props.index), children: _jsx("div", { children: _jsx("div", { children: _jsx("div", { children: props.children }) }) }) }) });
// 120 => skew -30
// 100 => skew -10
// 90  => skew 0
// 80  => skew 10
// 70  => skew 20
// 60  => skew 30
// 50  => skew 40
// 
// ==> 90 - angle
const SliceStyled = styled(SliceBase).attrs(p => ({
    skew: (90 - p.angleBody),
    rad: (p.angleOffset - 90 + p.angleBody / 2) * Math.PI / 180
})) `
  /* slice */
  & > div {
    position: absolute;
    z-index: 0;
    top: 50%; left: 50%;          /* Rectangle is placed at center of parent circle */
    width: 100vw; height: 100vw;  /* Extremely large rectangle fills any circle size */
    
    background: ${p => p.color};
    transform: rotate(${p => p.angleOffset - 90}deg) skew(${p => p.skew}deg);
    /* Transform around top-left corner of rectangle */
    transform-origin: 0 0;
    border: solid 1px #fff;
    &:hover {
      background: ${p => lighten(0.1, p.color)};
      transform: rotate(${p => p.angleOffset - 90}deg) skew(${p => p.skew}deg) scaleX(1.1) scaleY(1.1);
      box-shadow: inset 0px 0px 0px 1px #111;
      transition: all ${p => p.theme.transition.duration}s;
    }
    overflow: hidden;
    cursor: pointer;
    /* move content */
    & > div {
      position: absolute;
      left: ${p => p.radius / 3}px;
      top: ${p => p.radius / 3}px;
      /* untransform */
      & > div {
        position: absolute;
        transform: skew(${p => -p.skew}deg) rotate(${p => 90 - p.angleOffset}deg);
        /* retransform */
        & > div {
          position: absolute;
          transform: translateX(-50%) translateY(-50%) rotate(${p => p.angleOffset + p.angleBody / 2}deg);
          user-select: none;
          color: #fff;
          text-align: center;
        }
      }
    }
  }
`;
const Slice = (props) => _jsx(SliceStyled, { ...props });
export { Slice };
