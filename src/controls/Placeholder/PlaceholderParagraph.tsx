import * as React from 'react';
import styled from '../../styles/Theme';

interface IPlaceholderParagraphProps {
  className?: string;
  children?: React.ReactNode;
}

class PlaceholderParagraphBase extends React.Component<IPlaceholderParagraphProps, {}> {
  render() {
    let p = this.props;
    return (
      <div className={p.className}>{p.children}</div>
    );
  }
}

const PlaceholderParagraphStyled = styled(PlaceholderParagraphBase)`
  position: relative;
  background: transparent;

  /* The padding on top of the paragraph is later overdrawn
  * by :before, to give the paragraph some whitespace
  * on top. 
  * (This does not happen for the first paragraph in a collection.) */
  &:not(:first-child) {
    padding-top: 18px;
    &:before {
      position: absolute;
      content: '';
      top: 0px;
      height: 18px;
      left: 0;
      right: 0;
      background: #fff;
    }
  }
`;

class PlaceholderParagraph extends React.Component<IPlaceholderParagraphProps, {}> {
  render() {
    let p = this.props;
    return (
      <PlaceholderParagraphStyled {...p}/>
    )
  }  
}

export { PlaceholderParagraph };