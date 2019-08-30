import * as React from 'react';
import styled from '../../styles/Theme';

interface IClearProps {
  className?: string;
  onClick: () => void;
}

class ClearBase extends React.Component<IClearProps, {}> {

  handleClick = (e:React.MouseEvent) => {
    // Stop propagation, or color/date controls will open on click.
    e.stopPropagation();
    this.props.onClick();
  }

  render() {
    let p = this.props;
    return (
      <svg className={p.className} onClick={this.handleClick}>
        <use xlinkHref={"spritemap.svg#times"}></use>
      </svg>
    );
  }
}

const Clear = styled(ClearBase)`
  position: absolute;
  z-index: 1;
  right: 15px;
  top: 10px;
  width: 17px;
  height: 17px;
  cursor: pointer;
  fill: #888;
  &:hover {
    fill: ${p => p.theme.fontColor};
  }
`

export { Clear };
