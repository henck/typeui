import * as React from 'react';
import styled from '../../../styles/Theme';

// Other controls
import { Swatch } from './Swatch';
import { ISwatch } from './ISwatch';

interface IProps {
  className?: string;
  swatches: ISwatch[];
  onClick: (idx: number) => void;
  onToggle: (idx: number) => void;
}

const WIDTH = 50;
const HEIGHT = 276;

const SwatchBoxBase = (props: IProps) =>
  <div className={props.className}>
    {props.swatches.map((swatch, i) =>
      <Swatch 
        key={i} 
        color={swatch.color} 
        locked={swatch.locked} 
        onClick={props.onClick.bind(this,i)}
        onToggle={props.onToggle.bind(this,i)}
      />
    )}
  </div>

const SwatchBox = styled(SwatchBoxBase)`
  position: relative;
  width: ${WIDTH}px;
  height: ${HEIGHT}px;
  display: flex;
  flex-direction: column;
`

export { SwatchBox }
