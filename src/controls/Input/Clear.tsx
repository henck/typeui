import * as React from 'react';
import styled from '../../styles/Theme';

interface IProps {
  /** @ignore */
  className?: string;
  onClick: () => void;
}

const ClearBase = (props: IProps) => {

  const handleClick = (e:React.MouseEvent) => {
    // Stop propagation, or color/date controls will open on click.
    e.stopPropagation();
    props.onClick();
  }

  return (
    <svg className={props.className} onClick={handleClick}>
      <use xlinkHref={"spritemap.svg#times"}></use>
    </svg>
  )
}

const Clear = styled(ClearBase)`
  position: absolute;
  z-index: 1;
  right: 15px;
  top: 10px;
  width: 17px;
  height: 17px;
  cursor: pointer;
  transition: opacity ease-in-out 120ms;
  fill: ${p => p.theme.fontColor};
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`

export { Clear }
