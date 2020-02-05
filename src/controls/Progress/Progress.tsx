import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';
import { darken } from '../../helper/darken';

interface IProgressProps {
  className?: string;
  /** Progress value (in range 0..100) */
  value: number;
  /** If set, Progress is not rounded. */
  rectangular?: boolean;
  /** If set, a background is added. */
  background?: boolean;
  /** If set, a border is added. */
  bordered?: boolean;
  /** A raised Progress has a drop shadow. */
  raised?: boolean;
  /** If set, a percentage number is shown on the Progress bar. */
  numbered?: boolean;
}

class ProgressBase extends React.Component<IProgressProps, {}> {
  render() {
    let p = this.props;
    return (
      <div className={p.className}></div>
    );
  }
}

const ProgressStyled = styled(ProgressBase).attrs(p => ({
  percentage: Math.round(p.value).toString() + '%'
}))` 
  position: relative; 
  box-sizing: border-box;
  width: 100%;
  height: 12px;
  margin: 4px 0 4px 0;

  ${p => p.bordered && css`border: solid 1px ${darken(0.1, p.theme.normalColor)};`}
  ${p => p.background && css`background: ${p.theme.normalColor};`}
  
  /* Raised adds a dropshadow. */
  ${p => p.raised && css`box-shadow: 1px 1px 2px ${p.theme.normalColor};`}

  /* Not-rectangular adds rounding: */
  ${p => !p.rectangular && css`border-radius: ${p.theme.radius + 2}px;`}

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: ${p => p.value + '%'};
    transition: width ${p => p.theme.transition.duration * 2}s;
    height: 100%;
    background: ${p => p.theme.primaryColor};
    /* Not-rectangular adds rounding: */
    ${p => !p.rectangular && css`border-radius: ${p.theme.radius}px;`}
  }

  ${p => p.numbered && css`
    &:after {
      content: '${p.percentage}';
      position: absolute;
      top: 50%;
      right: 6px;
      font-size: 8px;
      line-height: 0;
    }
  `}
`

class Progress extends React.Component<IProgressProps, {}> {
  render() {
    let p = this.props;
    return (
      <ProgressStyled {...p}/>
    )
  }  
}

export { Progress };
