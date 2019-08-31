import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';

interface IProgressProps {
  className?: string;
  children?: React.ReactNode;
  /** Progress value (in range 0..100) */
  value: number;
}

class ProgressBase extends React.Component<IProgressProps, {}> {
  render() {
    let p = this.props;
    return (
      <div className={p.className}>
        <div></div>
      </div>
    );
  }
}

const ProgressStyled = styled(ProgressBase)`
  position: relative; 
  box-sizing: border-box;
  width: 100%;
  height: 12px;
  margin: 4px 0 4px 0;

  &>div {
    box-sizing: border-box;
    width: ${p => p.value + '%'};
    height: 100%;
    background: ${p => p.theme.primaryColor};
    border-radius: ${p => p.theme.radius}px;
  }
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
