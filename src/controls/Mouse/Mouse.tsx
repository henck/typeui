import * as React from 'react';
import styled from '../../styles/Theme';

interface IProps {
  /** @ignore */
  className?: string;
  /** Is left button depressed? */
  left?: boolean;
  /** Is right button depressed? */
  right?: boolean;
  /** Is mouse wheel highlighted? */
  wheel?: boolean;
}

const MOUSE_COLOR = "#888";
const HIGHLIGHT_COLOR = "#00EDF0";

const MouseBase = (props: IProps) => {
  return (
    <svg className={props.className} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 585.2 939">
      <path d="M282.9,921.4h19.3c144.7,0,262.4-117.7,262.4-262.4V500.3H20.5v158.7C20.5,803.6,138.2,921.4,282.9,921.4z"/>
      <path className="wheel" d="M246.9,168.5v157.1c0,24.6,20,44.7,44.7,44.7h2c24.6,0,44.7-20,44.7-44.7V168.5c0-24.6-20-44.7-44.7-44.7h-2	C267,123.8,246.9,143.8,246.9,168.5z"/>
      <path className="right" d="M308.6,19.3v73.9c35.1,7,61.6,38,61.6,75.2v157.1c0,37.1-26.5,68.2-61.6,75.2v67.5h256.1V281.7 C564.6,139.1,450.4,22.7,308.6,19.3z"/>
      <path className="left"  d="M20.5,281.7v186.6h256.1v-67.5c-35.1-7-61.6-38-61.6-75.2V168.5c0-37.1,26.5-68.2,61.6-75.2V19.3 C134.8,22.7,20.5,139.1,20.5,281.7z"/>
    </svg>
  );
}

const MouseStyled = styled(MouseBase)`
  width:  14px;
  height: 20px;
  fill:   ${MOUSE_COLOR};
  .left  { fill: ${p => p.left  ? HIGHLIGHT_COLOR : MOUSE_COLOR}}
  .right { fill: ${p => p.right ? HIGHLIGHT_COLOR : MOUSE_COLOR}}
  .wheel { fill: ${p => p.wheel ? HIGHLIGHT_COLOR : MOUSE_COLOR}}
`

/**
 * The `Mouse` displays a mouse icon. Its buttons and mouse wheel can be
 * highlighted.
 */
const Mouse = (props: IProps) => <MouseStyled {...props}/>

export { Mouse }

