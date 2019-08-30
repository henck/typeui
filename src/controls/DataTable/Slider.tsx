import * as React from 'react';
import styled from '../../styles/Theme';

interface ISliderProps {
  className?: string;
  children?: React.ReactNode;
  heightInItems: number;
}

class SliderBase extends React.Component<ISliderProps,{}> {
  render() {
    let p = this.props;
    return (
      <div className={p.className} style={{height: (p.heightInItems * ITEM_HEIGHT) + "px"}}>
        {p.children}
      </div>
    );
  }
}

const ITEM_HEIGHT = 57;

const Slider = styled(SliderBase)`
  position: relative;
  /* Draw repeating empty rows in background */
  background-size: 100% ${ITEM_HEIGHT}px;
  background-image: linear-gradient(to bottom, #fff 56px, ${p => p.theme.normalColor} 1px);
`

export { Slider };