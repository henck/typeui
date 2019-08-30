import * as React from 'react';
import styled from '../../styles/Theme';
import { css } from 'styled-components';

interface IListHeaderProps {
  className?: string;
  children?: React.ReactNode;
}

class ListHeaderBase extends React.Component<IListHeaderProps, {}> {
  render() {
    let p = this.props;
    return (
      <div className={p.className}>
        {p.children}
      </div>
    )
  }  
}

/* Styling for list header. */
const ListHeaderStyled = styled(ListHeaderBase)`
  font-weight: 500;
  line-height: 1em;
  padding-top: 4px;
`;

class ListHeader extends React.Component<IListHeaderProps, {}> {
  render() {
    let p = this.props;
    return (
      <ListHeaderStyled {...p}/>
    )
  }  
}

export { ListHeader };
