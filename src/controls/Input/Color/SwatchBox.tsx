import * as React from 'react';
import styled from '../../../styles/Theme';
import { Swatch } from './Swatch';
import { ISwatch } from './Swatch';

interface ISwatchBoxProps {
  className?: string;
  swatches: ISwatch[];
  onClick: (idx: number) => void;
  onToggle: (idx: number) => void;
}

const WIDTH = 50;
const HEIGHT = 276;

class SwatchBoxBase extends React.Component<ISwatchBoxProps, {}> {
  render() {
    let p = this.props;

    return (
      <div className={p.className}>
        {p.swatches.map((swatch, i) =>
          <Swatch 
            key={i} 
            color={swatch.color} 
            locked={swatch.locked} 
            onClick={this.props.onClick.bind(this,i)}
            onToggle={this.props.onToggle.bind(this,i)}
            />
        )}
      </div>
    );
  }
}

const SwatchBox = styled(SwatchBoxBase)`
  position: relative;
  width: ${WIDTH}px;
  height: ${HEIGHT}px;
  display: flex;
  flex-direction: column;
`

export { SwatchBox };
