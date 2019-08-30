import * as React from 'react';
import styled from '../../styles/Theme';
import { css } from 'styled-components';

interface IPlaceholderImageProps {
  className?: string;
  /** A rectangular image has a 4:3 ratio. */
  rectangular?: boolean;
}

class PlaceholderImageBase extends React.Component<IPlaceholderImageProps, {}> {
  render() {
    let p = this.props;
    return (
      <div className={p.className}></div>
    );
  }
}

const PlaceholderImageStyled = styled(PlaceholderImageBase)`
  ${p => p.rectangular && css`padding-bottom: 75%;`}
  ${p => !p.rectangular && css`padding-bottom: 100%;`}
  background: transparent;
`;

class PlaceholderImage extends React.Component<IPlaceholderImageProps, {}> {
  render() {
    let p = this.props;
    return (
      <PlaceholderImageStyled {...p}/>
    )
  }  
}

export { PlaceholderImage };