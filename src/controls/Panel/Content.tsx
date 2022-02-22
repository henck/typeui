import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';

interface IContentProps {
  /** @ignore */
  className?: string;
  children?: React.ReactNode;
}

class ContentBase extends React.Component<IContentProps> {
  render = () => <div className={this.props.className}>{this.props.children}</div>
}

const ContentStyled = styled(ContentBase)`
  position: relative;
  padding: 14px;
  &:first-child {
    border-top-left-radius: ${p => p.theme.radius}px;
    border-top-right-radius: ${p => p.theme.radius}px;    
  }
  &:not(:last-child) {
    border-bottom: solid 1px ${p => p.theme.normalColor};
  }
`

class Content extends React.Component<IContentProps> {
  render = () => <ContentStyled {...this.props}></ContentStyled>
}

export { Content };
