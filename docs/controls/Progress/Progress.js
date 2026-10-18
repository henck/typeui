import { jsx as _jsx } from "react/jsx-runtime";
import { css } from 'styled-components';
import styled from '../../styles/Theme';
import { darken } from '../../helper/darken';
import { alpha } from '../../helper/alpha';
const ProgressBase = (props) => _jsx("div", { className: props.className, onClick: props.onClick });
const ProgressStyled = styled(ProgressBase).attrs(p => ({
    percentageStr: Math.round(p.value).toString() + '%'
})) ` 
  position: relative; 
  box-sizing: border-box;
  width: 100%;
  height: ${p => p.thickness ? p.thickness : 12}px;
  margin: 4px 0 4px 0;
  ${p => p.onClick != null && css `cursor: pointer`};

  ${p => p.padded && css `margin: 10px;`}
  ${p => p.bordered && css `border: solid 1px ${p => darken(0.1, p.theme.normalColor)};`}
  ${p => p.background && css `background: ${p => p.theme.normalColor};`}
  
  /* Raised adds a dropshadow. */
  // ${p => p.raised && css `box-shadow: 1px 1px 2px ${p => p.theme.normalColor};`}
  ${p => p.raised && css `box-shadow: 1px 1px 2px 2px ${p => alpha(0.5, darken(0.5, p.theme.normalColor))} ;`}

  /* Not-rectangular adds rounding: */
  ${p => !p.rectangular && css `border-radius: ${p => p.theme.radius + 2}px;`}

  &:before {
    transition: width ${p => p.theme.transition.duration}s ease;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: ${p => p.value + '%'};
    transition: width ${p => p.theme.transition.duration * 2}s;
    height: 100%;
    background: ${p => p.color ? p.color : p.theme.primaryColor};
    /* Not-rectangular adds rounding: */
    ${p => !p.rectangular && css `border-radius: ${p => p.theme.radius}px;`}
  }

  ${p => p.numbered && css `
    &:after {
      content: '${p.percentageStr}';
      position: absolute;
      top: 50%;
      right: 6px;
      font-size: 8px;
      line-height: 0;
    }
  `}
`;
/**
 * The Progress component shows a progress bar, filled to a percentage equal to
 * value. The bar always stretches to fill all horizontal space available to it.
 *
 * @example
 * <Progress
 *   background
 *   value={50}/>
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-progress--properties
 */
const Progress = (props) => _jsx(ProgressStyled, { ...props });
export { Progress };
