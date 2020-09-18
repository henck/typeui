import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';

// Types
import { HorizontalAlignment } from '../Types';

interface IContentProps {
  className?: string;
  children?: React.ReactNode;
  /** Optional text alignment to `left`, `center` or `right` (default is `left`). */
  align?: HorizontalAlignment;
  /** Secondary card content has a dark background. */
  secondary?: boolean;
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

  ${p => (!p.align || p.align == 'left') && css`text-align: left;`}
  ${p => p.align == 'center' && css`text-align: center;`}    
  ${p => p.align == 'right' && css`text-align: right;`}      

  ${p => p.secondary && css`background: ${p.theme.normalColor};`}

  /* Multiple Card.Content elements are separated by a border. */
  &:not(:first-of-type) {
    border-top: solid 1px ${p => p.theme.normalColor};
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
