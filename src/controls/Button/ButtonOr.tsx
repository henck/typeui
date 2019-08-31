import * as React from 'react';
import { css } from 'styled-components';
import { Size } from './../Types';
import styled from '../../styles/Theme';

interface IButtonOrProps {
  className?: string;
  /** Sets button size: `mini`, `tiny`, `small`, `medium` (default), `large`, `big`, `huge` or `massive`. */
  size?: Size;  
}

class ButtonOrBase extends React.Component<IButtonOrProps, {}> {
  render() {
    return (
      <div className={this.props.className}></div>
    )
  }
}

const ButtonOrStyled = styled(ButtonOrBase)`
  display:  inline-block;
  position: relative;
  width:    0px;
  margin:   0 2px 0 2px;
  z-index:  1;              /* Otherwise next button overlays this. */
  &:before {
    content:       'or';
    position:      absolute;
    top:           -1em;
    left:          -1em;
    width:         2em;
    height:        2em;
    line-height:   2em;
    text-align:    center;
    background:    #ffffff;
    border-radius: 1em;
    color:         #888;
  }
  ${p => p.size==='mini' && css`font-size: .79em`};
  ${p => p.size==='tiny' && css`font-size: .86em`};
  ${p => p.size==='small' && css`font-size: .93em`};
  ${p => p.size==='large' && css`font-size: 1.14em`};
  ${p => p.size==='big' && css`font-size: 1.29em`};
  ${p => p.size==='huge' && css`font-size: 1.43em`};
  ${p => p.size==='massive' && css`font-size: 1.71em`};  
`

class ButtonOr extends React.Component<IButtonOrProps, {}> {
  render() {
    let p = this.props;
    return (
      <ButtonOrStyled {...p}/>
    )
  }  
}

export { ButtonOr };