import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';

interface IContentProps {
  className?: string;
  children?: React.ReactNode;
}

class ContentBase extends React.Component<IContentProps, {}> {
  render() {
    let p = this.props;
    return (
      <div className={p.className}>
        {p.children}
      </div>
    );
  }
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

class Content extends React.Component<IContentProps, {}> {
  render() {
    return (
      <ContentStyled {...this.props}></ContentStyled>
    );
  }
}

export { Content };
