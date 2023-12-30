import * as React from 'react';
import styled from '../../styles/Theme';

interface ISliderProps {
  /** @ignore */
  className?: string;
  /** @ignore */
  children?: React.ReactNode;
  heightInItems: number;
}

const SliderBase = (props: ISliderProps) =>
  <div className={props.className} style={{height: (props.heightInItems * ITEM_HEIGHT) + "px"}}>
    {props.children}
  </div>

const ITEM_HEIGHT = 57;

const Slider = styled(SliderBase)`
  position: relative;
  /* Draw repeating empty rows in background */
  background-size: 100% ${ITEM_HEIGHT}px;
  background-image: linear-gradient(to bottom, ${p => p.theme.background} 56px, ${p => p.theme.normalColor} 1px);
`

export { Slider }
