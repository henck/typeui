import * as React from 'react';
import styled from '../../styles/Theme';

import { Slice } from './Slice';

const DEFAULT_RADIUS = 100;
const INNER_RADIUS_RATIO = 5;

interface ICircleProps {
  /** @ignore */
  className?: string;
  children?: React.ReactNode;
  /** onClick handler for segment clicks. */
  onClick?: (index: number) => void;
  /** 
   * Circle radius in pixels. Defaults to 100. 
   * @default 100 
   */
  radius?: number;
  /*
   * Segments color. Defauls to dark grey. 
   * @default #333
   */
  color?: string;
}

class CircleBase extends React.Component<ICircleProps> {

  private handleClick = (index: number) => {
    if(this.props.onClick) this.props.onClick(index);
  }

  render() {
    let p = this.props;
    let count = React.Children.count(p.children);
    // Angle size of a single slice
    let sliceSize = 360 / count;
    return (
      <div className={p.className}>
        {/* holder */}
        <div>
          {React.Children.map(p.children, (c:any, index: number) => 
            <Slice 
              color={p.color ? p.color : '#333'}
              radius={p.radius ? p.radius : DEFAULT_RADIUS} 
              index={index}
              onClick={this.handleClick}
              angleBody={sliceSize} 
              angleOffset={index * sliceSize}>
                {c}
            </Slice>
          )}
        </div>
        {/* center */}
        <div>

        </div>
      </div>
    );
  }
}

const CircleStyled = styled(CircleBase).attrs(p => ({
  outerRadius: p.radius ? p.radius : DEFAULT_RADIUS,
  innerRadius: p.radius ? p.radius / INNER_RADIUS_RATIO : DEFAULT_RADIUS / INNER_RADIUS_RATIO
}))`
  position: relative;
  /* Outer circle with slices */
  & > div:nth-child(1) {
    position: relative;
    width: ${p => p.outerRadius * 2 + 'px'};
    height: ${p => p.outerRadius * 2 + 'px'};
    background: #eee;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: rgba(34, 36, 38, 0.15) 0px 0px 3px 3px;
  }
  /* Inner circle */
  & > div:nth-child(2) {
    position: absolute;
    left: ${p => p.outerRadius - p.innerRadius + 'px'};
    top: ${p => p.outerRadius - p.innerRadius + 'px'};
    width: ${p => p.innerRadius * 2 + 'px'};
    height: ${p => p.innerRadius * 2 + 'px'};
    background: #fff;
    border-radius: 50%;
    box-shadow: inset rgba(34, 36, 38, 0.15) 0px 0px 3px 3px;
  }
`

class Circle extends React.Component<ICircleProps> {
  render = () => <CircleStyled {...this.props}></CircleStyled>
}

export { Circle };
