import * as React from 'react';
import styled from '../../../styles/Theme';

interface ISwatch {
  color: string;
  locked: boolean;
}

interface ISwatchProps {
  className?: string;
  color: string;
  locked: boolean;
  onClick: () => void;
  onToggle: () => void;
}

class SwatchBase extends React.Component<ISwatchProps, {}> {
  constructor(props: ISwatchProps) {
    super(props);
  }

  render() {
    let p = this.props;

    return (
      <div className={p.className}>
        <div onClick={this.props.onClick}></div>
        <svg onClick={this.props.onToggle}>
          <use xlinkHref={`spritemap.svg#${p.locked ? 'lock' : 'unlock'}`}></use>
        </svg>
      </div>
    );
  }
}

const Swatch = styled(SwatchBase)`
  position: relative;
  display: flex;
  width: 50px;
  align-items: center;
  margin-bottom: 4px;

  & > div {
    width: 30px;
    height: 24px;
    background-color: ${p => p.color};
    border-radius: ${p => p.theme.radius}px;
    margin-right: 4px;
    cursor: pointer;
    transition: transform ${p => p.theme.transition.duration}s ease;
    &:hover {
      transform: scaleX(1.2) scaleY(1.2);
    }
  }

  svg {
    fill: ${p => p.locked ? p.theme.fontColor : p.theme.normalColor};
    width:  13px;
    height: 13px;
    cursor: pointer;
    transition: transform ${p => p.theme.transition.duration}s ease;
    &:hover {
      transform: scaleX(1.2) scaleY(1.2);
    }
  }
`

export { Swatch, ISwatch };
