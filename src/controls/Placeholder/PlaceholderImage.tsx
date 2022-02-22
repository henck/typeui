import * as React from 'react';
import styled from '../../styles/Theme';
import { css } from 'styled-components';

interface IPlaceholderImageProps {
  /** @ignore */
  className?: string;
  /** 
   * A rectangular image has a 4:3 ratio. 
   * @default false 
   */
  rectangular?: boolean;
}

class PlaceholderImageBase extends React.Component<IPlaceholderImageProps> {
  render = () => <div className={this.props.className}></div>
}

const PlaceholderImageStyled = styled(PlaceholderImageBase)`
  ${p => p.rectangular && css`padding-bottom: 75%;`}
  ${p => !p.rectangular && css`padding-bottom: 100%;`}
  background: transparent;
`;

class PlaceholderImage extends React.Component<IPlaceholderImageProps> {
  render = () => <PlaceholderImageStyled {...this.props}/>
}

export { PlaceholderImage };