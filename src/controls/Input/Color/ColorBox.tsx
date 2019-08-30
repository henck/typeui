import * as React from 'react';
import styled from '../../../styles/Theme';

/*
 * Note that this ColorBox uses the HSV model, not the HSL model.
 * https://stackoverflow.com/questions/41524641/draw-saturation-brightness-gradient
 */

interface IColorBoxProps {
  className?: string;
  hue: number;
  saturation: number;
  brightness: number;
  onMouseDown: (data: {mouseX: number, offsetX: number, width: number, mouseY: number, offsetY:number, height: number}) => void;
}

const WIDTH = 300;
const HEIGHT = 276;

class ColorBoxBase extends React.Component<IColorBoxProps, {}> {
  private canvasRef: React.RefObject<HTMLCanvasElement>;

  constructor(props: IColorBoxProps) {
    super(props);
    this.canvasRef = React.createRef();
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }

  drawColorBlock() {
    let ctx = this.canvasRef.current.getContext('2d');
    // Brightness, top to bottom.
    var gradB = ctx.createLinearGradient(0, 0, 0, HEIGHT);
    gradB.addColorStop(0, "white");
    gradB.addColorStop(1, "black");
    // Saturation, left to right.
    var gradC = ctx.createLinearGradient(0, 0, WIDTH, 0);
    gradC.addColorStop(0, `hsla(${this.props.hue},100%,50%,0)`);
    gradC.addColorStop(1, `hsla(${this.props.hue},100%,50%,1)`);
  
    ctx.fillStyle = gradB;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    ctx.fillStyle = gradC;
    ctx.globalCompositeOperation = "multiply";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    ctx.globalCompositeOperation = "source-over";    
  }

  private handleMouseDown(e:React.MouseEvent) {
    this.props.onMouseDown({ 
      mouseX: e.nativeEvent.offsetX,
      offsetX: e.clientX - e.nativeEvent.offsetX,
      width: (e.nativeEvent.target as any).clientWidth,
      mouseY: e.nativeEvent.offsetY, 
      offsetY: e.clientY - e.nativeEvent.offsetY,
      height: (e.nativeEvent.target as any).clientHeight});
  }

  componentDidMount() {
    this.drawColorBlock();
  }

  componentDidUpdate() {
    this.drawColorBlock();
  }

  render() {
    let p = this.props;
    return (
      <div className={p.className} onMouseDown={this.handleMouseDown}>
        <canvas ref={this.canvasRef} width={300} height={276}></canvas>
        <div style={{left: Math.floor(p.saturation * 100) + '%', top: Math.floor((1-p.brightness) * 100) + '%'}}></div>
      </div>
    );
  }
}

const ColorBox = styled(ColorBoxBase)`
  position: relative;
  width: 300px;
  @media (max-width: ${p => p.theme.smallScreen}px) {
    width: 100px;
  }  
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

  /* Sat cursor */
  div {
    display: block;
    position: absolute;
    pointer-events: none; /* Does not catch mouse events */
    left: 0;
    top: 0;
    &:before {
      position: absolute;
      content: '';
      box-sizing: border-box;
      top: -7px;
      left: -7px;
      width: 15px;
      height: 15px;
      border: solid 3px #000;
      border-radius: 50%;
    }
    &:after {
      position: absolute;
      content: '';
      box-sizing: border-box;
      top: -4px;
      left: -4px;
      width: 9px;
      height: 9px;
      border: solid 2px #fff;
      border-radius: 50%;
    }
  }
`

export { ColorBox };
