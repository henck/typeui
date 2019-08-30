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
    this.handleClick = this.handleClick.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  private handleClick() {
    this.props.onClick();
  }

  private handleToggle() {
    this.props.onToggle();
  }

  render() {
    let p = this.props;

    return (
      <div className={p.className}>
        <div onClick={this.handleClick}></div>
        <svg onClick={this.handleToggle}>
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
