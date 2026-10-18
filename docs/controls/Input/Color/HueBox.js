import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import styled from '../../../styles/Theme';
const WIDTH = 30;
const HEIGHT = 276;
const HueBoxBase = (props) => {
    const canvasRef = React.useRef(null);
    // Draw vertical hue bar.
    const drawBar = () => {
        let ctx = canvasRef.current.getContext('2d');
        for (let i = 0; i < HEIGHT; i++) {
            const angle = i / HEIGHT * 360;
            ctx.fillStyle = `hsl(${angle}, 100%, 50%)`;
            ctx.fillRect(0, i, WIDTH, 1);
        }
    };
    const handleMouseDown = (e) => {
        props.onMouseDown({
            mouseY: e.nativeEvent.offsetY,
            offsetY: e.clientY - e.nativeEvent.offsetY,
            height: e.nativeEvent.target.clientHeight
        });
    };
    React.useEffect(() => drawBar(), []);
    return (_jsxs("div", { className: props.className, onMouseDown: handleMouseDown, children: [_jsx("canvas", { ref: canvasRef, width: WIDTH, height: HEIGHT }), _jsx("div", { style: { top: Math.floor(props.hue / 3.6) + '%' } })] }));
};
const HueBox = styled(HueBoxBase) `
  position: relative;
  width: ${WIDTH}px;
  height: ${HEIGHT}px;
  margin-right: 20px;
  cursor: pointer;

  canvas {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: ${p => p.theme.radius}px;
  }
  /* Hue cursor */
  div {
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none; /* Cannot catch events */
    &:after {
      position: absolute;
      content: '';
      box-sizing: border-box;
      left: -3px;
      top: -4px;
      width: ${WIDTH + 6}px;
      height: 9px;
      border: solid 3px ${p => p.theme.fontColor};
      border-radius: 3px;        
    }
  }
`;
export { HueBox };
