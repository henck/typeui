import * as React from 'react';
import styled from '../../../styles/Theme';

interface IHueBoxProps {
  className?: string;
  hue: number;
  onMouseDown: (data: {mouseY: number, offsetY:number, height: number}) => void;
}

const WIDTH = 30;
const HEIGHT = 276;

class HueBoxBase extends React.Component<IHueBoxProps, {}> {
  private canvasRef: React.RefObject<HTMLCanvasElement>;

  constructor(props: IHueBoxProps) {
    super(props);
    this.canvasRef = React.createRef();
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }

  // Draw vertical hue bar.
  drawBar() {
    let ctx = this.canvasRef.current.getContext('2d');
    for(var i = 0; i < HEIGHT; i++) {
      let angle = i / HEIGHT * 360;
      ctx.fillStyle = `hsl(${angle}, 100%, 50%)`;
      ctx.fillRect(0, i, WIDTH, 1);
    }
  }

  private handleMouseDown(e:React.MouseEvent) {
    this.props.onMouseDown({ 
      mouseY: e.nativeEvent.offsetY, 
      offsetY: e.clientY - e.nativeEvent.offsetY,
      height: (e.nativeEvent.target as any).clientHeight
    });
  }

  componentDidMount() {
    this.drawBar();
  }

  render() {
    let p = this.props;
    return (
      <div className={p.className} onMouseDown={this.handleMouseDown}>
        <canvas ref={this.canvasRef} width={WIDTH} height={HEIGHT}></canvas>
        <div style={{top: Math.floor(p.hue / 3.6) + '%'}}></div>
      </div>
    );
  }
}

const HueBox = styled(HueBoxBase)`
  position: relative;
  width: ${WIDTH}px;
  height: ${HEIGHT}px;
  margin-right: 20px;

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
      border: solid 3px #444;
      border-radius: 3px;        
    }
  }
`

export { HueBox };
