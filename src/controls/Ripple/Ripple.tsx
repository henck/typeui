import * as React from 'react';
import { HslColor } from '../../helper/HslColor';
import { RgbColor } from '../../helper/RgbColor';

interface IRippleProps {
  type: string;
  className?: string;
  children?: React.ReactNode;
}

// Ripple adds "any" to props, thus accepting any prop that 
// it will forward to the element it creates.
class Ripple extends React.Component<IRippleProps & any, {}> {
  private ref: React.RefObject<HTMLElement>;
  private backgroundColor: string;
  private backgroundHSL: HslColor;
  private rippleX: number;
  private rippleY: number;
  private animationFrame: number;
  private animationID: number;

  constructor(props: IRippleProps) {
    super(props);
    this.ref = React.createRef<HTMLElement>();
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }

  componentDidMount() {
    // Get the element's original background color.
    this.backgroundColor = getComputedStyle(this.ref.current).backgroundColor;
    // Store HSL version of background color of ripple's element.
    // We do this here so we only have to do this calculation once.
    this.backgroundHSL = HslColor.FromRgb(RgbColor.FromString(this.backgroundColor));
  }

  componentWillUnmount() {
    // End animation if it is running.
    if(this.animationID) {
      cancelAnimationFrame(this.animationID);
    } 
  }

  handleMouseDown(e: React.MouseEvent) {
    // Determine (x,y) inside element where mouse was pressed,
    // in percentages.
    let rect = this.ref.current.getBoundingClientRect();
    this.rippleX = Math.round((e.nativeEvent.clientX - rect.left) * 100 / rect.width);
    this.rippleY = Math.round((e.nativeEvent.clientY - rect.top) * 100 / rect.height);
    
    // Start animation.
    this.animationFrame = 0;
    if(this.animationID) cancelAnimationFrame(this.animationID);
    this.animationID = requestAnimationFrame(this.animate.bind(this));
  }

  easeInOutQuad(t: number) { 
    // The functions below are actually in the range t = [0..2],
    // which is why we multiply t by 2 first.
    t = t * 2;
    if(t < 0.5) return 2*t*t;
    if(t < 1.5) return -1 + (4 - 2 * t) * t;
    return 2 * (t-2) * (t-2);
  }

  animate() {
    // Do not animate after component is destroyed.
    if(this.ref.current === null) return;
    // Calculate lightness increase/decrease from animation frame.
    let lightDiff = this.easeInOutQuad(this.animationFrame/100) * 0.1;
    // If the original element has a lightness of over 50%, then 
    // we ADD the increase, otherwise we subtract it.
    if(this.backgroundHSL.lightness > 0.5) lightDiff = -lightDiff;
    let light = lightDiff + this.backgroundHSL.lightness;
    // Build HSL for the lightcolor.
    let lightColor = `hsl(${this.backgroundHSL.hue}, ${Math.round(this.backgroundHSL.saturation * 100)}%, ${Math.round(light*100)}%)`;
    // Calculate ripple size from animation frame.
    let rippleSize = this.animationFrame;
    // Apply ripple background image.
    this.ref.current.style.backgroundImage =
      `radial-gradient(
        circle at ${this.rippleX}% ${this.rippleY}%, 
        ${lightColor} 0%, 
        ${lightColor} ${rippleSize}%, 
        ${this.backgroundColor} 
        ${rippleSize}%, 
        ${this.backgroundColor})`;
    // Go to next frame.
    this.animationFrame += 3;
    // Stop animation when we hit a ripple of 100%.
    if(this.animationFrame <= 100) {
      requestAnimationFrame(this.animate.bind(this));
    } else if(this.animationID) {
      cancelAnimationFrame(this.animationID);
      this.animationID = 0;
    }
  }

  render() {
    let p = {
      ...this.props,
      ref: this.ref,
      onMouseDown: this.handleMouseDown
    }

    return React.createElement((p as any).type, p, p.children);
  }
}  

export { Ripple };