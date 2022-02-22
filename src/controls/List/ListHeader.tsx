import * as React from 'react';
import styled from '../../styles/Theme';

interface IListHeaderProps {
  /** @ignore */
  className?: string;
  children?: React.ReactNode;
}

class ListHeaderBase extends React.Component<IListHeaderProps> {
  render = () => <div className={this.props.className}>{this.props.children}</div>
}

/* Styling for list header. */
const ListHeaderStyled = styled(ListHeaderBase)`
  font-weight: 500;
  line-height: 1em;
  padding-top: 4px;
`;

class ListHeader extends React.Component<IListHeaderProps> {
  render = () => <ListHeaderStyled {...this.props}/>
}

export { ListHeader };
