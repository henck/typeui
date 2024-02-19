import * as React from 'react';
import { HslColor } from '../../helper/HslColor';
import { RgbColor } from '../../helper/RgbColor';

interface IProps {
  children?: React.ReactNode;
}

const Ripple = (props: IProps) => {
  const ref = React.useRef<HTMLElement>(null);
  const animationID = React.useRef<number>(null);

  React.useEffect(() => {
    // End animation if it is running.
    return () => stopAnimation();
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    stopAnimation();

    // Determine (x,y) inside element where mouse was pressed,
    // in percentages.
    const rect = ref.current.getBoundingClientRect();
    const rippleX = Math.round((e.nativeEvent.clientX - rect.left) * 100 / rect.width);
    const rippleY = Math.round((e.nativeEvent.clientY - rect.top) * 100 / rect.height);

    animationID.current = requestAnimationFrame(() => animate(rippleX, rippleY, 0));
  }

  const stopAnimation = () => {
    if(animationID.current) cancelAnimationFrame(animationID.current);
  }

  const easeInOutQuad = (t: number) => { 
    // The functions below are actually in the range t = [0..2],
    // which is why we multiply t by 2 first.
    t = t * 2;
    if(t < 0.5) return 2*t*t;
    if(t < 1.5) return -1 + (4 - 2 * t) * t;
    return 2 * (t-2) * (t-2);
  }

  const animate = (rippleX: number, rippleY: number, percentage: number) => {
    // Do not animate after component is destroyed.
    if(ref.current === null) return;

    // Get the element's original background color.
    let backgroundColor = getComputedStyle(ref.current).backgroundColor;
    // Store HSL version of background color of ripple's element.
    let backgroundHSL = HslColor.FromRgb(RgbColor.FromString(backgroundColor));
    
    // Calculate lightness increase/decrease from animation frame.
    let lightDiff = easeInOutQuad(percentage / 100) * 0.1;
    // If the original element has a lightness of over 50%, then 
    // we ADD the increase, otherwise we subtract it.
    if(backgroundHSL.lightness > 0.5) lightDiff = -lightDiff;
    let light = lightDiff + backgroundHSL.lightness;
    // Build HSL for the lightcolor.
    let lightColor = `hsl(${backgroundHSL.hue}, ${Math.round(backgroundHSL.saturation * 100)}%, ${Math.round(light*100)}%)`;
    // Apply ripple background image.
    ref.current.style.backgroundImage =
      `radial-gradient(
        circle at ${rippleX}% ${rippleY}%, 
        ${lightColor} 0%, 
        ${lightColor} ${percentage}%, 
        ${backgroundColor} 
        ${percentage}%, 
        ${backgroundColor})`;
    // Go to next frame.
    percentage += 3;

    // Stop animation when we hit a ripple of 100%.
    if(percentage <= 100) {
      requestAnimationFrame(() => animate(rippleX, rippleY, percentage));
    } else if(animationID.current) {
      cancelAnimationFrame(animationID.current);
      animationID.current = 0;
    }
  }

  // Render children, given them a ref:
  const ChildComponentWithRef = React.forwardRef((childProps, ref) => 
    React.cloneElement(props.children as any, {
      ...childProps,
      onMouseDown: handleMouseDown,
      ref
    })
  );
  return <ChildComponentWithRef ref={ref} />
}

export { Ripple }
