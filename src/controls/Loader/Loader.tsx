import * as React from 'react';
import styled from '../../styles/Theme';
import { keyframes } from 'styled-components';

interface ILoaderProps {
  /** @ignore */
  className?: string;
}

const scaleDelay = keyframes`
  0%, 70%, 100% {
    transform: scale3D(1, 1, 1);
  } 35% {
    transform: scale3D(0, 0, 1); 
  }
`;

const Shader = styled.div`
  position: absolute;
  z-index: 999;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: #000;
  opacity: 0.6;
`;

const Grid = styled.div`
  position: absolute;
  z-index: 1000;
  left: 50%;
  top: 50%;
  margin-left: -20px;
  margin-top: -20px;
  width: 40px;
  height: 40px;
  background: transparent;
`;

const Cube = styled.div`
  width: 33%;
  height: 33%;
  background-color: #fff;
  float: left;
  animation: ${scaleDelay} 1.3s infinite ease-in-out;
  &:nth-child(1) { animation-delay: 0.2s; }
  &:nth-child(2) { animation-delay: 0.3s; }
  &:nth-child(3) { animation-delay: 0.4s; }
  &:nth-child(4) { animation-delay: 0.1s; }
  &:nth-child(5) { animation-delay: 0.2s; }
  &:nth-child(6) { animation-delay: 0.3s; }
  &:nth-child(7) { animation-delay: 0.0s; }
  &:nth-child(8) { animation-delay: 0.1s; }
  &:nth-child(9) { animation-delay: 0.2s; }  
`;

const LoaderBase = (props: ILoaderProps) =>
  <div className={props.className}>
    <Shader></Shader>
    <Grid>
      {Array(9).fill(0).map((v, i) => (<Cube key={i}></Cube>))}
    </Grid>
  </div>

/** 
 * A Loader projects a loading animation over the entire screen. 
 * 
 * @link https://henck.github.io/typeui/?path=/story/controls-loader-types--loader
 */
const LoaderStyled = styled(LoaderBase)`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

const Loader = (props: ILoaderProps) => <LoaderStyled {...props}/>

export { Loader }
